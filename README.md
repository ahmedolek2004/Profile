# Ahmed Abdelhalim — Portfolio

A simple, static, single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS.
No backend, no API calls, no environment variables.

Live: https://ahmedolek2004.github.io/Portfolio_project/

## Run it

```bash
npm install
npm run dev       # development
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint
```

## Edit the content

Everything lives in **`src/data/portfolio.ts`**.

- Empty values (`""` or `[]`) are hidden on the site, so nothing shows as "coming soon".
- Add a project: copy an entry in `projects`. Add `github` and/or `demo` URLs to show buttons.
- Add your GitHub / LinkedIn: fill `social.github` and `social.linkedin`.
- Replace the resume: overwrite `public/resume/Ahmed_Abdelhalim_CV.pdf`.
- Replace the photo: overwrite `public/images/profile.jpg`, or set `profile.photoUrl` to `""` for the AA avatar.

## Deploy (GitHub Pages)

`vite.config.ts` sets `base: '/Portfolio_project/'`, matching the repository name.
Publish the contents of `dist/` (for example with a GitHub Actions Pages workflow or the `gh-pages` branch).
If the repository is ever renamed, update `base` to match.

## Structure

```
public/        favicon, resume PDF, profile image, robots.txt, sitemap.xml
src/
  components/  Navbar, Hero, About, Skills, Projects, IoT, Experience, Education, Contact, Footer, Section
  data/        portfolio.ts  <- the only file you normally edit
  App.tsx  main.tsx  index.css
```
