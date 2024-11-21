![hero](image.png)

<p align="center">
	<h1 align="center"><b>Create v1</b></h1>
<p align="center">
    An open-source starter kit based on <a href="https://midday.ai">Midday</a>.
    <br />
    <br />
    <a href="https://v1.run"><strong>Website</strong></a> · 
    <a href="https://github.com/midday-ai/v1/issues"><strong>Issues</strong></a> · 
    <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
    <a href="#prerequisites"><strong>Prerequisites</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a>
  </p>
</p>

## Overview

Create v1 is a production-ready SaaS starter kit built with modern technologies. It's structured as a monorepo using Turborepo, focusing on code reusability, type safety, and scalability. The project includes everything from authentication to analytics, making it ideal for building robust SaaS applications.

## Tech Stack

### Core Framework & Build Tools
- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[Turborepo](https://turbo.build)** - Monorepo build system
- **[Biome](https://biomejs.dev)** - Fast linter and formatter
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Frontend
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Shadcn UI](https://ui.shadcn.com/)** - Accessible component system
- **[next-themes](https://next-themes-example.vercel.app/)** - Dark/light mode
- **[nuqs](https://nuqs.47ng.com/)** - Type-safe URL state management

### Backend & Infrastructure
- **[Supabase](https://supabase.com/)** - Auth, Database, Storage
- **[Upstash](https://upstash.com/)** - Redis cache & rate limiting
- **[Trigger.dev](https://trigger.dev/)** - Background job processing
- **[react-safe-action](https://next-safe-action.dev)** - Type-safe server actions

### Developer Experience
- **[i18n](https://next-international.vercel.app/)** - Internationalization
- **[Sentry](https://sentry.io/)** - Error tracking
- **[OpenPanel](https://openpanel.dev/)** - Analytics
- **[Dub](https://dub.sh/)** - Link management

### Communication
- **[React Email](https://react.email/)** - Email templates
- **[Resend](https://resend.com/)** - Email delivery

## Project Structure

```
.
├── apps/                        # Application workspace
│   ├── api/                    # Supabase backend
│   │   ├── migrations/        # Database migrations
│   │   └── seed/             # Seed data
│   ├── app/                   # Main SaaS application
│   │   ├── src/
│   │   ├── public/
│   │   └── .env.example
│   └── web/                   # Marketing website
│
├── packages/                    # Shared packages
│   ├── analytics/             # OpenPanel integration
│   ├── email/                 # Email templates
│   ├── jobs/                  # Background jobs
│   ├── kv/                    # Key-value storage
│   ├── logger/               # Logging utilities
│   ├── supabase/             # Database client & types
│   └── ui/                   # Shared UI components
│
└── tooling/                    # Shared configurations
    └── typescript/            # TypeScript config
```

## Prerequisites

Before you begin, ensure you have accounts and API keys for:

1. **Development Environment**
   - [Bun](https://bun.sh/) - JavaScript runtime & package manager
   - [Docker](https://www.docker.com/) - Container platform

2. **Core Services**
   - [Supabase](https://supabase.com/) - Database & Auth
   - [Upstash](https://upstash.com/) - Redis instance
   - [Resend](https://resend.com/) - Email service

3. **Monitoring & Analytics**
   - [Sentry](https://sentry.io/) - Error tracking
   - [OpenPanel](https://openpanel.dev/) - Analytics
   - [Dub](https://dub.sh/) - Link tracking
   - [Trigger.dev](https://trigger.dev/) - Job processing

## Getting Started

1. **Clone the Repository**
```bash
bunx degit midday-ai/v1 v1
cd v1
```

2. **Install Dependencies**
```bash
bun install
```

3. **Environment Setup**
```bash
# Copy environment files
cp apps/api/.env.example apps/api/.env
cp apps/app/.env.example apps/app/.env
cp apps/web/.env.example apps/web/.env
```

4. **Configure Environment Variables**

Required variables for each app:

`apps/app/.env`:
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=
NEXT_PUBLIC_SENTRY_DSN=
RESEND_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=
```

`apps/api/.env`:
```env
SUPABASE_DB_URL=
GOOGLE_CLIENT_ID=
GOOGLE_SECRET=
```

5. **Development Commands**
```bash
# Start all services
bun dev

# Individual services
bun dev:web    # Marketing site
bun dev:app    # Main application
bun dev:api    # API service
bun dev:email  # Email preview

# Database operations
bun migrate    # Run migrations
bun seed       # Seed database
```

## Development Workflow

1. **Database Changes**
   - Add migrations in `apps/api/migrations`
   - Update types in `packages/supabase/types`
   - Run `bun migrate` to apply changes

2. **Adding Features**
   - Server components go in `apps/app/src/app`
   - Client components use `'use client'` directive
   - Shared UI components go in `packages/ui`

3. **Environment Types**
   - Add new env vars to `apps/app/src/env.mjs`
   - Run validation during development

## Deployment

### Manual Deployment

1. Push your repository to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy each app separately:
   - `apps/web` - Marketing site
   - `apps/app` - Main application
   - `apps/api` - Supabase API

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

## Support

- [GitHub Issues](https://github.com/midday-ai/v1/issues)
- [Documentation](https://v1.run)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Service Use Cases

### Supabase
- **Authentication:** Social login (Google, GitHub), magic links, and role-based access
- **Database:** 
  - User profiles and preferences
  - Team collaboration features
  - Subscription and billing status
- **Storage:** User avatar uploads, document attachments
- **Edge Functions:** Webhook handlers, third-party integrations

### Trigger.dev
- **Scheduled Tasks:**
  - Daily digest emails
  - Subscription renewal reminders
  - Data cleanup and maintenance
- **Event-Driven Jobs:**
  - Welcome sequence after signup
  - Payment processing webhooks
  - Team invitation notifications

### Upstash Redis
- **Caching:**
  - API response caching
  - User session data
  - Frequently accessed settings
- **Rate Limiting:**
  - API endpoint protection
  - Login attempt restrictions
  - File upload limits
- **Feature Flags:**
  - A/B testing
  - Gradual feature rollouts
  - Beta user management

### OpenPanel Analytics
- **User Behavior:**
  - Feature usage tracking
  - Conversion funnel analysis
  - Session recordings
- **Business Metrics:**
  - Subscription analytics
  - Revenue tracking
  - User retention metrics

### Resend & React Email
- **Transactional Emails:**
  - Welcome messages
  - Password reset
  - Team invitations
- **Marketing Communications:**
  - Newsletter templates
  - Product updates
  - Feature announcements

## Database Structure

### Core Tables
1. **users**
   - Basic profile information
   - Authentication details
   - Preferences

2. **teams**
   - Team details
   - Billing information
   - Subscription status

3. **team_members**
   - User-team relationships
   - Role assignments
   - Access permissions

### Feature Tables
1. **projects**
   - Project metadata
   - Team association
   - Collaboration settings

2. **documents**
   - Content storage
   - Version control
   - Access permissions

3. **activities**
   - User actions
   - System events
   - Audit logs

## Common Workflows

### User Onboarding
1. User signs up with social/email
2. Welcome email triggered
3. Profile completion flow
4. Team creation/joining
5. Feature introduction tour

### Team Collaboration
1. Team creation by user
2. Member invitations sent
3. Role assignment
4. Resource sharing setup
5. Activity tracking

### Subscription Management
1. Plan selection
2. Payment processing
3. Feature access update
4. Team limits adjustment
5. Usage tracking

### Content Management
1. Document creation
2. Storage handling
3. Permission setting
4. Version tracking
5. Activity logging