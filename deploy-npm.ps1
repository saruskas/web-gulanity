$ErrorActionPreference = "Stop"
$DebugPreference = "Continue"

Write-Host ""
Write-Host "============================================================"
Write-Host "  GULANITY Website - Despliegue con npm (Modo Desarrollo)"
Write-Host "============================================================"
Write-Host ""
Write-Debug "Modo de depuración activado"

# Detener procesos en el puerto 3000
Write-Debug "Verificando procesos en puerto 3000..."
$processes = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($processes) {
    Write-Host "Deteniendo procesos en puerto 3000..." -ForegroundColor Yellow
    Write-Debug "Procesos encontrados: $($processes -join ', ')"
    $processes | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
    Start-Sleep -Seconds 1
} else {
    Write-Debug "No se encontraron procesos en puerto 3000"
}

Write-Host "Iniciando Next.js en modo desarrollo..." -ForegroundColor Yellow
Write-Host "Modo depuración activado con hot reload" -ForegroundColor Cyan
Write-Host ""

# Iniciar servidor en modo desarrollo
Write-Debug "Iniciando Next.js en modo desarrollo..."
$process = Start-Process -FilePath "cmd.exe" -ArgumentList "/c", "npm run dev" -PassThru -WindowStyle Hidden
Write-Debug "Proceso iniciado con ID: $($process.Id)"

Write-Host "Esperando a que el servidor Next.js esté activo..." -ForegroundColor Yellow
Write-Debug "Iniciando verificación periódica del servidor..."

# Esperar activamente hasta que el servidor esté listo
$maxAttempts = 30
$attempt = 0
$serverReady = $false

while ($attempt -lt $maxAttempts -and -not $serverReady) {
    Start-Sleep -Seconds 2
    $attempt++
    
    # Verificar si el proceso sigue corriendo
    if ($process.HasExited) {
        Write-Host ""
        Write-Host "Error: el proceso de Next.js se detuvo inesperadamente" -ForegroundColor Red
        exit 1
    }
    
    # Verificar conexión en el puerto 3000
    $connection = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($connection) {
        # Intentar hacer una petición HTTP para verificar que el servidor responde
        try {
            $response = Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 2 -UseBasicParsing -ErrorAction Stop
            if ($response.StatusCode -eq 200) {
                $serverReady = $true
                Write-Debug "Servidor respondió correctamente después de $attempt intentos"
            }
        } catch {
            Write-Debug "Intento ${attempt}: Servidor aún no responde HTTP (puerto abierto pero no listo)"
        }
    } else {
        Write-Debug "Intento ${attempt}: Puerto 3000 aún no está abierto"
    }
    
    if (-not $serverReady -and $attempt -lt $maxAttempts) {
        Write-Host "." -NoNewline -ForegroundColor Gray
    }
}

Write-Host ""

if ($serverReady) {
    Write-Host ""
    Write-Host "Servidor Next.js iniciado en modo desarrollo." -ForegroundColor Green
    Write-Host "Abre en tu navegador: http://localhost:3000" -ForegroundColor Cyan
    Write-Host "Modo depuración: Los cambios se recargarán automáticamente" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Error: el servidor no se inició correctamente después de $($maxAttempts * 2) segundos" -ForegroundColor Red
    if ($process -and -not $process.HasExited) {
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
    }
    exit 1
}

