# Naqeeb Arshad — Mechanical Design Engineer Portfolio

Production-ready static portfolio for GitHub Pages. Built only with HTML5, CSS3 and vanilla JavaScript.

## Repository structure

```text
index.html
style.css
script.js
README.md
assets/
  favicon.svg
  profile.jpg
  portfolio.pdf
  projects/
    [project images]
```

## GitHub Pages deployment

1. Create or open the GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the complete `assets` folder to the repository root.
3. Do **not** upload the ZIP itself and do **not** place these files inside an extra parent folder.
4. Open **Settings → Pages**.
5. Set **Source** to `Deploy from a branch`.
6. Select branch `main` and folder `/(root)`, then save.
7. GitHub Pages will publish the site at `https://USERNAME.github.io/REPOSITORY/`.

For the existing repository `naqeebarshad402-boop/Naqeeb.Arshad`, the expected URL is:
`https://naqeebarshad402-boop.github.io/Naqeeb.Arshad/`

## Updating later

Replace the relevant image in `assets/projects/` while keeping its filename, or edit the matching text in `index.html` / `script.js`. Commit the change; GitHub Pages redeploys automatically.

## Notes

- Original PDF is kept at `assets/portfolio.pdf`.
- Project images use relative paths for GitHub Pages compatibility.
- Project browsers show a maximum of four project cards per page.
- Main content remains visible even if JavaScript fails; JavaScript enhances pagination, modals, navigation and animations.
