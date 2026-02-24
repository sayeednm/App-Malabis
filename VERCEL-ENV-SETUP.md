# Setup Environment Variables di Vercel

## Langkah-langkah:

### 1. Buka Vercel Dashboard
- Kunjungi: https://vercel.com/dashboard
- Pilih project **App-Malabis**

### 2. Buka Settings
- Klik tab **Settings**
- Pilih **Environment Variables** di sidebar

### 3. Tambahkan Variables

Tambahkan 3 environment variables berikut:

#### Variable 1: NEXT_PUBLIC_SUPABASE_URL
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://your-project-id.supabase.co` (dari Supabase Dashboard)
- **Environment**: Production, Preview, Development (centang semua)

#### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGc...` (anon key dari Supabase Dashboard)
- **Environment**: Production, Preview, Development (centang semua)

#### Variable 3: NEXT_PUBLIC_APP_URL
- **Key**: `NEXT_PUBLIC_APP_URL`
- **Value**: `https://app-malabis.vercel.app` (URL production kamu)
- **Environment**: Production, Preview, Development (centang semua)

### 4. Cara Mendapatkan Supabase Credentials

1. Buka https://supabase.com/dashboard
2. Pilih project kamu
3. Klik **Settings** (⚙️)
4. Klik **API**
5. Copy:
   - **Project URL** → untuk `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → untuk `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 5. Redeploy Setelah Menambah Variables

Setelah menambahkan environment variables:

1. Kembali ke tab **Deployments**
2. Klik deployment terbaru
3. Klik tombol **"Redeploy"**
4. Tunggu build selesai

## Verifikasi

Setelah deployment selesai, test fitur:

1. ✅ Buka URL production
2. ✅ Register user baru
3. ✅ Login
4. ✅ Buka Settings → coba toggle notifikasi
5. ✅ Tambah payment method
6. ✅ Checkout dengan payment method

Jika semua berfungsi, berarti Supabase sudah terhubung dengan baik!

## Troubleshooting

### Error: "Supabase not configured"
**Solusi**: Environment variables belum di-set atau salah. Cek kembali di Vercel Settings.

### Error: "Failed to fetch"
**Solusi**: 
1. Pastikan Supabase project aktif
2. Cek RLS policies di Supabase
3. Jalankan schema.sql di Supabase SQL Editor

### Deployment Failed
**Solusi**:
1. Cek build logs di Vercel
2. Pastikan `npm run build` berhasil di local
3. Redeploy manual dari Vercel dashboard

## Tips

- Environment variables hanya berlaku setelah redeploy
- Gunakan Preview deployments untuk testing sebelum production
- Jangan commit `.env.local` ke Git (sudah di .gitignore)
