# VCLabS — Virtual Chemistry Lab Simulator

VCLabS is a 3D exploration game designed to help secondary school students learn basic chemistry through exploration, guided experiments, apparatus discovery, tutorials, and quizzes.

## Project spaces

- **Main Lobby** — central navigation hub
- **Tutorial Room** — introduces the virtual laboratory
- **Experiment Room** — supports guided chemistry activities
- **Apparatus Room** — presents laboratory equipment
- **Quiz Game Room** — reinforces learning through questions

## Interactive showcase

This repository includes a browser-based 3D showcase of the VCLabS environments. Visitors can select rooms, rotate the models, zoom, pan, and open the viewer fullscreen.

The showcase models were exported from Shapr3D in GLB format. This website presents the environments; it does not include the original game's playable experiments, movement system, or quiz scoring.

GitHub hosts the repository, not this Node server. A separate deployment is needed for a public playable website.

## Run locally

Requirements:

- Node.js
- npm

Install dependencies and start the local server:

```bash
npm ci
npm start
```

Open [http://localhost:5199](http://localhost:5199).

Run the server self-check:

```bash
npm test
```

## Repository structure

```text
VCLabS/
├── public/models/    Web-ready GLB room models
├── index.html        Showcase page
├── styles.css        Website styles
├── app.js            Room selection and viewer controls
├── server.cjs        Local static server
├── tests.cjs         Server self-check
├── package.json      Project scripts and dependencies
└── README.md         Project documentation
```

## Updating a 3D model

Replace the matching file in `public/models/` while keeping the filename unchanged:

```text
main-lobby.glb
tutorial-room.glb
apparatus-room.glb
experiment-room.glb
quiz-room.glb
```

Then commit and push the update:

```bash
git add public/models/<filename>.glb
git commit -m "Update <room> model"
git push
```

## Team project

VCLabS was created by a student project team. Add team member names, roles, and individual contributions here before publishing the repository.

## Asset and source notice

The 3D models and project materials are project assets. Do not reuse, redistribute, or modify them for another project without permission from the VCLabS team and the relevant institution.

## Licence

All rights reserved unless the project team adds a different licence.
