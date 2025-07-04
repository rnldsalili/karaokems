# KaraOkems

KaraOkems is a monorepo project for managing and running karaoke-related applications and services. This repository contains both the backend API and the frontend app, along with shared packages and utilities.

## Monorepo Structure

- `apps/` - Main applications
  - `api/` - Backend API (TypeScript, Cloudflare Workers)
  - `app/` - Frontend application (React, Vite)
- `packages/` - Shared packages and libraries
  - `api-client/` - API client utilities
  - `constants/` - Shared constants
  - `enums/` - Shared enums
  - `eslint-config/` - Shared ESLint configuration
  - `typescript-config/` - Shared TypeScript configuration
  - `ui/` - Shared UI components
  - `validators/` - Shared validation logic

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Run the backend API:**
   ```sh
   cd apps/api
   pnpm dev
   ```
3. **Run the frontend app:**
   ```sh
   cd apps/app
   pnpm dev
   ```

## Requirements
- [Node.js](https://nodejs.org/) (v22+ recommended)
- [pnpm](https://pnpm.io/)

## License
MIT
