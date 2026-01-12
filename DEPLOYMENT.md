# Portfolio Deployment Guide
This guide will help you deploy your Astro portfolio to GitHub Pages at `https://shptk.github.io/`.

## Prerequisites

- Git installed on your system
- GitHub account (username: shptk)
- Repository created at `git@github.com:shptk/shptk.github.io.git`

## Step 1: Initialize Git Repository (if not already done)

```bash
cd /home/shptk/workspace/jobs/2026_resumes/portfolio/astro-theme-cactus

# Initialize git if not already initialized
git init

# Add the remote repository
git remote add origin git@github.com:shptk/shptk.github.io.git

# Verify the remote
git remote -v
```

## Step 2: Configure GitHub Repository Settings

1. Go to your GitHub repository: `https://github.com/shptk/shptk.github.io`
2. Click on **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. This allows the GitHub Actions workflow to deploy your site

## Step 3: Commit and Push Your Code

```bash
# Add all files
git add .

# Commit with a message
git commit -m "Initial portfolio setup with Astro Cactus theme"

# Push to main branch (or master if that's your default)
git push -u origin main
```

**Note:** If your default branch is `master` instead of `main`, use:
```bash
git push -u origin master
```

## Step 4: Verify Deployment

After pushing, the GitHub Actions workflow will automatically:
1. Install dependencies
2. Build your Astro site
3. Deploy to GitHub Pages

To check the deployment status:
1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow run called "Deploy to GitHub Pages"
4. Wait for it to complete (usually takes 2-3 minutes)

Once complete, your site will be live at: **https://shptk.github.io/**

## Step 5: Troubleshooting

### If the build fails:

1. Check the Actions logs on GitHub for error messages
2. Common issues:
   - Branch name mismatch: The workflow is configured for `main` or `master`. If you use a different branch, update `.github/workflows/deploy.yml`
   - Missing dependencies: Make sure all dependencies are in `package.json`

### If the site doesn't load:

1. Verify GitHub Pages is enabled in repository settings
2. Check that the source is set to "GitHub Actions"
3. Wait a few minutes - DNS propagation can take time

## Making Updates

Whenever you want to update your portfolio:

```bash
# Make your changes to the files
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push
```

The site will automatically rebuild and redeploy!

## Local Development

To preview your site locally before deploying:

```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Open http://localhost:4321 in your browser
```

To build and preview production version:

```bash
# Build the site
npm run build

# Preview the built site
npm run preview
```

## File Structure

```
astro-theme-cactus/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment workflow
├── public/
│   ├── Shashwat-Pathak-Resume.pdf  # Your resume
│   ├── icon.svg               # Favicon
│   └── social-card.png        # OG image for social sharing
├── src/
│   ├── components/            # Reusable components
│   ├── content/               # Blog posts and notes
│   ├── layouts/               # Page layouts
│   ├── pages/                 # Your portfolio pages
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   ├── experience.astro   # Experience page
│   │   ├── projects.astro     # Projects page
│   │   ├── skills.astro       # Skills page
│   │   └── certifications.astro # Certifications page
│   └── site.config.ts         # Site configuration
├── astro.config.ts            # Astro configuration
└── package.json               # Dependencies
```

## Customization Tips

### Update Personal Information
Edit `src/site.config.ts` to update:
- Site title
- Description
- Author name
- Social links

### Add Blog Posts
Create new `.md` or `.mdx` files in `src/content/post/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "Post description"
publishDate: 2026-01-12
tags: ["devops", "kubernetes"]
---

Your content here...
```

### Update Resume
Replace `public/Shashwat-Pathak-Resume.pdf` with your updated resume.

### Change Theme Colors
Edit `tailwind.config.ts` to customize colors and styling.

## Need Help?

- **Astro Docs**: https://docs.astro.build
- **Astro Cactus Theme**: https://github.com/chrismwilliams/astro-theme-cactus
- **GitHub Pages Docs**: https://docs.github.com/en/pages

## What's Included in Your Portfolio

✅ **Home Page** - Professional introduction with quick links
✅ **About Page** - Conversational bio with download resume button
✅ **Experience Page** - Timeline of work experience with achievements
✅ **Projects Page** - Showcase of GitHub projects
✅ **Skills Page** - Technical skills matrix with proficiency levels
✅ **Certifications Page** - Professional certifications with badges
✅ **Blog** - Ready for technical writing and posts
✅ **Dark/Light Mode** - Built-in theme toggle
✅ **Responsive Design** - Mobile-friendly layout
✅ **SEO Optimized** - Meta tags and OG images
✅ **Search** - Static search for blog posts

Enjoy your new portfolio! 🚀
