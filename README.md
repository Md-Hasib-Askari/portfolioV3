# Portfolio v3

A modern, responsive portfolio website built with Next.js 16 and React 19, featuring a clean design with smooth animations and dark/light theme support.

## Overview

This portfolio showcases professional work, skills, and achievements through an elegant single-page application. The site includes sections for hero introduction, technology stack, project highlights, education, testimonials, FAQ, and contact information.

## Tech Stack

### Core Framework
- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **next-themes** - Dark/light mode theming
- **class-variance-authority** - Component variant management

### UI Components
- **Radix UI** - Accessible component primitives
  - Accordion
  - Avatar
  - Aspect Ratio
  - Slot
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **Embla Carousel** - Touch-friendly carousel with autoplay

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Project Structure

```
portfolioV3/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Main layout components
│   │   ├── navbar.tsx
│   │   ├── hero-section.tsx
│   │   ├── tech-stack.tsx
│   │   ├── highlight-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   └── theme-provider.tsx # Theme context provider
├── constants/
│   └── global-pathnames.ts
├── lib/
│   └── utils.ts           # Utility functions
└── public/
    └── project-images/    # Project screenshots and assets
```

## Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Theme Switching** - Dark and light mode support
- **Smooth Animations** - Fluid transitions and scroll-based animations
- **Accessible** - Built with Radix UI primitives for WCAG compliance
- **Performance Optimized** - Next.js automatic code splitting and image optimization
- **SEO Ready** - Meta tags and semantic HTML structure
- **Type Safe** - Full TypeScript coverage

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Md-Hasib-Askari/portfolioV3
cd portfolioV3
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

The page auto-reloads when you edit files. Start by modifying `app/page.tsx` or any component in the `components/` directory.

### Build

Create a production build:

```bash
npm run build
npm run start
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
```

## Component Configuration

This project uses shadcn/ui components configured in `components.json`:
- Style: New York
- Base color: Slate
- CSS variables enabled
- Lucide icons

## Customization

### Theme

Theme colors and variables are defined in `app/globals.css`. Modify CSS variables to customize the color scheme:

```css
--background: ...
--foreground: ...
--primary: ...
--accent: ...
```

### Content

Update content in individual component files:
- Personal info: `components/layout/highlight-section.tsx`
- Projects: `components/layout/projects-section.tsx`
- Skills: `components/layout/tech-stack.tsx`
- Contact: `components/layout/contact.tsx`

## Deployment

### Vercel (Recommended)

The easiest deployment option for Next.js applications:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures build settings
4. Deploy

### Other Platforms

This Next.js app can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Digital Ocean App Platform

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific guides.

## License

This project is private and proprietary.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)
