param(
    [switch]$SkipBuild = $false
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================================"
Write-Host "  GULANITY Website - Despliegue con Docker"
Write-Host "============================================================"
Write-Host ""

# Verificar que Docker esta disponible
$dockerAvailable = Get-Command docker -ErrorAction SilentlyContinue
if (-not $dockerAvailable) {
    Write-Host "Error: Docker no esta instalado o no esta en el PATH" -ForegroundColor Red
    Write-Host "Instala Docker Desktop para continuar" -ForegroundColor Yellow
    exit 1
}

if (-not $SkipBuild) {
    Write-Host "Compilando proyecto con Docker (sin cache)..." -ForegroundColor Yellow
    Write-Host "Docker instalara dependencias y compilara el proyecto dentro del contenedor" -ForegroundColor Gray
    Write-Host ""

    # Limpiar carpeta out local si existe para evitar conflictos
    if (Test-Path "out") {
        Write-Host "Limpiando carpeta 'out' local..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force "out" -ErrorAction SilentlyContinue
    }

    # Detener contenedor previo si existe
    $containerExists = docker ps -a --filter "name=gulanity-website" --format "{{.Names}}" 2>$null
    if ($containerExists -eq "gulanity-website") {
        Write-Host "Deteniendo y eliminando contenedor existente..." -ForegroundColor Yellow
        docker stop gulanity-website 2>$null | Out-Null
        docker rm -f gulanity-website 2>$null | Out-Null
    }

    # Eliminar imagen anterior si existe para forzar reconstrucción completa
    Write-Host "Eliminando imagen anterior si existe..." -ForegroundColor Yellow
    $ErrorActionPreference = "SilentlyContinue"
    docker rmi gulanity-website:latest 2>&1 | Out-Null
    $ErrorActionPreference = "Stop"

    Write-Host "Construyendo imagen Docker sin cache..." -ForegroundColor Yellow
    $timestamp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
    docker build --no-cache --build-arg CACHE_BUST=$timestamp -t gulanity-website:latest .

    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "Error al construir la imagen Docker" -ForegroundColor Red
        Write-Host "Revisa los logs anteriores para mas detalles" -ForegroundColor Yellow
        exit 1
    }

    Write-Host "Build completado correctamente dentro de Docker" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "Omitiendo build (usando imagen existente)" -ForegroundColor Yellow
    Write-Host ""
}

# Asegurar que no haya un contenedor anterior en ejecucion
Write-Host "Deteniendo contenedor anterior si existe..." -ForegroundColor Yellow
$containerExists = docker ps -a --filter "name=gulanity-website" --format "{{.Names}}" 2>$null
if ($containerExists -eq "gulanity-website") {
    docker stop gulanity-website 2>$null | Out-Null
    docker rm -f gulanity-website 2>$null | Out-Null
}

# Ejecutar contenedor
Write-Host "Iniciando contenedor..." -ForegroundColor Yellow
docker run -d -p 8082:80 --name gulanity-website --restart unless-stopped gulanity-website:latest

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Error al iniciar el contenedor" -ForegroundColor Red
    Write-Host "Mostrando logs del contenedor..." -ForegroundColor Yellow
    docker logs gulanity-website 2>&1
    exit 1
}

Write-Host "Esperando a que el servicio inicie..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

$container = docker ps --filter "name=gulanity-website" --format "{{.Names}}"
if ($container -eq "gulanity-website") {
    Write-Host ""
    Write-Host "Despliegue exitoso." -ForegroundColor Green
    Write-Host "Abre en tu navegador: http://localhost:8082" -ForegroundColor Cyan
    Write-Host "Nota: Si no ves los cambios, presiona Ctrl+F5 o Ctrl+Shift+R para forzar recarga" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Error: el contenedor no se inicio correctamente" -ForegroundColor Red
    Write-Host "Mostrando logs del contenedor..." -ForegroundColor Yellow
    docker logs gulanity-website 2>&1
    exit 1
}

