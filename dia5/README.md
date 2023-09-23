# Entornos virtuales

## ¿Qué es un entorno virtual?

Un entorno virtual es una herramienta que nos permite aislar las dependencias de un proyecto de las dependencias del sistema. Esto nos permite tener instaladas diferentes versiones de las dependencias de nuestros proyectos sin que estas entren en conflicto.

## Crear un entorno virtual

```bash
python -m venv nombre_del_entorno_virtual
```

## Activar un entorno virtual

```bash
# Windows cmd
nombre_del_entorno_virtual\Scripts\activate

# git bash
source nombre_del_entorno_virtual/Scripts/activate

# Linux y macOS
source nombre_del_entorno_virtual/bin/activate
```

## Desactivar un entorno virtual

```bash
deactivate
```

## Instalar una dependencia

```bash
pip install nombre_de_la_dependencia
```

## Consultar las dependencias instaladas

```bash
pip freeze
# Si queremos guardar todas las dependencias en un archivo
# requirements.txt
pip freeze > requirements.txt
```
## Instalar dependencias a partir de un archivo

```bash
pip install -r requirements.txt
```