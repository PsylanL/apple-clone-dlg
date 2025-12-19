# 🍏 Apple Clone DLG
Sleek Apple.com-inspired product showcase with 3D and motion.
<img width="2542" height="1257" alt="image" src="https://github.com/user-attachments/assets/13a87088-e609-484f-b5ab-fb240f6e209b" />

## 🧭 Overview
A Vite + React single-page experience mirroring Apple’s product storytelling with immersive 3D, smooth scroll-driven animations, and responsive design. Built for front-end learners and showcase enthusiasts who want a polished product page clone with performant interactions.
<img width="2519" height="927" alt="image" src="https://github.com/user-attachments/assets/230a595f-6448-412a-94f7-fd9329c0a71b" />

## ✨ Key Features
- Realistic 3D device render with orbit controls and smooth transitions
- Video carousels and media-rich hero sections tailored for high-res assets
- Scroll-triggered animations and highlight sections using reusable motion utilities
- Responsive layout with Tailwind CSS and mobile-first breakpoints
- Prebuilt navbar, hero, and CTA blocks for rapid customization
- Lightweight Vite bundling with fast HMR dev loop

  <img width="2542" height="1189" alt="image" src="https://github.com/user-attachments/assets/defbbcb9-7cbc-406a-8abe-38bccf590d0c" />


## 🧰 Tech Stack
| Category  | Technologies |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS |
| 3D/Media | Three.js / react-three-fiber (ModelView), GSAP-style animation utils |
| Build | Vite, PostCSS |
| Tooling | ESLint (via Vite default), npm scripts |
| Assets | Local images/videos, 3D models (glb) |

## 🏗️ Architecture Overview
- SPA built with React and Vite; entry via `main.jsx` mounting `App`.
- UI composed of modular sections (`Hero`, `Highlights`, `IPhone`, `Lights`, `VideoCarousel`, `Navbar`), all fed by constants/config.
- 3D pipeline handled by `Model`/`ModelView` components loading GLB models and syncing with scroll/interaction; media served from `public/assets`.
- Animation utilities orchestrate section transitions and scroll cues; styles via Tailwind and global CSS tokens.
- Vite dev server for local HMR; production build outputs static assets ready for any static host or CDN.

## 📂 Folder / File Structure
```
.
├─ public/
│  ├─ assets/images/
│  ├─ assets/videos/
│  └─ models/              # GLB/3D assets
├─ src/
│  ├─ components/          # UI + 3D building blocks
│  ├─ constants/           # Content/config data
│  ├─ utils/               # Animations, shared helpers
│  ├─ App.jsx              # Page composition
│  ├─ main.jsx             # React entrypoint
│  └─ index.css            # Global styles & Tailwind imports
├─ tailwind.config.js      # Design tokens & presets
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## ⚙️ Installation & Setup
Prerequisites:
- Node.js 18+
- npm (bundled with Node)

▶️ Usage:
```
npm install
npm run dev
```

## 📜 License
- MIT License

## 👤 Credits
- JavaScript Mastery [(https://www.youtube.com/@javascriptmastery)](https://github.com/adrianhajdin)

