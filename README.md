# Fencing Equipment Check System (FECS)

FECS is a Next.js and TypeScript application for managing equipment check-ins at fencing tournaments. It offers an admin dashboard for tournament setup, equipment management and status tracking as well as a public interface for fencers.

## Requirements

- Node.js 18 or later
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env.local` file and provide the following variables:

```
RESEND_API_KEY=your_api_key
HONO_API_TOKEN=token_used_for_internal_api
INVITE_CODE_SECRET=secret_for_invite_codes
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=project_id
APPWRITE_FUNCTION_API_ENDPOINT=appwrite_function_endpoint
APPWRITE_FUNCTION_PROJECT_ID=function_project_id
APPWRITE_FUNCTION_API_KEY=function_api_key
```

## Development

Start the development server with:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Testing

Run unit tests using:

```bash
npm test
```

## Production build

To create an optimized production build run:

```bash
npm run build
```

## Features

- Equipment submission and material checks
- Tournament and equipment management dashboard
- Status display for check‑in progress
- Email notifications via Resend
