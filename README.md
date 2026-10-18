# Memory Match — Utility Edition

> Stop shipping slop. Start shipping a style.

A polished browser memory game built with vanilla HTML, CSS, and JavaScript. The project mixes a sleek dark UI with a playful card-matching mechanic and a compact set of utility-themed SVG illustrations.

## Why this project

This mini app was designed to practice DOM manipulation, state management, game logic, and visual polish without relying on frameworks. The result is a clean, card-based experience that feels more like a finished product than a basic tutorial exercise.

## Highlights

- Flip-and-match gameplay with paired SVG cards
- Countdown timer and win-state feedback
- Retry/reset flow for replayability
- Responsive layout with a premium, modern interface
- Lightweight implementation with no dependencies

## Design direction

The visual language is inspired by the kind of clean, confident aesthetic promoted by Skills UI: warm dark surfaces, strong typography, compact spacing, and restrained but memorable accent color.

## How to run

1. Open the project folder in a browser.
2. Load `index.html` directly, or run a local server:

```bash
python -m http.server 8000
```

3. Visit `http://localhost:8000` in your browser.

## Game flow

- Click two cards to reveal them.
- Matching pairs stay face-up.
- Non-matching pairs flip back after a short delay.
- The timer runs while the first card is flipped.
- When all pairs are found, a congratulations modal appears.
- Use the retry button to start a fresh round.

## Project structure

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

## Skills / learning goals

- DOM selection and event listeners
- State tracking for matched cards and turns
- Conditional UI updates for win states
- CSS 3D transforms for flip animations
- Timer logic and game reset behavior

## Future ideas

- Score and best-time system
- Sound effects
- Difficulty levels
- Theme switching
- Animated confetti on win

## Credits

Game concept inspired by classic memory games, elevated with a more modern interface and utility-themed iconography.

---

Built for fast experimentation, crisp UI polish, and learning by shipping.
