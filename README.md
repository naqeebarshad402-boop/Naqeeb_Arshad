# Naqeeb Arshad — Mechanical Design Portfolio

A static, single-page portfolio website built from Naqeeb Arshad's mechanical
design portfolio (SolidWorks, PTC Creo, AutoCAD, CNC programming, structural
analysis, and fabrication work). Pure HTML, CSS, and vanilla JavaScript —
no build step, no dependencies, ready to host on **GitHub Pages**.

---

## 1. File structure

```
portfolio/
├── index.html              → all page content and structure
├── style.css                → all styling (dark engineering-sheet theme)
├── script.js                 → project data, cards, modal, nav, animations
├── README.md                 → this file
└── assets/
    ├── profile.jpg            → profile photo (used in Hero section)
    ├── portfolio.pdf           → original PDF portfolio (download button)
    └── projects/
        ├── afsd-frame.png              → AFSD machine frame & table
        ├── afsd-machine-full-assembly.jpg → AFSD full machine render (AFSD hero image)
        ├── afsd-tableplate-stress.jpg   → AFSD table plate stress sim
        ├── afsd-column-stress.jpg       → AFSD support column FOS sim
        ├── baseplate-vonmises-stress.jpg → Base plate von Mises stress sim
        ├── baseplate-factor-of-safety.jpg → Base plate factor of safety sim
        ├── baseplate-modal-frequency.jpg  → Base plate modal/frequency sim
        ├── tableplate-vonmises-stress.jpg → Table plate von Mises stress sim
        ├── tableplate-factor-of-safety.jpg → Table plate factor of safety sim
        ├── column-vonmises-stress.jpg     → Support column von Mises stress sim
        ├── column-factor-of-safety.jpg    → Support column factor of safety sim
        ├── cnc-gcode-screenshot.jpg       → Generated NC code screenshot
        ├── tank-barrel-cleaner.jpg      → Tank Barrel Cleaner assembly
        ├── drone-locking-system.jpg     → Drone Locking mechanism
        ├── drone-launcher-rack.jpg      → Drone Launcher rack
        ├── folding-stair-drawing.jpg    → Folding Stair engineering drawing
        ├── mine-fencing-rig.jpg         → Mine-Fencing Rig (truck)
        ├── hammer-rail-mechanism.jpg    → Automatic Hammer & Rail Mechanism
        ├── housing-design.png           → Housing Design
        ├── bearing-pulley-housing.png   → Bearing & Pulley Housing
        ├── clamp-plate-fixture.png      → Bolted Clamp Plate Fixture
        ├── milling-machine-head.png     → Vertical Milling Machine Head
        ├── machined-bracket.png         → Machined Bracket Component
        ├── tailstock-lathe.png          → Tail Stock of Lathe Machine
        ├── flange-coupling.png          → Flange Coupling Assembly (Creo)
        ├── profile-milled-part.png      → Profile-Milled Component (Creo)
        ├── cnc-manufacturing-setup.png  → CNC Manufacturing Setup (Creo)
        └── residential-house.jpg        → AutoCAD residential house render
```

All content (project names, purposes, design work, results, experience,
education, and certifications) is taken directly from the supplied PDF
portfolio — nothing has been invented. The `assets/projects/` folder holds
27 images in total: the 18 original project renders/screenshots plus 9
additional SolidWorks Simulation captures (base plate, table plate, and
support column — von Mises stress, factor of safety, and modal frequency),
the full AFSD machine assembly render, and the generated NC code screenshot.

---

## 2. Where each asset goes

| Asset | Location |
|---|---|
| Profile photo | `assets/profile.jpg` |
| Original PDF portfolio | `assets/portfolio.pdf` |
| All project renders/screenshots | `assets/projects/` (see table above) |

If you replace or add images later, keep the same file names (or update the
`image:` paths inside `script.js`) so the site keeps working.

---

## 3. Publish it on GitHub Pages

### Step 1 — Create the repository
1. Go to [github.com/new](https://github.com/new).
2. Name it, for example, `portfolio` (or `naqeeb-arshad-portfolio`).
3. Set it to **Public**.
4. Click **Create repository**.

### Step 2 — Upload the files
**Option A — via the GitHub website (no Git required):**
1. Open your new repository.
2. Click **Add file → Upload files**.
3. Drag in `index.html`, `style.css`, `script.js`, `README.md`, and the
   entire `assets` folder (including `assets/projects`).
4. Scroll down and click **Commit changes**.

**Option B — via Git (command line):**
```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 1–2 minutes for GitHub to build the site.

### Step 4 — Your live URL
Your portfolio will be published at:

```
https://<your-username>.github.io/<repo-name>/
```

For example, if your GitHub username is `naqeebarshad` and the repository is
named `portfolio`, the site will be live at:

```
https://naqeebarshad.github.io/portfolio/
```

---

## 4. How to update the portfolio later

- **Text content** (project descriptions, experience, education, skills):
  edit the data arrays at the top of `script.js` — each project is a plain
  JavaScript object, so you can edit titles, purposes, design work, tags,
  and context directly without touching the layout.
- **Images**: replace the files in `assets/projects/` with the same file
  name, or add a new image and point to it from the relevant object in
  `script.js` (the `image:` field).
- **Colors / fonts / spacing**: all design tokens are defined as CSS
  variables at the top of `style.css` under `:root`.
- **PDF portfolio**: replace `assets/portfolio.pdf` with an updated export
  — the "Download Full PDF Portfolio" buttons will automatically serve the
  new file.

After editing, commit and push the changes (or re-upload via the GitHub
website) — GitHub Pages will redeploy automatically within a minute or two.

---

## 5. Tech notes

- Pure HTML5 / CSS3 / vanilla JavaScript — no frameworks, no build tools,
  no `npm install`.
- Fonts (Space Grotesk, Inter, IBM Plex Mono) are loaded from Google Fonts
  via CDN link tags in `index.html`.
- Project cards are rendered from JavaScript data arrays and open a shared
  detail modal — content is fully driven by the arrays in `script.js`.
- Responsive down to small mobile widths; navigation collapses into a
  hamburger menu below 760px.
- Scroll-reveal animations use `IntersectionObserver`; motion is minimal
  and respects `prefers-reduced-motion`.
- No console errors; no external JS dependencies beyond Google Fonts.
