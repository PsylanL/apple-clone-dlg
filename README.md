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
Important folders:
- src/components: Reusable sections (hero, highlights), device/3D viewers, loaders.
- src/constants: Data driving UI text, links, and media references.
- src/utils: Animation timelines and shared helpers.
- public/assets: Images/videos and 3D models consumed at runtime.

## ⚙️ Installation & Setup
Prerequisites:
- Node.js 18+
- npm (bundled with Node)

Steps:
```
npm install
npm run dev
```

Environment variables (`.env.example`):
```
VITE_API_BASE_URL=https://api.example.com
VITE_FEATURE_FLAGS=animations,video
```

## ▶️ Usage
Run dev server (HMR):
```
npm run dev
```
Production build:
```
npm run build
npm run preview
```



## 🔧 Configuration
- Tailwind theme tokens via `tailwind.config.js`
- Vite aliases, base path, and dev server options in `vite.config.js`
- Feature flags (e.g., animations, video) via `VITE_FEATURE_FLAGS`
- Asset paths configurable in constants files

## 🗺️ Roadmap
- Add dynamic localization and copy variants
- Expand device gallery with color/angle selectors
- Integrate CMS-driven content (e.g., headless CMS)
- Add accessibility audit and improvements
- Ship unit tests for animation utilities and sections

## 🤝 Contributing
- Fork, create a feature branch, commit with conventional messages, and open a PR.
- Run `npm run lint` and `npm run build` before submitting.
- Keep components small, typed props, and prefer composition over duplication.

## 📜 License
- MIT License

## 👤 Credits
- JavaScript Mastery (https://www.youtube.com/@javascriptmastery)

