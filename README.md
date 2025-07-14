# Brayden Babbitt — Personal Website

This is the personal website and portfolio for Brayden Babbitt. Built using [Astro](https://astro.build/) and deployed on Cloudflare, it showcases projects, provides links to social profiles, and serves as a central hub for personal and professional information.

## Features

- ✨ Clean, modern homepage
- 🛠️ Project listings with tags and details
- 🔗 Social links (GitHub, LinkedIn, etc.)
- 🚀 Built with Astro and deployed to Cloudflare
- 📱 Responsive and accessible design

## Tech Stack

- [Astro](https://astro.build/)
- [Cloudflare](https://developers.cloudflare.com/workers/)
- [React](https://react.dev/) (for some projects)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/), [RSS](https://www.rssboard.org/rss-specification), [Sitemap](https://www.sitemaps.org/)

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/) (or npm/yarn)
- Node.js (v18+ recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/braydenbabbitt/braydenbabbitt.com braydenbabbitt-com
   cd braydenbabbitt-com
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Development

Start the local development server:

```bash
pnpm dev
```

Visit [localhost:4321](http://localhost:4321) to view the site.

### Build

Create an optimized production build:

```bash
pnpm build
```

### Preview

Preview the production build locally:

```bash
pnpm preview
```

## Deployment

This repo is configured to deploy using Cloudflare Workers through their automated deployment integration. To deploy manually, you can use the following commands:

```bash
pnpm run build
npx wrangler pages deploy ./dist
```

Refer to [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/) for more info.

## License

[MIT](./LICENSE)
