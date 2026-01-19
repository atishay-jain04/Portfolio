# Atishay Jain - Personal Portfolio

A modern, animated, and responsive portfolio website built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Features

### Design & UI
- Modern and clean UI design with glassmorphic elements
- Floating island-style navigation bar with backdrop blur
- Light/Dark theme toggle with localStorage persistence
- Smooth Framer Motion animations throughout (fade, slide, scale, stagger)
- Fully responsive design (mobile, tablet, desktop)
- Custom animated floating background gradients
- Tilt effects on project cards

### Performance & Optimization
- Lazy loading images with IntersectionObserver
- Code splitting (React vendor, Framer Motion chunks)
- Terser minification with console.log removal
- Optimized bundle size and chunk warnings
- Dependency pre-bundling

### Accessibility & SEO
- ARIA labels and semantic HTML
- Keyboard navigation support
- Open Graph and Twitter Card meta tags
- Theme color meta tag
- Preconnect to Google Fonts for performance

### Error Handling
- React Error Boundaries for graceful error recovery
- Fallback UI for errors

### Content Sections
- Hero section with animated intro and CTAs
- About section with highlights
- Tech Stack section with categorized badges
- Interactive project showcase with live/repo links
- Resume preview and download
- Contact section with social links

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (with native @import syntax)
- **Animations:** Framer Motion
- **Fonts:** Inter (body), Sora (headings) - Google Fonts
- **Image Optimization:** Custom LazyImage component
- **Error Handling:** React Error Boundaries

## Project Structure

```
Portfolio/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # Reusable React components
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── utils/           # Utility functions (theme, animations)
│   ├── constants/       # App constants and configuration
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/atishay-jain04/Personal-Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Update Personal Information

Edit [src/constants/index.js](src/constants/index.js) to update:
- Personal details (name, email, GitHub, resume URL)
- Social links (LinkedIn, Twitter, etc.)
- Tech stack categories
- Projects (title, description, images, links)
- About section content

### Customize Theme Colors

Modify [tailwind.config.js](tailwind.config.js) to change:
- Primary and accent color palette
- Font families
- Custom animations (float, pulse-slow)
- Responsive breakpoints

### Environment Variables

1. Copy `.env.example` to `.env`
2. Update values as needed (analytics IDs, form endpoints, etc.)
3. Most configuration can be done in `src/constants/index.js` without environment variables

### Customize Animations

Edit [src/utils/motionVariants.js](src/utils/motionVariants.js) to modify Framer Motion variants:
- Fade animations
- Slide animations
- Scale animations
- Stagger effects

### Add New Projects

Update the `PROJECTS` array in [src/constants/index.js](src/constants/index.js):

```javascript
{
  title: "Project Name",
  description: "Project description...",
  image: "/path/to/image.jpg",
  tags: ["React", "Node.js"],
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  featured: true
}
```

## Performance Tips

- Images in `public/` folder are automatically optimized by Vite
- Use the `LazyImage` component for images below the fold
- Keep bundle size under 500KB (gzipped) - check with `npm run build`
- Test performance with Lighthouse in Chrome DevTools

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Dark mode not persisting
- Check browser localStorage is enabled
- Clear localStorage and try again: `localStorage.removeItem('portfolio-theme')`

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser supports CSS transforms

### Build errors with Tailwind
- Ensure you're using Tailwind CSS v4
- Check `@import "tailwindcss"` syntax in [src/index.css](src/index.css)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Update `vite.config.js` with base path:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```
4. Run: `npm run deploy`

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find bugs or have suggestions, please open an issue!

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Atishay Jain - [GitHub](https://github.com/atishay-jain04)

---

Made with React, Vite, Tailwind CSS v4, and Framer Motion
