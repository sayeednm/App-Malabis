# Setup Guide - Malabis E-Commerce

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm atau yarn

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

Buat file `.env` di root project:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/malabis?schema=public"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Generate Prisma Client & Push Schema

```bash
npm run db:generate
npm run db:push
```

### 4. Seed Database (Optional)

Untuk mengisi database dengan data dummy:

```bash
npm run db:seed
```

### 5. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Jalankan production server
- `npm run lint` - Jalankan linter
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema ke database
- `npm run db:seed` - Seed database dengan data dummy
- `npm run db:studio` - Buka Prisma Studio (GUI database)

## Tech Stack

### Frontend
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animasi dan transisi
- **Lucide React** - Icon library

### State Management
- **Zustand** - Lightweight state management untuk cart
- **Persist middleware** - Menyimpan cart di localStorage

### Database
- **Prisma** - ORM untuk TypeScript
- **PostgreSQL** - Relational database

## Features

### 1. Framer Motion Animations
- Smooth transitions saat hover pada product cards
- Animasi tap pada buttons
- Staggered animations pada checkout items
- Badge animation pada cart counter

### 2. Shopping Cart (Zustand)
- Add to cart dengan feedback visual
- Update quantity (increment/decrement)
- Remove items
- Persistent cart (localStorage)
- Real-time total calculation
- Badge counter di bottom navigation

### 3. Database Schema (Prisma)

**Models:**
- `Product` - Data produk (nama, harga, kategori, stock)
- `User` - Data user/customer
- `Address` - Alamat pengiriman user
- `Order` - Data pesanan
- `OrderItem` - Item dalam pesanan

**Relations:**
- User has many Orders
- User has many Addresses
- Order has many OrderItems
- Product has many OrderItems

## Database Management

### Prisma Studio
Untuk melihat dan mengedit data secara visual:

```bash
npm run db:studio
```

### Migration
Jika mengubah schema:

```bash
npx prisma migrate dev --name your_migration_name
```

## Project Structure

```
malabis/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── cart/page.tsx      # Shopping cart
│   ├── checkout/page.tsx  # Checkout page
│   └── scan/page.tsx      # Visual search
├── components/
│   ├── BottomNav.tsx      # Bottom navigation dengan cart badge
│   └── ui/
│       └── ProductCard.tsx # Product card dengan add to cart
├── store/
│   └── cartStore.ts       # Zustand cart store
├── lib/
│   ├── data.ts            # Dummy data & utilities
│   └── prisma.ts          # Prisma client instance
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Database seeder
└── tailwind.config.ts     # Tailwind configuration
```

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/malabis?schema=public"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Troubleshooting

### Prisma Client Error
Jika ada error "Cannot find module '@prisma/client'":
```bash
npm run db:generate
```

### Database Connection Error
Pastikan PostgreSQL berjalan dan DATABASE_URL benar di file `.env`

### Cart Not Persisting
Clear browser localStorage dan refresh halaman
