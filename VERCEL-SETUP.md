# Vercel Deployment Setup

## Environment Variables

Tambahkan environment variable berikut di Vercel Dashboard:

### Required
```
DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
```

Note: Database URL ini hanya untuk build process. Aplikasi tidak menggunakan database di production karena semua data berasal dari `lib/data.ts`.

## Build Settings

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Deploy

Setelah setup environment variable, deploy akan berjalan otomatis setiap kali ada push ke branch `main`.
