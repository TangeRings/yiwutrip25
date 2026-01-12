# Yiwu Trip - Modern Portfolio Landing Page

A beautiful, editorial-style one-page landing page built with Next.js and Tailwind CSS, inspired by premium Wix portfolio templates.

## ✨ Features

- **Modern Editorial Design**: Big typography, generous whitespace, and rounded cards
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Subtle hover effects and transitions
- **Google Fonts**: Space Grotesk for headings, Inter for body text
- **Professional Structure**: Clean, maintainable code following Next.js best practices
- **Grain Texture**: Subtle grain overlay for that premium feel
- **Accent Stars**: Tasteful decorative elements throughout

## 🎨 Design Philosophy

- Editorial aesthetic with lots of breathing room
- Soft pastel color palette (pink, beige, burgundy, blue)
- Bold accent orange for CTAs
- Rounded corners on all cards (24px radius)
- Clean, minimal navigation
- Focus on visual hierarchy and readability

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
yiwutrip/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Main page composition
│   │   └── globals.css         # Global styles & utilities
│   └── components/
│       ├── layout/
│       │   ├── Navigation.tsx  # Top menu bar
│       │   └── Footer.tsx      # Footer section
│       └── sections/
│           ├── HeroSection.tsx # Hero with big typography
│           └── FeaturedWork.tsx # Portfolio grid (uses Cloudinary)
├── .env.local                  # Cloudinary credentials (create this)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎯 Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    orange: "#FF6B35",   // Primary CTA color
    navy: "#1B1B3A",     // Text color
    pink: "#FFE5E5",     // Background tint
    // ... more colors
  },
}
```

### Fonts

Change fonts in `src/app/layout.tsx`. Using Google Fonts:

```typescript
import { Space_Grotesk, Inter } from "next/font/google";
```

### Content

Update content in the respective component files:
- **Hero text**: `src/components/sections/HeroSection.tsx`
- **Navigation items**: `src/components/layout/Navigation.tsx`
- **Featured work**: `src/components/sections/FeaturedWork.tsx`

## 📸 Cloudinary Integration

This project uses **Cloudinary SDK** for optimized image delivery. No local assets needed!

### Setup

1. **Get your Cloudinary credentials:**
   - Sign up at [cloudinary.com](https://cloudinary.com)
   - Get your `cloud_name`, `api_key`, and `api_secret` from the dashboard

2. **Create `.env.local` file** in the root directory:
   ```env
   # Required for client-side CldImage component
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   
   # Required for server-side operations (upload, delete, admin API)
   # ⚠️ NEVER add NEXT_PUBLIC_ prefix to API_SECRET (security risk!)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLOUDINARY_API_ENVIRONMENT_VARIABLE=your_api_env_var
   ```
   
   **Important Security Notes:**
   - `CLOUD_NAME` & `API_KEY`: Safe to expose to client (use `NEXT_PUBLIC_` prefix)
   - `API_SECRET` & `API_ENVIRONMENT_VARIABLE`: **Server-side only** - never expose to browser!
   - For `CldImage` component (displaying images): Only need the `NEXT_PUBLIC_` versions
   - For uploads/admin operations (API routes, Server Components): Use all credentials without `NEXT_PUBLIC_`

3. **Upload your images to Cloudinary:**
   - Use the Media Library in your Cloudinary dashboard
   - Note the `public_id` of each image

4. **Update image sources in `FeaturedWork.tsx`:**
   ```typescript
   {
     id: 1,
     title: "Your Project",
     imageSrc: "your-cloudinary-public-id", // Replace with actual public_id
     // ...
   }
   ```

### Features

- **Auto-optimization**: `CldImage` automatically applies format and quality optimization
- **Responsive images**: Built-in `sizes` prop for optimal loading
- **Transformations**: Easy cropping, resizing, and effects
- **Lazy loading**: Images load as you scroll (except the first one)

## 🛠️ Technologies

- **Next.js 14** - App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Google Fonts** - Typography (Space Grotesk & Inter)
- **Cloudinary** - Image optimization & CDN (`next-cloudinary`)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

