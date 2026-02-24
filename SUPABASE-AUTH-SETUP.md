# Setup Supabase Authentication - Disable Email Confirmation

## Langkah 1: Buka Supabase Dashboard

1. Kunjungi: https://supabase.com/dashboard
2. Login dengan akun kamu
3. Pilih project **malabis-ecommerce** (atau nama project kamu)

## Langkah 2: Disable Email Confirmation

1. Di sidebar kiri, klik icon **🔐 Authentication**
2. Klik **Settings** (atau **Providers**)
3. Scroll ke bagian **"Auth Providers"** atau **"Email"**
4. Cari opsi **"Enable email confirmations"** atau **"Confirm email"**
5. **UNCHECK** atau **DISABLE** opsi tersebut
6. Klik **Save** atau **Update**

## Langkah 3: Test Registration & Login

Setelah disable email confirmation:

### Test Register:
1. Buka aplikasi → `/login`
2. Klik tab **"Daftar"**
3. Isi:
   - Nama: Test User
   - Email: test@example.com
   - Password: password123
4. Klik **"Daftar"**
5. Seharusnya langsung login dan redirect ke home

### Test Login:
1. Logout dari aplikasi
2. Kembali ke `/login`
3. Klik tab **"Masuk"**
4. Isi email & password yang sama
5. Klik **"Masuk"**
6. Seharusnya berhasil login

## Troubleshooting

### Error: "Email not confirmed"
**Solusi**: Email confirmation masih aktif di Supabase. Ulangi Langkah 2.

### Error: "Invalid login credentials"
**Solusi**: 
1. Password minimal 6 karakter
2. Pastikan email & password benar
3. Coba register user baru

### Error: "User already registered"
**Solusi**: Email sudah terdaftar, gunakan email lain atau langsung login.

### Tidak bisa login setelah register
**Solusi**:
1. Cek di Supabase Dashboard → Authentication → Users
2. Lihat apakah user terdaftar
3. Jika ada, coba login dengan email & password tersebut
4. Jika masih gagal, hapus user dan register ulang

## Verifikasi User di Supabase

Untuk cek user yang sudah register:

1. Buka Supabase Dashboard
2. Klik **Authentication** di sidebar
3. Klik **Users**
4. Kamu akan lihat list semua user yang terdaftar
5. Kolom **"Email Confirmed"** harus **"Yes"** atau **"True"**

## Alternative: Manual Confirm Email

Jika tidak ingin disable email confirmation:

1. Buka Supabase Dashboard → Authentication → Users
2. Klik user yang baru register
3. Klik **"Confirm email"** atau edit user
4. Set **"Email Confirmed"** menjadi **True**
5. Save

## Production Settings

Untuk production, sebaiknya:

1. **Enable email confirmation** untuk keamanan
2. Setup **SMTP settings** di Supabase untuk kirim email verifikasi
3. Customize **email templates** di Supabase → Authentication → Email Templates

Tapi untuk development/testing, disable email confirmation lebih mudah.
