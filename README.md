# DineSync — Frontend

DineSync is a single-page React application built with Vite that provides a restaurant management and discovery experience. It supports two user roles:

- Admin: onboard a restaurant, manage menu items, and view orders and analytics.
- Client: discover restaurants, view menus, add items to cart, and book tables.

This repository contains the frontend application used for demos and local development.

## Quick links
- Live dev server (local): http://localhost:5174/ (Vite)
- Main entry: [src/App.jsx](src/App.jsx)
- Documentation: [FRONTEND_DOCUMENTATION.md](FRONTEND_DOCUMENTATION.md)

## Tech stack
- React + JSX
- Vite for development and build
- React Router for routing
- Plain CSS per-page/component

## Getting started (development)
1. Install dependencies

```bash
npm install
```

2. Start development server (hot reload)

```bash
npm run dev
```

3. Open http://localhost:5174/ in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure (important files)
- `src/` — application source
	- `components/` — reusable UI components (Navbar, Sidebar, Icon, etc.)
	- `pages/` — top-level route pages (Landing, SignUp, Credentials, Overview, Menu, Orders, Restaurants, ClientMenu, Cart, ViewItem, BookTable)
	- `styles/` — plain CSS files, one per page/component
	- `assets/` — images and static assets
- `App.jsx` — routes and app wiring
- `package.json` — scripts and dependencies

## User flow (core)

Landing Page
	├── "Get Started" / "Sign Up" → SignUpPage
	└── "Login" → LoginPage

SignUpPage
	├── "Admin" button → CredentialsPage
	└── "Client" button → RestaurantsPage

CredentialsPage (3 steps) → OverviewPage (Admin)

OverviewPage (admin sidebar)
	├── Menu → MenuPage
	└── Order → OrdersPage

RestaurantsPage (client)
	└── "Visit" → ClientMenuPage

ClientMenuPage
	└── "Add" on a dish → ViewItemPage
				├── "Add to cart" → CartPage
				└── "Back" → ClientMenuPage

ClientMenuPage sidebar
	└── "Book a table" → BookTablePage

## Notes and contributions
- I updated the UI (icons, credentials illustrations, BookTable layout) to match the current design. Review pages locally and report layout issues.
- If you want me to open a PR, add CI, or publish a demo, tell me the target branch or hosting provider.

---
If something is missing from the README you'd like displayed (badges, screenshots, license), tell me what to add and I'll update it.
