# Quantum Concierge Services - Modern React Website

A professional, modern website for Quantum Concierge Services built with React.js and Tailwind CSS. This website showcases procurement and technology solutions for government agencies and corporate clients.

## Features

- **Modern React.js** (v19.x) with functional components and hooks
- **Tailwind CSS** for responsive, professional styling
- **React Router** for seamless navigation between pages
- **Fully responsive** design (desktop, tablet, mobile)
- **SEO-friendly** with semantic HTML and meta tags
- **Performance optimized** with Vite build system
- **Deployment-ready** for Netlify, Vercel, or GitHub Pages

## Site Structure

### Pages
1. **Home (`/`)** - Hero section with company overview and call-to-actions
2. **Services (`/services`)** - Four main service categories with detailed descriptions
3. **Core Values (`/core-values`)** - Company values: Integrity, Innovation, Customer-Centric
4. **Development (`/development`)** - Technology-focused page for software development services
5. **Contact (`/contact`)** - Leadership team contact information and quote requests

### Components
- **Header** - Responsive navigation with mobile hamburger menu
- **Footer** - Company logo, navigation links, and partner logos
- **Layout** - Wrapper component for consistent page structure

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The development server will be available at `http://localhost:5173/`

## Project Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── CoreValues.jsx
│   ├── Development.jsx
│   └── Contact.jsx
├── assets/
│   └── images/
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Vercel
1. Connect your GitHub repository to Vercel
2. Build settings are automatically detected
3. Deploy automatically on git push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Contact Information

**Leadership Team:**
- Fareed M Khan - CEO
- Jack Baker - Director of Operations (Jack.baker@quantumsrv.com)
- Joe Root - Manager Procurement (Joe.root@quantumsrv.com)

**Phone:** +1 859-287-2983

## Service Categories

1. **Office Supplies** - Complete range of office supplies and stationery
2. **Office Furniture** - Professional furniture solutions and ergonomic workstations
3. **Cleaning & Janitorial Products** - Comprehensive cleaning and janitorial supplies
4. **Technology Products** - IT infrastructure and technology solutions

## Development Services

1. **Website Development** - Modern, responsive, SEO-ready websites
2. **Mobile App Development** - iOS and Android applications
3. **System Software** - Custom software solutions for Windows and Mac

## License

© 2024 Quantum Concierge Services LLC. All rights reserved.
