# Zentry Clone

A modern, responsive website clone built with React, Vite, and Tailwind CSS. This project recreates the sleek design and interactive features of the Zentry gaming/entertainment platform with smooth animations powered by GSAP.

## 🎯 Features

- **Responsive Design** - Fully responsive layout that works seamlessly on all devices
- **Smooth Animations** - Professional animations using GSAP and React for engaging user experience
- **Modern Styling** - Clean and modern UI built with Tailwind CSS
- **Fast Performance** - Built with Vite for lightning-fast development and optimized production builds
- **Component-Based Architecture** - Modular, reusable React components
- **Interactive Elements** - Dynamic buttons, navigation, and interactive sections

## 📋 Project Structure

```
src/
├── App.jsx              # Main application component
├── index.css           # Global styles
├── main.jsx            # Entry point
└── components/
    ├── Navbar.jsx      # Navigation bar
    ├── Hero.jsx        # Hero section
    ├── About.jsx       # About section
    ├── Features.jsx    # Features showcase
    ├── Story.jsx       # Story/narrative section
    ├── Contact.jsx     # Contact section
    ├── Footer.jsx      # Footer
    ├── Button.jsx      # Reusable button component
    ├── AnimatedTitle.jsx    # Animated title component
    ├── RoundedCorners.jsx   # Rounded corners effect
    └── VideoPreview.jsx     # Video preview component

public/
├── audio/              # Audio assets
├── fonts/              # Custom fonts
├── img/                # Images
└── videos/             # Video content
```

## 🛠 Tech Stack

- **React 19.2** - JavaScript library for building user interfaces
- **Vite 7.2** - Next generation frontend tooling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **GSAP 3.14** - Professional animation library
- **PostCSS 8.5** - CSS processing
- **ESLint 9.39** - Code quality tool
- **React Icons 5.5** - Icon library
- **Clsx** - Utility for constructing class names

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd zentry-clone
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📦 Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Colors and Styling

- Tailwind CSS configuration: [tailwind.config.js](tailwind.config.js)
- Global styles: [src/index.css](src/index.css)

### Animations

- GSAP is configured in the [src/components/AnimatedTitle.jsx](src/components/AnimatedTitle.jsx) and throughout components using the `@gsap/react` integration

### Assets

- Replace images in `public/img/`
- Update audio files in `public/audio/`
- Modify videos in `public/videos/`
- Add custom fonts to `public/fonts/`

## 🔧 Build Configuration

- **Vite Config**: [vite.config.js](vite.config.js)
- **ESLint Config**: [eslint.config.js](eslint.config.js)
- **Tailwind Config**: [tailwind.config.js](tailwind.config.js)
- **PostCSS Config**: [postcss.config.js](postcss.config.js)

## 📱 Responsive Design

The project is designed to be fully responsive with breakpoints for:

- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## 📝 License

This project is provided as-is for educational and personal use.

## 📧 Contact

For questions or support, please reach out or open an issue in the repository.

---

**Note**: This is a clone/recreation of the Zentry website for educational purposes.
