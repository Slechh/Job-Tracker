# Job Tracker

Job Tracker is a web application for organizing and tracking job applications throughout the hiring process. It allows you to manage vacancies, monitor application statuses, and keep all related information in one place.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- React Hook Form
- Recharts
- Sonner

## Features

- Create, edit, and delete job applications
- Search by company, position, and technologies
- Filter applications by status
- Dashboard with application status statistics
- Responsive UI
- Skeleton loading states
- Toast notifications
- Form validation

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL="your_database_url"
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build the application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma migrate dev` | Apply database migrations |
| `npx prisma studio` | Open Prisma Studio |
