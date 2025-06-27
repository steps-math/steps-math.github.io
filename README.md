# Summer Math Course Website

A clean, educational website for high school students covering pre-calculus and differentiation topics, built with Eleventy and designed for GitHub Pages deployment.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── _layouts/          # Page templates
├── _includes/         # Reusable components
├── css/              # Stylesheets
├── notes/            # Daily class notes (markdown)
├── labs/            # Guided exploration activities (markdown)
└── index.md         # Homepage
```

## Adding Content

### Notes (Class Notes)
Create new markdown files in `src/notes/` with this frontmatter:
```yaml
---
layout: base.njk
title: Your Topic Title
category: probability # or "functions", "continuity", "limits", "differentiation"
description: Brief description of the topic
date: 2024-06-20
---
```


### Labs
Create new markdown files in `src/labs/` with this frontmatter:
```yaml
---
layout: base.njk
title: Lab Activity Title
description: What students will explore
date: 2024-06-20
---
```

## Math Support

The site supports LaTeX math notation using KaTeX:

- Inline math: `$f(x) = x^2$`
- Display math: `$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$`

## Deployment

This site is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Enable GitHub Pages in your repository settings

## Features

- Clean, distraction-free design
- Full LaTeX math support with KaTeX
- Responsive layout for all devices
- Automatic navigation generation
- GitHub Pages deployment ready
- Simple markdown-based content management
- Organized content structure 

## Customization

### Styling
Modify `src/css/style.css` to change colors, fonts, or layout.

