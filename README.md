# Rusty Rohbot's Blog

This is my personal blog, built using [Astro](https://astro.build/). It features a clean, responsive design with content organized for easy management.

## Features

- **Blog Posts**: Written in Markdown and rendered dynamically.
- **Projects Showcase**: A dedicated page for highlighting key projects.
- **Contact Form**: Integrated with Netlify Forms for simple submission handling.
- **Mobile-Friendly**: Fully responsive design for all devices.

## Structure

```
├── public/                     # Static assets like images, icons, and more
├── src/
│   ├── components/             # Reusable UI components
│   ├── content/                # Blog posts (Markdown)
│   ├── layouts/                # Layout templates for pages and posts
│   └── pages/                  # Pages (home, about, projects, blog, contact)
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.mjs         # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Pages

### Home (`/`)

- Brief introduction and the latest blog posts.

### About (`/about`)

- Information about me and my background.

### Blog (`/blog`)

- Displays all blog posts, including featured and recent articles.
- Posts are written in Markdown and include metadata.

### Projects (`/projects`)

- Highlights projects with key information such as:
  - Name
  - Description
  - Technologies used
  - Links to live versions or repositories

### Contact (`/contact`)

- A form to reach out with fields for:
  - Name (required)
  - Email (optional)
  - Phone (optional)
  - Message (required)
- Submissions are handled through Netlify Forms.

## Running Locally

To run the blog locally:

1. Clone the repository:

   ```bash
   git clone git@github.com:rustyrohbot/retrograde-raspberry.git
   cd retrograde-raspberry
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:4321](http://localhost:4321).

## Deployment

This blog is designed to be deployed on [Netlify](https://netlify.com). Deployment steps:

1. Push the repository to GitHub.
2. Log in to Netlify and create a new site from GitHub.
3. Select the repository and configure build settings if necessary.
4. Deploy the site.