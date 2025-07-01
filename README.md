# National Research & Enhancement Center Website

A fully functional, modern website for a national research institution built with React, TypeScript, Vite, and Tailwind CSS. Features a comprehensive research portal with multiple pages, advanced UI components, and responsive design.

## 🌟 Features

### Core Pages
- **Home Page**: Hero slideshow, research categories, and recent highlights
- **About Us**: Institution overview, leadership team, mission/vision, and core values
- **Research Areas**: Detailed research departments with projects and facilities
- **Publications**: Searchable publications database with filtering and categorization
- **International**: Global collaborations, partnerships, and conferences
- **Request Passage**: Form for visitor applications

### Modern UI Components
- **Responsive Navigation**: Multi-level dropdown menus with React Router integration
- **Hero Slideshow**: Animated carousel with research highlights
- **Search & Filtering**: Advanced search functionality across publications
- **Interactive Cards**: Hover effects and animations throughout
- **Theme Toggle**: Dark/light mode support
- **Multi-language Support**: Language selection dropdown (EN/Farsi)

### Technical Features
- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS 4** for modern styling
- **Framer Motion** for smooth animations
- **Radix UI** components for accessibility
- **React Router** for client-side routing
- **Responsive Design** for all device sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone and Install Dependencies**
   ```bash
   git clone <repository-url>
   cd afresearchwebsite
   npm install --legacy-peer-deps
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (50+ components)
│   └── includes/           # Layout components
│       ├── NavigationMenu.tsx
│       ├── Footer.tsx
│       ├── SlideShow.tsx
│       ├── ResearchList.tsx
│       └── ThemeToggle.tsx
├── pages/                  # Main page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Publications.tsx
│   ├── ResearchAreas.tsx
│   ├── International.tsx
│   └── RequestPage.tsx
├── routes/                 # React Router configuration
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
└── assets/                 # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Modern blues and grays
- **Accent Colors**: Research-themed colors (red for biomedical, green for environmental, etc.)
- **Dark Mode**: Comprehensive dark theme support

### Typography
- **Font**: Poppins for clean, modern readability
- **Hierarchy**: Consistent heading and body text sizing
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Elevated cards with hover effects
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Forms**: Accessible form controls with validation
- **Navigation**: Multi-level responsive navigation

## 🔧 Key Technologies

### Frontend Framework
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4**: Latest version with new features
- **Radix UI**: Accessible component primitives
- **Lucide React**: Modern icon library
- **Framer Motion**: Animation library

### Data & State
- **React Router**: Client-side routing
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation

### Development Tools
- **ESLint**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting
- **Vite**: Development server and bundler

## 📱 Pages Overview

### Home Page
- **Hero Slideshow**: 4 rotating slides showcasing research areas
- **Search Section**: Global research search with categories
- **Research Categories**: Interactive carousel of research areas
- **Recent Highlights**: Latest publications and discoveries

### About Page
- **Institution Overview**: History and mission
- **Statistics**: Research metrics and achievements
- **Leadership Team**: Key personnel with profiles
- **Core Values**: Excellence, collaboration, innovation

### Research Areas
- **4 Main Areas**: Biomedical Sciences, Technology & AI, Environmental Science, Cognitive Science
- **Department Details**: Budget, researchers, projects, publications
- **Current Projects**: Progress tracking and status
- **Facilities**: World-class research infrastructure

### Publications
- **Advanced Search**: Filter by category, year, type
- **Publication Types**: Journals, reports, datasets
- **Detailed Listings**: Authors, citations, impact factors
- **Download Links**: Direct access to publications

### International
- **Global Partnerships**: University collaborations worldwide
- **Major Programs**: Multi-million dollar international initiatives
- **Conferences**: Upcoming international events
- **Collaboration Details**: Funding, duration, focus areas

## 🌐 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Medium screen adaptations
- **Desktop**: Full-featured desktop experience
- **Large Screens**: Optimized for wide displays

## ♿ Accessibility

- **ARIA Labels**: Proper accessibility labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with screen readers
- **Color Contrast**: WCAG compliant color schemes

## 🚀 Performance

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images
- **Bundle Analysis**: Optimized bundle sizes
- **Caching**: Browser caching strategies

## 🔒 Security

- **Form Validation**: Client and server-side validation
- **XSS Protection**: Sanitized inputs
- **HTTPS Ready**: Secure deployment configuration

## 📊 Features in Detail

### Navigation System
- **Multi-level Dropdowns**: Research areas, publications, international
- **Mobile Menu**: Collapsible mobile navigation
- **Active States**: Current page highlighting
- **Search Integration**: Global search in header

### Content Management
- **Dynamic Data**: Easy content updates through data files
- **Image Assets**: Organized image management
- **Consistent Layouts**: Reusable layout components

### User Experience
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Progressive Enhancement**: Works without JavaScript

## 🌍 Internationalization

- **Language Toggle**: English/Farsi support ready
- **RTL Support**: Right-to-left layout compatibility
- **Localized Content**: Structured for easy translation

## 📈 SEO & Analytics

- **Meta Tags**: Proper meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Analytics Ready**: Google Analytics integration ready

## 🛠️ Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

### Code Quality
- **TypeScript**: Full type coverage
- **ESLint**: Consistent code style
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality control

## 🚀 Deployment

The website is configured for easy deployment to:
- **GitHub Pages**: Automated deployment
- **Vercel**: One-click deployment
- **Netlify**: Drag-and-drop deployment
- **Traditional Hosting**: Standard static hosting

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for advancing scientific research and knowledge sharing**
