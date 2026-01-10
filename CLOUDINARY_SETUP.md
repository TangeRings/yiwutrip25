# Cloudinary Setup Guide

## Quick Start

1. **Sign up for Cloudinary**
   - Go to [cloudinary.com](https://cloudinary.com/users/register_free)
   - Create a free account (includes 25 GB storage and 25 GB bandwidth)

2. **Get your credentials**
   - After signing up, go to your [Dashboard](https://cloudinary.com/console)
   - Copy your `Cloud name`, `API Key`, and `API Secret`

3. **Set environment variables**
   - Create a `.env.local` file in the root of your project
   - Add the following (replace with your actual values):
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key_here
   ```

   **Important:** 
   - The `NEXT_PUBLIC_` prefix is required for client-side components
   - Only `cloud_name` and `api_key` are needed for `CldImage` component
   - `API_SECRET` is only needed for server-side operations (uploads, admin API)

4. **Upload your images**
   - Use the [Media Library](https://cloudinary.com/console/media_library) in your dashboard
   - Upload your images
   - Note the `Public ID` of each image (shown in the details panel)

5. **Update your code**
   - Open `src/components/sections/FeaturedWork.tsx`
   - Replace the `imageSrc` values with your actual Cloudinary `public_id`s:
   ```typescript
   {
     id: 1,
     title: "Red Shoe Chronicles",
     imageSrc: "your-actual-public-id", // Use the Public ID from Cloudinary
     // ...
   }
   ```

## Features Included

The `CldImage` component automatically provides:
- ✅ **Auto-format**: Serves WebP/AVIF when supported by browser
- ✅ **Auto-quality**: Optimized quality based on image content
- ✅ **Auto-crop**: Intelligent cropping with `crop: { type: "auto", source: true }`
- ✅ **Lazy loading**: Images load as you scroll (first image eager, others lazy)
- ✅ **Responsive images**: Different sizes for different screen widths

## Advanced Usage

### Custom Transformations

You can add more transformations to `CldImage`:

```typescript
<CldImage
  src={work.imageSrc}
  width={600}
  height={800}
  alt={work.title}
  crop={{
    type: "auto",
    source: true,
  }}
  effects={[
    {
      colorize: "50,blue",
    },
  ]}
  // ... other props
/>
```

### Upload via API

To upload images programmatically (server-side only), you'll need the API secret:

```typescript
// Server-side only (API route, Server Component, etc.)
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Only on server!
});
```

## Resources

- [Cloudinary Next.js SDK Docs](https://cloudinary.com/documentation/nextjs_integration)
- [Cloudinary Transformation Reference](https://cloudinary.com/documentation/transformation_reference)
- [Free Tier Limits](https://cloudinary.com/pricing)
