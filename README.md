# Tasrif & Samiha — Interactive Nikah Invitation

A mobile-friendly, vertical, romantic animated Nikah invitation built with plain HTML, CSS, and JavaScript, featuring your original generated pastel garden art.

## Files
- `index.html` — invitation content and scenes
- `style.css` — layout, pastel styling, gate transition, motion effects
- `script.js` — opening interaction, scene navigation, floating petals
- `assets/closed-gates.webp` and `assets/open-garden.webp` — original custom artwork, optimized for the web
- `assets/floral-frame.webp` — optional artwork for future iterations

## Preview locally
Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish FREE on GitHub Pages
1. Sign into GitHub and select **New repository**. Example name: `tasrif-samiha-nikah`.
2. Choose **Public** (unless your Pages plan supports private repos). Create the repository.
3. Select **Add file → Upload files**. Upload the **contents** of this folder, not the ZIP file. Make sure `index.html`, `style.css`, `script.js`, `.nojekyll` and the `assets` directory are at the repo root.
4. Commit the files to the `main` branch.
5. Go to **Settings → Pages → Build and deployment**. Under **Source**, select **Deploy from a branch**; select **main** and **/(root)**, then **Save**.
6. After deployment, your link should resemble `https://YOUR-USERNAME.github.io/tasrif-samiha-nikah/`.

Publishing time may vary. Your real link depends on your username and repository name.

## Update later
- Change **To be announced** to the venue in `index.html` when confirmed.
- Tweak the opening animation speed in `style.css` at `.gate-half`.
- Text is HTML rather than baked into artwork, so it stays crisp and editable.

## Note on animation
The gate opening is a layered CSS 2.5D transition between your existing still images, not a physically accurate 3D render. The site uses Google Fonts when available and browser fallback fonts when offline. No external JS libraries are required.
