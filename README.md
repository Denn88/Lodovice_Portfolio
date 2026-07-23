# Deniele Therese C. Lodovice — Portfolio

A static, GitHub Pages–ready rebuild of the original Google Sites portfolio
(`sites.google.com/dnsc.edu.ph/denielethereseclodovice`), redesigned around a
"source tree" theme: a file-explorer sidebar, a terminal-style hero, and
project entries styled like commits — fitting for an IT student's site. 

## Files

```
index.html         Home
first-year.html    First Year coursework
second-year.html   Second Year coursework
third-year.html    Third Year coursework
fourth-year.html   Fourth Year (placeholder — empty on the original site)
resume.html        Resume / contact summary
style.css          Shared styles
nav.js             Mobile menu toggle
```

Images are linked directly from the original Google Sites CDN, so the pages
stay lightweight and need no image files of your own.

## Put it on GitHub

1. Create a new repository on GitHub, e.g. `deniele-portfolio`.
2. Upload these files to the repository root (via the GitHub web UI's
   "Add file → Upload files", or with git):

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/deniele-portfolio.git
   git push -u origin main
   ```

3. Turn on GitHub Pages:
   - Go to the repo's **Settings → Pages**
   - Under **Source**, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**
   - Your site will be live within a minute or two at:
     `https://<your-username>.github.io/deniele-portfolio/`

## Customizing

- Update the Twitter/LinkedIn/Instagram links in `style.css`'s companion
  markup (search for `twitter.com` / `linkedin.com` / `instagram.com` in each
  HTML file) — the original site linked to the generic homepages rather than
  personal profiles.
- Fourth Year and the full Resume were empty on the source site; fill in
  `fourth-year.html` and `resume.html` as that content becomes available.
