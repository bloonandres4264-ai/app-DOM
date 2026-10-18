# Memory Match — Utility Edition

> Deja de entregar algo mediocre. Empieza a entregar estilo.

Un juego de memoria para navegador, desarrollado con HTML, CSS y JavaScript puro. El proyecto combina una interfaz oscura y elegante con una mecánica divertida de emparejar cartas y un conjunto compacto de ilustraciones SVG temáticas de herramientas.

## ¿Por qué este proyecto?

Esta pequeña app fue diseñada para practicar manipulación del DOM, gestión del estado, lógica del juego y pulido visual sin depender de frameworks. El resultado es una experiencia limpia y tipo carta que se siente más acabada que un ejercicio básico de tutorial.

## Highlights

- Juego de emparejar cartas con iconos SVG
- Temporizador y feedback de victoria
- Flujo de reinicio para repetir partidas
- Diseño adaptable con una interfaz moderna y premium
- Implementación ligera sin dependencias

## Dirección visual

La estética está inspirada en el tipo de diseño limpio y seguro promovido por Skills UI: superficies oscuras cálidas, tipografía fuerte, espaciado compacto y acentos memorables pero sobrios.

## Cómo ejecutar

1. Abre la carpeta del proyecto en el navegador.
2. Carga `index.html` directamente o ejecuta un servidor local:

```bash
python -m http.server 8000
```

3. Visita `http://localhost:8000` en tu navegador.

## Flujo del juego

- Haz clic en dos cartas para revelarlas.
- Las parejas coincidentes quedan visibles.
- Las parejas incorrectas vuelven a girarse tras un breve retraso.
- El temporizador empieza cuando se gira la primera carta.
- Cuando encuentras todas las parejas aparece un modal de felicitación.
- Usa el botón de repetir para iniciar una nueva ronda.

## Estructura del proyecto

```text
app-DOM/
├── index.html
├── index.js
├── style.css
├── img/
│   ├── utility-badge.svg
│   ├── wrench.svg
│   ├── hammer.svg
│   ├── bolt.svg
│   ├── screwdriver.svg
│   ├── pliers.svg
│   └── spark.svg
└── README.md
```

## Objetivos de aprendizaje

- Selección del DOM y uso de eventos
- Seguimiento del estado para cartas emparejadas y turnos
- Actualización condicional de la interfaz al ganar
- Transformaciones 3D en CSS para la animación de giro
- Lógica del temporizador y reinicio del juego

## Ideas futuras

- Sistema de puntuación y mejor tiempo
- Efectos de sonido
- Niveles de dificultad
- Cambio de tema
- Confetti animado al ganar

## Créditos

La idea del juego está inspirada en los clásicos juegos de memoria, pero elevada con una interfaz más moderna y una iconografía temática de herramientas.

---

Hecho para experimentar rápido, pulir la UI y aprender creando.
