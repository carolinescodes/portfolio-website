# Caroline McMahon - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects, experience, education, art gallery, and personal blog.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Interactive Art Gallery**: Individual pages for each artwork with detailed information
- **Personal Blog**: Two continuously updatable blog entries
- **Resume Integration**: Direct PDF access from the hero section
- **Dynamic Navigation**: Smooth scrolling between sections
- **Contact Section**: Easy ways to get in touch

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify
- **Icons**: Custom SVG icons
- **Fonts**: System fonts with custom styling

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ArtSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MyStorySection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── SkillsSection.jsx
│   ├── art/[slug]/          # Dynamic art gallery pages
│   ├── blog/                # Blog pages
│   │   ├── [slug]/          # Individual blog posts
│   │   └── page.jsx         # Blog home page
│   ├── projects/[slug]/     # Dynamic project pages
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js              # Main homepage
├── public/
│   ├── ART/                 # Art gallery images
│   ├── Story/               # Personal story images
│   ├── videos/              # Project demo videos
│   └── Caroline_McMahon_Resume.pdf
└── Configuration files (package.json, tailwind.config.js, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/carolinescodes/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Adding New Artwork
1. Add your image to `/public/ART/`
2. Update the `artPieces` array in `/app/components/ArtSection.jsx`
3. Add corresponding data in `/app/art/[slug]/page.jsx`

### Updating Blog Posts
1. Edit the `blogData` object in `/app/blog/[slug]/page.jsx`
2. Update the content between the backticks
3. Changes appear immediately

### Adding New Projects
1. Add project data to `/app/components/ProjectsSection.jsx`
2. Create corresponding page in `/app/projects/[slug]/`

## 🎨 Sections

- **Hero**: Introduction with resume download
- **Projects**: Showcase of technical projects with live demos
- **Experience**: Professional work experience
- **Education**: Academic background and achievements
- **Skills**: Technical and creative capabilities
- **My Story**: Personal journey with images
- **Art Gallery**: Individual artwork showcases
- **Blog**: Personal thoughts and updates
- **Contact**: Ways to connect

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌐 Deployment

This project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with default settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

Caroline McMahon
- **LinkedIn**: [linkedin.com/in/caroline-mcmahon-99122526a](https://www.linkedin.com/in/caroline-mcmahon-99122526a/)
- **GitHub**: [github.com/carolinescodes](https://github.com/carolinescodes)

---

*Built with ❤️ by Caroline McMahon*
