# APEX Streetwear Website

A minimal, clean streetwear e-commerce website built with React and Tailwind CSS.

## Features
- Responsive design (mobile & desktop)
- Product gallery with 6 featured items
- Interactive product modals
- Mobile-friendly navigation
- Fast and lightweight

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd apex-streetwear
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The site will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub and select your repository
5. Click "Deploy"

## Customization

### Update Brand Name
Edit `src/App.jsx` and change `APEX` to your brand name

### Add Products
Edit the `products` array in `src/App.jsx` with your actual items:
```javascript
{
  id: 1,
  name: 'Product Name',
  price: '$XX',
  image: '🖼️', // Replace with actual image URL
  category: 'tops',
  color: 'Black',
}
```

### Add Images
Replace emoji placeholders with actual image URLs:
```javascript
image: 'https://your-image-url.com/product.jpg'
```

Then update the image display in the JSX:
```javascript
<img src={product.image} alt={product.name} />
```

## Next Steps
- Add real product images
- Connect to payment gateway (Stripe, PayPal)
- Add user authentication
- Set up product inventory system
- Add email notifications

---
**Minimal. Raw. Authentic.**
