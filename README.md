# Rangga Dimas — Portfolio

Personal portfolio website for Rangga Dimas, a Full-Stack Web Developer based in Bogor, Indonesia.

Built with HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

## File Structure

```
├── index.html       # All HTML content
├── styles.css       # Complete stylesheet
├── script.js        # Mobile toggle & nav highlight
├── assets/
│   └── profile.jpg  # Replace with your photo (120x120 px recommended)
└── README.md
```

## Run Locally

Open `index.html` directly in a browser, or serve with a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

## Replace Profile Image

Place a 120×120 px photo at `assets/profile.jpg`. The site includes a fallback that shows initials if the image fails to load.

## Deploy

### GitHub Pages

1. Push this repo to GitHub
2. Go to Settings → Pages
3. Select `main` branch, root folder
4. Your site will be live at `https://<username>.github.io/<repo>`

### Netlify

1. Drag the project folder to https://netlify.com/drop
2. Or connect your Git repository

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root
3. Follow the prompts
