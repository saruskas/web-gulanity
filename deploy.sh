#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR"

if [ -d "$PROJECT_DIR/gulanity-website" ]; then
    PROJECT_DIR="$PROJECT_DIR/gulanity-website"
fi

cd "$PROJECT_DIR" || exit 1

echo ""
echo "============================================================"
echo "  GULANITY Website - Despliegue con Docker"
echo "============================================================"
echo ""

if ! command -v docker &> /dev/null; then
    echo "Error: Docker no está instalado"
    exit 1
fi

if [ ! -f "package.json" ] || [ ! -f "Dockerfile" ]; then
    echo "Error: No se encontraron los archivos necesarios (package.json o Dockerfile)"
    echo "Directorio actual: $(pwd)"
    echo "Asegúrate de que el proyecto esté en este directorio o en ./gulanity-website"
    exit 1
fi

echo "Directorio de trabajo: $(pwd)"
echo "Deteniendo y eliminando contenedor existente..."
docker stop gulanity-website 2>/dev/null || true
docker rm -f gulanity-website 2>/dev/null || true

echo "Eliminando imagen anterior..."
docker rmi gulanity-website:latest 2>/dev/null || true

echo "Construyendo imagen Docker..."
docker build --no-cache -t gulanity-website:latest . || exit 1

echo "Iniciando contenedor..."
docker run -d -p 8082:80 --name gulanity-website --restart unless-stopped gulanity-website:latest || exit 1

sleep 2

if docker ps --filter "name=gulanity-website" --format "{{.Names}}" | grep -q gulanity-website; then
    echo ""
    echo "Despliegue exitoso: http://localhost:8082"
else
    echo "Error: el contenedor no se inició"
    docker logs gulanity-website
    exit 1
fi

