# Bhagyashri Patil — React Portfolio

A clean, responsive portfolio built with **React + Vite**. It includes sections for **Hero**, **About**, **Projects**, **Contact**, and **Footer**, plus your **LinkedIn** and **GitHub** links.

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Visit the local URL shown in the terminal.

## 🧩 Customize

- Update text in `src/components/*.jsx`
- Add your real projects in `src/data/projects.js`
- Replace favicon in `public/favicon.svg` if you like
- Update your email in `Contact.jsx` for the "Email Directly" link

## 🌐 Deploy

### GitHub Pages (recommended)
1. Create a repo (e.g. `portfolio-react`), push this project.
2. In `vite.config.js`, set:
   ```js
   export default defineConfig({ base: '/<your-repo-name>/', plugins:[react()] })
   ```
3. Build:
   ```bash
   npm run build
   ```
4. Enable **Pages** in GitHub settings → choose **/dist** from **GitHub Actions** or serve the `dist` folder via any static host.

### Netlify / Vercel / Render
Just connect the repo and set **Build**: `npm run build`, **Publish**: `dist`.

## 🔗 Social
- LinkedIn: https://linkedin.com/in/bhagyashri-patil-87327825b
- GitHub: https://github.com/bhagyashripatil05

## 📄 License
MIT — feel free to use and modify.
