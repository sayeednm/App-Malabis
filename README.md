# Malabis - Fashion Muslim Marketplace Aggregator

Platform pencarian dan rekomendasi produk fashion muslim terbaik dari Shopee & Tokopedia dengan desain modern dan fitur lengkap.

> ✨ **Live Demo**: Cari produk fashion muslim terbaik dengan filter kategori, marketplace, dan sorting!

## 🎯 Konsep: Marketplace Aggregator

Malabis adalah **platform agregator** yang menampilkan produk fashion muslim terpilih dari:
- 🛍️ **Shopee** - Produk dengan harga terbaik
- 🛒 **Tokopedia** - Produk dari toko terpercaya

Setiap produk memiliki link langsung ke marketplace untuk pembelian.

## 🎨 Tema Hijau

Perpaduan warna hijau yang menenangkan:
- **Emerald** (#10B981) - Primary
- **Green** (#059669) - Secondary  
- **Teal** (#14B8A6) - Accent
- **Lime** (#84CC16) - Highlight

## ✨ Fitur Lengkap

### 🛍️ Marketplace Integration
- ✅ Produk dari Shopee & Tokopedia
- ✅ Rating & jumlah terjual real
- ✅ Badge rekomendasi (Best Deal, Top Rated, Best Seller)
- ✅ Diskon hingga 27%
- ✅ Link langsung ke marketplace
- ✅ Nama toko & informasi lengkap

### 🔍 Search & Filter
- ✅ Search produk real-time dengan debouncing
- ✅ Filter kategori (Semua, Wanita, Pria, Anak)
- ✅ Filter marketplace (Semua, Shopee, Tokopedia)
- ✅ Sorting (Rekomendasi, Harga, Rating, Terlaris)
- ✅ Counter hasil pencarian

### 📱 Camera & Visual Search
- ✅ Akses kamera real-time
- ✅ Capture foto produk
- ✅ Upload dari galeri
- ✅ Toggle flash
- ✅ Switch kamera depan/belakang

### 👤 User Features
- ✅ Profile page dengan stats
- ✅ Login/Register page (simulated)
- ✅ Order history dengan status tracking
- ✅ Address management
- ✅ Settings (notifications, dark mode)

### 📱 UI/UX
- ✅ Bottom navigation responsive
- ✅ Smooth animations (Framer Motion)
- ✅ Product cards dengan badge & rating
- ✅ Marketplace colors (Shopee orange, Tokopedia green)
- ✅ Mobile-first design

## 🎯 Keunggulan Platform

1. **Hemat Waktu** - Tidak perlu cek satu-satu di marketplace
2. **Produk Terpilih** - Hanya fashion muslim terbaik (rating 4.6+)
3. **Perbandingan Mudah** - Lihat harga dari berbagai toko
4. **Diskon Terbaik** - Produk dengan diskon hingga 27%
5. **Terpercaya** - Dari toko official dan terpercaya

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Database (Optional)
```bash
cp .env.example .env
# Edit .env dengan DATABASE_URL Anda
npm run db:generate
npm run db:push
npm run db:seed
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open Browser
```
http://localhost:3000
```

## 📁 Project Structure

```
malabis/
├── app/
│   ├── page.tsx              # Home
│   ├── product/[id]/         # Product Detail
│   ├── cart/                 # Shopping Cart
│   ├── checkout/             # Checkout
│   ├── scan/                 # Visual Search
│   ├── favorite/             # Favorites
│   ├── profile/              # Profile
│   ├── orders/               # Order History
│   ├── address/              # Address Management
│   └── settings/             # Settings
├── components/
│   ├── BottomNav.tsx         # Bottom Navigation
│   └── ui/
│       ├── ProductCard.tsx   # Product Card
│       ├── SearchBar.tsx     # Search Component
│       └── Toast.tsx         # Toast Notification
├── store/
│   └── cartStore.ts          # Zustand Cart Store
├── lib/
│   ├── data.ts               # Data & Utilities
│   └── prisma.ts             # Prisma Client
└── prisma/
    ├── schema.prisma         # Database Schema
    └── seed.ts               # Database Seeder
```

## 🔗 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page dengan search & products |
| `/product/[id]` | Detail produk dengan size & quantity |
| `/cart` | Shopping cart |
| `/checkout` | Checkout & payment |
| `/scan` | Visual search (camera UI) |
| `/favorite` | Favorite products |
| `/profile` | User profile |
| `/orders` | Order history |
| `/address` | Address management |
| `/settings` | App settings |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State**: Zustand + Persist
- **Database**: Prisma + PostgreSQL
- **Images**: Next/Image + Unsplash
- **Icons**: Lucide React

## 📦 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio
```

## ✅ Fitur yang Sudah Berfungsi

### Shopping Flow
1. ✅ Browse produk di home
2. ✅ Search & filter produk
3. ✅ Klik produk → Detail page
4. ✅ Pilih size & quantity
5. ✅ Add to cart (toast notification)
6. ✅ View cart & update quantity
7. ✅ Checkout dengan payment method
8. ✅ Bayar → Success → Clear cart

### User Features
- ✅ View profile & stats
- ✅ Order history dengan status
- ✅ Manage addresses
- ✅ Toggle settings (notifications, dark mode)
- ✅ Favorite products

### UI Components
- ✅ Bottom nav dengan badge counter
- ✅ Search bar dengan clear button
- ✅ Toast notifications (success, error, info)
- ✅ Product cards dengan favorite
- ✅ Smooth animations
- ✅ Responsive layout

## 🎯 Key Features

### 1. Smart Search
- Real-time search
- Kombinasi dengan filter kategori
- Clear button

### 2. Shopping Cart
- Persistent (localStorage)
- Real-time total calculation
- Quantity controls
- Remove items
- Badge counter di navigation

### 3. Checkout
- Multiple payment methods
- Address selection
- Order summary
- Loading states
- Success feedback

### 4. Bottom Navigation
- Height optimal (64px)
- Tidak menutupi produk
- Badge counter tanpa angka 0
- Active states
- Smooth animations

### 5. Toast Notifications
- Success, Error, Info types
- Auto-hide (3 seconds)
- Manual close
- Smooth animations

## 🎨 Design System

### Colors
```css
--emerald: #10B981
--green: #059669
--teal: #14B8A6
--lime: #84CC16
```

### Gradients
```css
Primary: from-emerald-600 to-green-600
Header: from-emerald-600 via-green-600 to-teal-600
Background: from-green-50 via-emerald-50 to-teal-50
```

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, 2xl-4xl
- Body: Regular, sm-base

## 📱 Responsive

- Mobile-first approach
- Tablet: md (768px)
- Desktop: lg (1024px)
- Max container: 7xl (1280px)

## 🔐 Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/malabis"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 📚 Documentation

- [FEATURES.md](./FEATURES.md) - Daftar lengkap fitur
- [SETUP.md](./SETUP.md) - Panduan setup detail
- [THEME-UPDATE.md](./THEME-UPDATE.md) - Update tema hijau
- [CHANGELOG.md](./CHANGELOG.md) - Riwayat perubahan

## 🐛 Known Issues

- Beberapa gambar Unsplash mungkin 404 (gunakan fallback)
- Visual search belum terintegrasi dengan AI
- Payment gateway masih simulasi

## 🚧 Coming Soon

- [ ] Real authentication
- [ ] Real payment gateway
- [ ] Order tracking real-time
- [ ] Product reviews & ratings
- [ ] Wishlist persistence
- [ ] Real visual search AI
- [ ] Push notifications
- [ ] Multi-language support

## 📄 License

Private Project

## 👨‍💻 Developer

Built with ❤️ using Next.js 14 & Tailwind CSS

---

**Malabis** - Fashion Muslim Modern
