# SvelteKit and Tailwind CSS Project

This is a static website built with SvelteKit and styled with Tailwind CSS. The site features a blog with posts written in Markdown.

## Key Technologies

- **SvelteKit**: The primary framework for building the site. It's configured for a static site generation using `@sveltejs/adapter-static`.
- **Tailwind CSS**: Used for all styling. We use `prettier-plugin-tailwindcss` to automatically sort classes.
- **Flowbite Svelte**: A component library that is used for some UI elements.
- **mdsvex**: This allows us to use Svelte components inside Markdown files. Blog posts are written in Markdown and can contain interactive Svelte components.
- **scrolly-video**: Used for creating scroll-based video animations.

## Project Structure

- `src/routes`: This directory contains all the pages and layouts for the site.
  - `(loop)` and `(scroll)` are layout groups, which apply different layouts to different sections of the site.
  - `blog/[slug]`: This is the template for individual blog posts.
- `src/lib/components`: Contains reusable Svelte components used throughout the site.
- `src/lib/posts`: Contains the Markdown files for blog posts.
- `static`: Contains static assets like images and videos.

## Developer Workflow

- **Running the dev server**: `npm run dev`
- **Building the site**: `npm run build`
- **Linting and formatting**: `npm run lint` and `npm run format`. Please run these before committing changes.

## Conventions

- **Styling**: All styling should be done with Tailwind CSS utility classes. Avoid writing custom CSS files.
- **Components**: Create reusable components and place them in `src/lib/components`.
- **Blog Posts**: To create a new blog post, add a new `.md` file to `src/lib/posts`. The filename will be used as the URL slug.
