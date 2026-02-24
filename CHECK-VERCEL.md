# Cara Cek Vercel Deployment

## Opsi 1: Via Dashboard (Paling Mudah)

1. Buka https://vercel.com/dashboard
2. Login dengan akun kamu
3. Klik project **App-Malabis**
4. Lihat status deployment:
   - ✅ **Ready** = Berhasil
   - 🔄 **Building** = Sedang proses
   - ❌ **Error** = Gagal (klik untuk lihat log)

## Opsi 2: Via CLI

Install Vercel CLI:
```bash
npm install -g vercel
```

Login:
```bash
vercel login
```

Cek status:
```bash
vercel ls
```

Deploy manual:
```bash
vercel --prod
```

## Opsi 3: Cek URL Langsung

Buka URL production kamu:
- Format: `https://app-malabis.vercel.app`
- Atau: `https://your-project-name.vercel.app`

## Troubleshooting Deployment Error

### Error: Build Failed
**Solusi:**
1. Pastikan `npm run build` berhasil di local
2. Cek environment variables di Vercel
3. Lihat build logs untuk error spesifik

### Error: Missing Environment Variables
**Solusi:**
1. Buka Vercel Dashboard → Project Settings
2. Klik **Environment Variables**
3. Tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL`

### Error: Module Not Found
**Solusi:**
1. Hapus `node_modules` dan `package-lock.json`
2. Run `npm install`
3. Commit dan push ulang

## Redeploy Manual

Jika deployment gagal, redeploy manual:

1. Via Dashboard:
   - Buka project di Vercel
   - Klik deployment yang error
   - Klik tombol **"Redeploy"**

2. Via Git:
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push origin main
   ```

3. Via CLI:
   ```bash
   vercel --prod
   ```

## Cek Logs Real-time

Via CLI:
```bash
vercel logs [deployment-url]
```

Via Dashboard:
- Klik deployment
- Tab **"Build Logs"** untuk build logs
- Tab **"Function Logs"** untuk runtime logs

## URL Production

Setelah deploy berhasil, akses di:
- **Production URL**: https://app-malabis.vercel.app
- **Preview URL**: https://app-malabis-xxx.vercel.app (untuk setiap commit)

## Tips

1. **Auto Deploy**: Setiap push ke `main` branch akan auto deploy
2. **Preview Deploy**: Push ke branch lain akan buat preview deployment
3. **Environment Variables**: Jangan lupa set di Vercel Settings
4. **Custom Domain**: Bisa tambahkan domain custom di Project Settings → Domains
