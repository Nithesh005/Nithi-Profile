# Nithesh Kumar - Professional Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my skills, experience, and projects as a Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA labels
- **Interactive**: Smooth scroll animations and hover effects
- **Professional**: Showcases skills, experience, and achievements

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.6 (React 19)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Material-UI
- **Scroll Animations**: AOS (Animate On Scroll)
- **Notifications**: React Hot Toast
- **SEO**: React Helmet Async

## 📁 Project Structure

```
Nithi-Profile/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Site footer
│   └── sections/
│       ├── HeroSection.jsx     # Hero/landing section
│       ├── AboutSection.jsx    # About and education
│       ├── ExperienceSection.jsx # Work experience
│       └── SkillsSection.jsx   # Technical skills
├── src/
│   └── app/
│       ├── layout.js           # Root layout
│       ├── page.js             # Main page
│       ├── globals.css         # Global styles
│       └── blogs/              # Blog pages
├── utils/
│   └── info.js                 # Data and content
├── public/
│   └── assets/                 # Images and static files
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Yellow (#eab308) - Brand color
- **Secondary**: Gray (#64748b) - Text and borders
- **Accent**: Blue (#3b82f6) - Links and highlights
- **Background**: White/Light gray variations

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (for code)
- **Headings**: Bold weights with gradient text effects
- **Body**: Medium weight for readability

### Components
- **Cards**: Rounded corners with shadows and hover effects
- **Buttons**: Primary, secondary, and outline variants
- **Navigation**: Smooth scroll with active states
- **Animations**: Framer Motion for micro-interactions

## 📱 Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Social media links
- Animated profile image

### 2. About Section
- Personal information
- Statistics and achievements
- Education timeline
- Professional summary

### 3. Experience Section
- Work history with timeline
- Company details and achievements
- Technology stacks used
- Blog post links

### 4. Skills Section
- Categorized technical skills
- Interactive progress bars
- Additional expertise areas
- Continuous learning commitment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nithesh-portfolio.git
   cd nithesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript checks

## 📝 Customization

### Personal Information
Update your information in `utils/info.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  fullName: "Your Full Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Styling
- Colors: Update CSS variables in `src/app/globals.css`
- Components: Modify component files in `components/`
- Layout: Adjust Tailwind classes as needed

### Content
- **Experience**: Add/edit work experience in `utils/info.js`
- **Skills**: Update skill levels and categories
- **Projects**: Add your projects to the data file
- **Blog Posts**: Create new blog pages in `src/app/blogs/`

## 🎯 Best Practices

### Code Structure
- **SOLID Principles**: Components follow single responsibility
- **Reusable Components**: Modular design for scalability
- **Type Safety**: Proper prop validation and TypeScript support
- **Performance**: Optimized images and lazy loading

### SEO Optimization
- **Meta Tags**: Comprehensive Open Graph and Twitter cards
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alt attributes

### Accessibility
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG compliant color ratios
- **Screen Reader**: Semantic HTML structure

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🔧 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain configuration

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Compatible with Next.js
- **Docker**: Use official Next.js Docker image

## 📈 Analytics

Add analytics to track visitor behavior:

```javascript
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

// Hotjar
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:YOUR_HJID,hjsv:6};
    // ... rest of Hotjar code
  })(window,document);
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Inter Font** for typography

## 📞 Contact

- **Email**: nitheshwaran003@gmail.com
- **LinkedIn**: [Nithesh Kumar](https://linkedin.com/in/nithesh-kumar)
- **GitHub**: [nithesh-kumar](https://github.com/nithesh-kumar)
- **Website**: [nithesh.dev](https://nithesh.dev)

---

Made with ❤️ by Nithesh Kumar
