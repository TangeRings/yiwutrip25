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
   - Add ALL 4 credentials Cloudinary provided (replace with your actual values):
   ```env
   # Client-side credentials (safe to expose to browser)
   # Required for CldImage component
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key_here
   
   # Server-side credentials (NEVER expose to browser!)
   # Required for uploads, admin API, signed URLs, etc.
   CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   CLOUDINARY_API_KEY=your_api_key_here
   CLOUDINARY_API_SECRET=your_api_secret_here
   CLOUDINARY_API_ENVIRONMENT_VARIABLE=your_api_env_var_here
   ```

   **Why two sets?**
   - **`NEXT_PUBLIC_` prefix**: These variables are bundled into your JavaScript and exposed to the browser
     - Safe for: Cloud name, API key
     - Used by: `CldImage` component (displays images)
   
   - **Without prefix**: These stay on the server only
     - Required for: API secret, API environment variable
     - Used by: Server-side uploads, admin operations, signed URLs, transformations that require authentication
   
   **Security Rule:** Never add `NEXT_PUBLIC_` to `API_SECRET` or `API_ENVIRONMENT_VARIABLE` - it would expose your secret keys to anyone viewing your website's JavaScript!

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

To upload images programmatically (server-side only), you'll need all credentials:

```typescript
// Server-side only (API route, Server Component, etc.)
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Without NEXT_PUBLIC_ prefix
  api_key: process.env.CLOUDINARY_API_KEY,        // Without NEXT_PUBLIC_ prefix
  api_secret: process.env.CLOUDINARY_API_SECRET,  // Server-only!
  api_environment_variable: process.env.CLOUDINARY_API_ENVIRONMENT_VARIABLE, // Server-only!
});

// Example: Upload an image
const result = await cloudinary.uploader.upload(imagePath, {
  folder: 'portfolio',
  resource_type: 'image',
});
```

### All 4 Credentials Explained

1. **Cloud Name** - Your account identifier
   - Client-side: Used by `CldImage` to construct image URLs
   - Server-side: Required for all API operations

2. **API Key** - Public key for authentication
   - Client-side: Used by `CldImage` for transformations
   - Server-side: Required with API secret for authenticated operations

3. **API Secret** - Private key (keep secret!)
   - Server-side only: Required for uploads, deleting, signed URLs, admin operations
   - ⚠️ Never expose to client

4. **API Environment Variable** - Additional environment context
   - Server-side only: Used for advanced features like environment-specific configurations
   - ⚠️ Never expose to client

## Resources

- [Cloudinary Next.js SDK Docs](https://cloudinary.com/documentation/nextjs_integration)
- [Cloudinary Transformation Reference](https://cloudinary.com/documentation/transformation_reference)
- [Free Tier Limits](https://cloudinary.com/pricing)
