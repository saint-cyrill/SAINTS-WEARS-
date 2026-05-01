# APEX Streetwear - Deployment Guide

Your complete website is ready to deploy! Follow these simple steps.

---

## Step 1: Set Up GitHub (5 minutes)

GitHub is where you'll store your code so Vercel/Netlify can deploy it.

### 1a. Create GitHub Account
- Go to [github.com](https://github.com)
- Sign up (free account)
- Verify your email

### 1b. Create a New Repository
1. Click **+** icon (top right) → **New repository**
2. Name it: `apex-streetwear`
3. Description: "APEX Streetwear Website"
4. Select **Public** (free public is standard)
5. **Skip** "Add README" (we have one)
6. Click **Create repository**

### 1c. Upload Your Code
You have two options:

**Option A: Using GitHub Web (Easiest)**
1. In your new repo, click **Add file** → **Upload files**
2. Drag & drop all files from your project folder
3. Add commit message: "Initial commit"
4. Click **Commit changes**

**Option B: Using Command Line (If you know Git)**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/apex-streetwear.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel (Recommended - 2 minutes)

Vercel is the easiest platform for React apps. It's free and super fast.

### 2a. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (use your GitHub account - easier!)
3. Authorize Vercel to access GitHub
4. You'll be redirected to Vercel dashboard

### 2b. Import Your Project
1. Click **New Project** or **Import Project**
2. Select your GitHub account
3. Find & click your `apex-streetwear` repository
4. Click **Import**

### 2c. Configure & Deploy
1. Vercel will auto-detect it's a React app ✓
2. Click **Deploy**
3. **Wait 2-3 minutes** while it builds...
4. ✅ **Your site is LIVE!**

You'll get a URL like: `apex-streetwear.vercel.app`

---

## Step 3: Add a Custom Domain (Optional - 10 minutes)

Want `yourname.com` instead of `apex-streetwear.vercel.app`?

### If You Have a Domain Already
1. In Vercel dashboard → **Settings** → **Domains**
2. Enter your domain
3. Follow Vercel's DNS instructions
4. Update your domain registrar's nameservers

### If You Don't Have a Domain Yet
1. Buy from: GoDaddy, Namecheap, or Google Domains (~$10-15/year)
2. Follow the domain setup in Vercel after purchase

---

## Step 4: Test Your Live Site ✓

1. Visit your Vercel URL
2. Test on mobile phone (click menu, products, etc.)
3. Make sure everything works

---

## Step 5: Update Your Site (Easy!)

Want to make changes? Super simple:

1. Edit files on your computer
2. Upload changed files to GitHub (via web or command line)
3. Vercel **automatically redeploys** within 1-2 minutes
4. Changes are live!

Example:
- Change product names → Edit `src/App.jsx` → Push to GitHub → Done!
- Update prices → Same process → Auto-deploys

---

## Alternative: Deploy to Netlify

If you prefer Netlify instead:

1. Go to [netlify.com](https://netlify.com)
2. Click **New site from Git**
3. Connect GitHub account
4. Select your repository
5. Click **Deploy**
6. ✅ Live in 2-3 minutes

(Same as Vercel, just different platform)

---

## Troubleshooting

### Build Failed?
- Check that all files are uploaded to GitHub
- Make sure `package.json` is in the root folder
- Vercel will show error logs - read them!

### Site Looks Broken?
- Clear your browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Try on a different browser

### Can't Connect Domain?
- Wait 24-48 hours for DNS to update
- Verify you copied Vercel's DNS settings correctly
- Contact domain registrar support if stuck

---

## What's Next?

After deployment, consider:

1. **Add Real Product Images**
   - Replace emoji placeholders with actual product photos
   - Edit `src/App.jsx`
   - Update image URLs

2. **Connect Payment System**
   - Add Stripe or PayPal
   - Enable "Add to Cart" functionality
   - Process real orders

3. **Add Contact Form**
   - Let customers reach you
   - Collect email inquiries

4. **Set Up Analytics**
   - Vercel has built-in analytics
   - Track visitors, page views, etc.

5. **Mobile App (Future)**
   - Turn website into iOS/Android app

---

## You're Done! 🎉

Your site is now live and deployed. Share the URL with your audience!

**Your site URL:**
```
https://apex-streetwear.vercel.app
```
(Replace with your actual Vercel URL after deployment)

---

## Support

If anything gets stuck:
- Check Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- Ask me for help!

**Good luck with your streetwear business!** 🔥
