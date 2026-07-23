# Vibely

Vibely is a full-stack social media platform designed for modern, community-driven interaction. It brings together profile management, social feeds, content sharing, messaging, notifications, and moderation-friendly platform foundations in one workspace.

This repository is organized as a monorepo with a separate frontend and backend so each layer can evolve independently while sharing the same product vision.

## Overview

Vibely is intended to support the core behaviors users expect from a complete social platform:

- User authentication and account management
- Personal profiles and editable bios
- Feed-based post discovery and content creation
- Social interactions such as likes, comments, reposts, and follows
- Direct messaging and community engagement
- Notifications and activity updates
- Media sharing for images and rich content
- Admin and moderation workflows for platform safety

The current workspace contains the initial frontend and backend structure needed to build those features out.

## Tech Stack

- Frontend: React 19, Vite
- Backend: Node.js, CommonJS package setup
- Tooling: Vite dev server, React DOM, modern JavaScript modules

## Repository Structure

```text
Vibely Platform/
├── readme.MD
├── Backend/
│   └── package.json
└── Frontend/
	├── index.html
	├── package.json
	├── vite.config.js
	├── public/
	└── src/
		├── App.jsx
		├── App.css
		├── index.css
		└── main.jsx
```

## Frontend

The frontend is a Vite + React application that serves as the user-facing experience for Vibely. It is the place to build:

- Landing pages and onboarding flows
- Authentication screens
- Social feed and post composer
- Profile pages and account settings
- Messaging, notifications, and discovery views

Current frontend commands are defined in [Frontend/package.json](Frontend/package.json):

- `npm run dev` to start the local development server
- `npm run build` to create a production build
- `npm run preview` to preview the production build locally
- `npm run lint` to run lint checks with Oxlint

## Backend

The backend is currently a minimal Node.js package scaffold and is ready to grow into the API layer for Vibely. Typical responsibilities for this service include:

- Authentication and session handling
- REST or GraphQL endpoints for social data
- Database access and persistence
- File uploads and media processing
- Notification delivery and background jobs
- Moderation, reporting, and abuse prevention

Current backend metadata is defined in [Backend/package.json](Backend/package.json).

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### Start the Frontend

```bash
cd Frontend
npm run dev
```

The app will start in Vite development mode and print the local URL in the terminal.

### Backend Setup

The backend folder currently contains only the package manifest. When the API layer is added, install dependencies and run the backend from the `Backend` folder using its eventual start script.

## Environment Variables

This workspace does not yet define environment variables, but a production-ready Vibely build will typically need values such as:

- Database connection string
- JWT or session secret
- Cloud storage credentials
- Email or notification provider keys
- API base URLs for frontend integration

Add a `.env` file in the relevant service folder when those values are introduced.

## Development Notes

- The frontend currently contains the default Vite starter content and should be replaced with Vibely-specific screens and components.
- The backend is still a scaffold, so the API contract should be defined alongside the frontend data needs.
- Keep shared naming consistent across services to avoid drift between the UI and API layers.

## Suggested Roadmap

1. Build authentication and user onboarding.
2. Add profile creation and editing flows.
3. Implement post creation, feed rendering, and engagement actions.
4. Add messaging, notifications, and discovery features.
5. Introduce moderation tools, reporting, and platform analytics.
6. Connect the backend API to a persistent database and media storage layer.

## Contributing

If you are extending Vibely, keep changes focused and aligned with the product vision. Update this README whenever the setup, scripts, or architecture changes.

## License

No license has been defined yet. Add one before publishing the project publicly.
