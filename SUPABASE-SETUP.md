# Supabase Setup Guide untuk Malabis E-Commerce

## 1. Buat Project Supabase

1. Kunjungi [https://supabase.com](https://supabase.com)
2. Sign up atau login
3. Klik "New Project"
4. Isi detail project:
   - Name: `malabis-ecommerce`
   - Database Password: (simpan password ini dengan aman)
   - Region: pilih yang terdekat (Singapore untuk Indonesia)
5. Tunggu project selesai dibuat (~2 menit)

## 2. Setup Database Schema

1. Di dashboard Supabase, buka **SQL Editor**
2. Klik "New Query"
3. Copy seluruh isi file `supabase/schema.sql`
4. Paste ke SQL Editor
5. Klik "Run" atau tekan `Ctrl+Enter`
6. Tunggu hingga selesai (akan muncul "Success")

## 3. Seed Data (Optional)

1. Masih di SQL Editor, buat query baru
2. Copy seluruh isi file `supabase/seed.sql`
3. Paste dan Run
4. Data produk sample akan ditambahkan

## 4. Get API Keys

1. Di dashboard Supabase, buka **Settings** → **API**
2. Copy nilai berikut:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: `eyJhbGc...` (key yang panjang)

## 5. Setup Environment Variables

### Local Development

1. Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

2. Ganti nilai dengan API keys dari step 4

### Vercel Deployment

1. Buka project di Vercel Dashboard
2. Go to **Settings** → **Environment Variables**
3. Tambahkan 3 variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://xxxxx.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGc...your-anon-key`
   - `NEXT_PUBLIC_APP_URL` = `https://your-app.vercel.app`
4. Klik "Save"
5. Redeploy project

## 6. Setup Authentication

### Email Authentication (Default)

Sudah aktif secara default, tidak perlu konfigurasi tambahan.

### Google OAuth (Optional)

1. Di dashboard Supabase, buka **Authentication** → **Providers**
2. Enable "Google"
3. Ikuti instruksi untuk setup Google OAuth:
   - Buat project di Google Cloud Console
   - Enable Google+ API
   - Buat OAuth 2.0 credentials
   - Copy Client ID dan Client Secret ke Supabase
4. Tambahkan redirect URL: `https://xxxxx.supabase.co/auth/v1/callback`

## 7. Test Connection

1. Jalankan development server:
```bash
npm run dev
```

2. Buka browser ke `http://localhost:3000`
3. Coba fitur:
   - Register user baru
   - Login
   - Browse products
   - Add to cart
   - Checkout

## 8. Database Tables

Project ini menggunakan tables berikut:

- **profiles**: User profiles (extends auth.users)
- **products**: Katalog produk
- **addresses**: Alamat pengiriman user
- **orders**: Order history
- **order_items**: Detail items per order
- **favorites**: Produk favorit user

## 9. Row Level Security (RLS)

Semua tables sudah dilindungi dengan RLS policies:
- Users hanya bisa akses data mereka sendiri
- Products bisa dilihat semua orang
- Orders dan addresses private per user

## 10. Troubleshooting

### Error: "Invalid API key"
- Pastikan `.env.local` sudah dibuat
- Restart development server setelah menambah env variables

### Error: "relation does not exist"
- Jalankan ulang `schema.sql` di SQL Editor
- Pastikan tidak ada error saat run schema

### Products tidak muncul
- Jalankan `seed.sql` untuk menambah sample data
- Atau tambah products manual via Supabase Table Editor

### Authentication tidak bekerja
- Check apakah email confirmation diaktifkan
- Di **Authentication** → **Settings**, disable "Enable email confirmations" untuk testing

## 11. Next Steps

Setelah setup selesai:

1. ✅ Database schema created
2. ✅ Sample products seeded
3. ✅ Authentication configured
4. ✅ Environment variables set
5. ✅ RLS policies active

Aplikasi siap digunakan! 🎉

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
