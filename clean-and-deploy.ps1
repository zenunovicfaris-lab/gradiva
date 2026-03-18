# ============================================================
#  GRADIVA — Clean & Deploy skriptu
#  Pokretanje: .\clean-and-deploy.ps1
#  PowerShell 5.1+ / PowerShell 7+
# ============================================================

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# ── Helpers ─────────────────────────────────────────────────
function Write-Step  { param($msg) Write-Host "`n[$([char]0x25B6)] $msg" -ForegroundColor Cyan }
function Write-OK    { param($msg) Write-Host "  [OK] $msg"  -ForegroundColor Green }
function Write-Warn  { param($msg) Write-Host "  [!!] $msg"  -ForegroundColor Yellow }
function Write-Fail  { param($msg) Write-Host "  [X]  $msg"  -ForegroundColor Red; exit 1 }

$Root = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $Root

# ── 1. Brisanje build artefakata ────────────────────────────
Write-Step "Brisanje .next, node_modules i package-lock.json..."

foreach ($target in @(".next", "node_modules")) {
    $path = Join-Path $Root $target
    if (Test-Path $path) {
        Remove-Item -Recurse -Force $path
        Write-OK "Obrisan: $target"
    } else {
        Write-Warn "Nije pronađen (preskočen): $target"
    }
}

$lockFile = Join-Path $Root "package-lock.json"
if (Test-Path $lockFile) {
    Remove-Item -Force $lockFile
    Write-OK "Obrisan: package-lock.json"
}

# ── 2. Uklanjanje critters iz package.json ──────────────────
Write-Step "Provjera package.json za 'critters'..."

$pkgPath = Join-Path $Root "package.json"
if (-not (Test-Path $pkgPath)) { Write-Fail "package.json nije pronađen!" }

$pkgRaw = Get-Content $pkgPath -Raw
if ($pkgRaw -match '"critters"') {
    # Ukloni liniju koja sadrži "critters": "..." (sa zarezom ispred ili iza)
    $pkgRaw = $pkgRaw -replace ',?\s*"critters"\s*:\s*"[^"]*"', ''
    # Počisti duple zareze koji mogu nastati
    $pkgRaw = $pkgRaw -replace ',\s*,', ','
    # Počisti zarez prije zatvorene zagrade
    $pkgRaw = $pkgRaw -replace ',\s*}', '}'
    Set-Content $pkgPath $pkgRaw -Encoding UTF8 -NoNewline
    Write-OK "Uklonjen 'critters' iz package.json"
} else {
    Write-Warn "'critters' nije pronađen u package.json — preskočeno"
}

# ── 3. Uklanjanje critters iz next.config.js / next.config.ts
Write-Step "Provjera next.config za 'critters'..."

foreach ($configFile in @("next.config.js", "next.config.ts", "next.config.mjs")) {
    $cfgPath = Join-Path $Root $configFile
    if (-not (Test-Path $cfgPath)) { continue }

    $cfgRaw = Get-Content $cfgPath -Raw
    $modified = $false

    # Komentiraj require('critters')
    if ($cfgRaw -match "require\(['\"]critters['\"]\)") {
        $cfgRaw = $cfgRaw -replace "(.*require\(['\"]critters['\"]\).*)", '// [REMOVED] $1'
        $modified = $true
    }

    # Komentiraj new Critters(...)  — jednolinisjki
    if ($cfgRaw -match "new Critters\(") {
        $cfgRaw = $cfgRaw -replace "(.*new Critters\(.*)", '// [REMOVED] $1'
        $modified = $true
    }

    if ($modified) {
        Set-Content $cfgPath $cfgRaw -Encoding UTF8 -NoNewline
        Write-OK "Critters zakomentarisan u: $configFile"
    } else {
        Write-Warn "Critters nije pronađen u $configFile — preskočeno"
    }
}

# ── 4. Reinstalacija dependencies ───────────────────────────
Write-Step "Pokretanje npm install..."

try {
    npm install --prefer-offline 2>&1 | ForEach-Object { Write-Host "  $_" }
    if ($LASTEXITCODE -ne 0) { Write-Fail "npm install nije uspio (exit code $LASTEXITCODE)" }
    Write-OK "Sve dependencies instalirane"
} catch {
    Write-Fail "Greška tokom npm install: $_"
}

# ── 5. Provjera .gitignore ──────────────────────────────────
Write-Step "Provjera .gitignore..."

$gitignorePath = Join-Path $Root ".gitignore"
$requiredEntries = @("node_modules", ".next", ".env*.local")

if (-not (Test-Path $gitignorePath)) {
    Set-Content $gitignorePath ($requiredEntries -join "`n") -Encoding UTF8
    Write-OK ".gitignore kreiran"
} else {
    $existing = Get-Content $gitignorePath
    $missing  = $requiredEntries | Where-Object { $_ -notin $existing }
    if ($missing.Count -gt 0) {
        Add-Content $gitignorePath ("`n" + ($missing -join "`n")) -Encoding UTF8
        Write-OK "Dodano u .gitignore: $($missing -join ', ')"
    } else {
        Write-OK ".gitignore je uredan"
    }
}

# ── 6. Git add + commit ──────────────────────────────────────
Write-Step "Git: dodavanje i commit promjena..."

# Provjeri je li Git repo inicijalizovan
if (-not (Test-Path (Join-Path $Root ".git"))) {
    Write-Warn ".git folder nije pronađen — inicijalizujem novi repo"
    git init
    git branch -M main
}

git add .

$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Warn "Nema novih promjena za commit — preskačem"
} else {
    git commit -m "Clean critters and rebuild"
    Write-OK "Commit kreiran: 'Clean critters and rebuild'"
}

# ── 7. Push na main ──────────────────────────────────────────
Write-Step "Git push na 'main' branch..."

$remoteExists = git remote 2>&1
if ([string]::IsNullOrWhiteSpace($remoteExists)) {
    Write-Warn "Nema konfiguriranog remote-a."
    Write-Host "  Dodaj remote ručno:" -ForegroundColor Yellow
    Write-Host "  git remote add origin https://github.com/TVO_USERNAME/gradiva-web.git" -ForegroundColor White
    Write-Host "  git push -u origin main" -ForegroundColor White
} else {
    try {
        git push origin main
        Write-OK "Push na main uspješan"
    } catch {
        Write-Warn "Push nije uspio. Provjeri remote URL i permisije."
        Write-Host "  git remote -v" -ForegroundColor White
    }
}

# ── Finalna poruka ───────────────────────────────────────────
Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  Setup clean i spreman za Vercel deploy"    -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Sljedeci koraci:" -ForegroundColor Cyan
Write-Host "  1. Idi na https://vercel.com/new"
Write-Host "  2. Import-uj GitHub repo: gradiva-web"
Write-Host "  3. Framework: Next.js (auto-detektovan)"
Write-Host "  4. Klikni Deploy"
Write-Host ""
