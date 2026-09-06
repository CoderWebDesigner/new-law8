# Law8 — Legal Practice Management System (v2)

A modern legal practice management platform built for law firms to manage cases, clients, billing, and internal operations from a single dashboard. This is the rebuilt/modernized version of the original Law8 platform, migrated to Angular 18 with a fully revamped UI.

## Key Features

- **Case & Matter Management** — track legal matters from intake to resolution
- **Task Management** — assign and follow up on team tasks tied to matters
- **Time Tracking & Billing** — timesheet logging feeding into client billing
- **User & Role Management** — firm staff accounts with role-based access
- **Dynamic Forms** — data-entry forms built with declarative JSON schemas instead of hand-coded templates, so new fields ship without touching component code
- **Global Search** — cross-module search across matters, users, and records
- **Multi-language Support** — full Arabic/English localization
- **Authentication** — JWT-based auth with route guards and HTTP interceptors

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 18 (standalone architecture) |
| UI Kit | PrimeNG (v18 theming) |
| Styling | Tailwind CSS |
| Forms | ngx-formly + ngx-formly PrimeNG adapter |
| Auth | JWT (jwt-decode) |
| i18n | ngx-translate (modular translation files per feature) |
| UX utilities | ngx-toastr, ngx-spinner |

## Architecture Highlights

```
src/app/
├── @core/          # auth, interceptors, API services, models, shared classes
├── @shared/        # shared components, directives, pipes, reusable modules
├── layout/         # app shell (topbar, sidebar navigation, layout services)
└── pages/          # feature modules (matters, billing, timesheet, users...)
```

Translation files are split per feature (`auth/`, `topbar/`, `common/`, etc.) rather than one large JSON, keeping i18n maintainable as the app grows.

## Getting Started

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/`.
