# IF Mölndal P-2015 Träningsapp ⚽

A web-based training and management app built for IF Mölndal P-2015 football team. Designed for coaches to easily manage squads, generate training sessions, plan tactics, and balance groups.

## Features 🚀

- **Training Generator**: Automatically suggests drills and exercises based on available players, focus areas, and match formats (7v7, 9v9, 11v11).
- **Player Levels & Matrix**: Evaluate and track tactical, technical, mental, and physical levels (1–5) with column sorting and automatic average calculations.
- **Interactive Tactics Board**: Drag-and-drop or click to place players on the pitch, assign specific positions (MV, YB, CB, CM, YF, Anfallare), hover to see player names and positions, and save/load multiple named team formations.
- **Squad & Group Management**: Full roster handling with full names, attendance checkboxes, and automatic group generation (balanced or stratified by skill level).
- **Drill Library**: Filterable database of football drills complete with descriptions, categories, formats, and source references.
- **Export & Print**: Snapshot capabilities using `html2canvas` to easily export formations or groups to print or share via PDF.
- **Local Persistence**: All changes, player evaluations, and saved formations are securely stored locally in the browser using `localStorage`.

## Tech Stack 💻

- **HTML5 & CSS3** (Responsive design optimized for mobile and desktop coaching use)
- **Vanilla JavaScript** (ES6+)
- **html2canvas** (For instant snapshot exports)
- **GitHub Pages / CodePen ready** (Runs entirely client-side in the browser)

## Getting Started ⚙️

1. Copy the full HTML/JS code from the project file (`index.html`).
2. Paste it directly into your [CodePen](https://codepen.io) project or open it locally in any web browser.
3. No build steps or server setup required!
