# Cybersecurity Law Project

A web application built for a cybersecurity law course, designed in Figma and implemented with React, TypeScript, and Vite.

## Overview

This project serves as a portfolio site for a cybersecurity law class, exploring topics at the intersection of technology, policy, and legal frameworks. The UI was designed in Figma and translated into a fully functional React application.

- **Figma Design:** [Portfolio site for project](https://www.figma.com/design/4tbxRlIHbr0EszoqIsPeJ8/Portfolio-site-for-project)

## Tech Stack

- React
- TypeScript
- Vite
- PostCSS / Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 22.x or later
- npm

### Installation

```bash
git clone git@github.com:ekoester96/cyber_law_project.git
cd cyber_law_project
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The build output is written to the `dist/` directory.

## Infrastructure

This site is hosted on a self-managed Ubuntu Server 24.04 VM running in a Proxmox DMZ environment. The deployment stack includes:

- **Nginx** (Docker) serving the production build with self-signed TLS
- **Cloudflare Tunnel** for public HTTPS access at [project.ekoester.org](https://project.ekoester.org)
- **GitHub Actions** with a self-hosted runner for automatic deployment on push to `main`

## Deployment

Pushing to `main` triggers an automatic deployment via a self-hosted GitHub Actions runner. The workflow pulls the latest code, runs `npm install` and `npm run build`, then restarts the Nginx container.

## Attributions

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for credits and third-party resources used in this project.
  
