# Milan Blaz - Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.
**Live Demo**: [https://zbla92.github.io/milan-blaz](https://zbla92.github.io/milan-blaz)

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Elements**: Hover effects and micro-interactions
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Friendly**: Optimized for search engines
- **GitHub Pages Ready**: Automatic deployment to GitHub Pages

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Free hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zbla92/milan-blaz.git
cd milan-blaz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173/milan-blaz/`

## 📁 Project Structure

```
personal-website/
├── public/
│   ├── Milan-Blaz-CV.pdf      # Downloadable CV
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.jsx                # Main component
│   ├── index.css             # Tailwind CSS + custom styles
│   └── main.jsx              # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
└── package.json
```

## 🎨 Features Overview

### Hero Section
- Animated entrance with Framer Motion
- Gradient text effects
- Professional avatar placeholder
- Call-to-action buttons

### About Section
- Professional description
- Social media links
- Animated profile image placeholder

### Skills Section
- Animated skill bars
- Technology icons
- Professional competencies

### Projects Section
- Featured project showcases
- Live demo and code links
- Technology stack tags
- Vivant Design project included

### Contact Section
- Professional call-to-action
- Smooth scroll navigation

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions when you push to the main branch.

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npm run deploy
```

## 🎯 Customization

### Adding Projects
Edit the `projects` array in `src/App.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    link: 'https://your-demo.com',
    github: 'https://github.com/your-repo',
    image: '/project-image.jpg'
  }
];
```

### Updating Skills
Modify the `skills` array in `src/App.jsx`:

```javascript
const skills = [
  { name: 'Technology', level: 90, icon: IconComponent }
];
```

### Changing Colors
Update the color scheme in `tailwind.config.js` and `src/index.css`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (320px - 767px)

## ⚡ Performance

- Optimized bundle size with Vite
- Lazy-loaded animations
- Optimized images and assets
- Fast loading times

## 📧 Contact

Milan Blaz - React & React Native Developer

- Website: [https://zbla92.github.io/milan-blaz](https://zbla92.github.io/milan-blaz)
- GitHub: [@zbla92](https://github.com/zbla92)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Milan Blaz
