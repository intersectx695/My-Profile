# Personal Profile Website

A clean, minimal personal website inspired by Lin-Manuel Miranda's design aesthetic. Showcases your career journey, achievements, and accomplishments. Built with Next.js, React, and Tailwind CSS.

## Design Features

- 🎨 Clean, minimal design inspired by linmanuel.com
- 📱 Fully responsive and mobile-friendly
- 🎯 Smooth scrolling navigation
- ⚡ Fast loading with Next.js optimization
- 🖼️ Optimized images
- 📄 Print-friendly styles
- ✨ Elegant typography and spacing

## Sections

1. **Hero Section** - Introduction with professional photo
2. **Professional Experience** - Big tech company experiences
3. **Education** - Academic background and achievements
4. **Achievements & Recognition** - Patents, awards, and notable accomplishments
5. **DataGenie** - Founding engineer role and contributions
6. **Contact** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update your profile data:
   - Edit `data/profile.ts` with your actual information
   - Replace placeholder content with your real experiences, education, achievements, etc.
   - Update contact information (email, LinkedIn, GitHub, etc.)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Updating Content

All content is stored in `data/profile.ts`. Update the following:

- Personal information (name, title, bio)
- Professional experiences
- Education details
- Achievements and recognitions
- DataGenie information
- Contact information

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and custom CSS

### Image

Your profile image is located at `public/images/ashish.jpg`. Replace it with your own image if needed.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

The `vercel.json` file is already configured.

### Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Netlify will automatically detect Next.js and deploy

The `netlify.toml` file is already configured.

### GitHub Pages

For GitHub Pages, you'll need to use a static export:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build and deploy:
```bash
npm run build
# The out/ folder can be deployed to GitHub Pages
```

### Other Platforms

The site can be deployed to any platform that supports Node.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## Project Structure

```
my-profile/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Experience.tsx   # Professional experience
│   ├── Education.tsx    # Education section
│   ├── Achievements.tsx # Achievements section
│   ├── DataGenie.tsx    # DataGenie section
│   ├── Contact.tsx      # Contact section
│   └── Navigation.tsx   # Navigation bar
├── data/
│   └── profile.ts       # Profile data
├── public/
│   └── images/
│       └── ashish.jpg   # Profile image
├── package.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Next/Image** - Optimized images

## License

This project is open source and available for personal use.

## Support

For issues or questions, please update the content in `data/profile.ts` with your actual information.

---

**Note**: Remember to update all placeholder content in `data/profile.ts` with your actual resume information before deploying!

