export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'man' | 'women' | 'kids';
  marketplace: 'shopee' | 'tokopedia';
  rating: number;
  sold: number;
  discount?: number;
  badge?: 'Best Deal' | 'Top Rated' | 'Best Seller' | 'Recommended';
  shopUrl: string;
  shopName: string;
}

export interface OutfitIdea {
  id: string;
  image: string;
  title: string;
}

export const outfitIdeas: OutfitIdea[] = [
  { id: '1', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop&q=80', title: 'Casual Hijab Style' },
  { id: '2', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop&q=80', title: 'Formal Modest Look' },
  { id: '3', image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=400&h=600&fit=crop&q=80', title: 'Summer Vibes' },
  { id: '4', image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=400&h=600&fit=crop&q=80', title: 'Office Ready' },
  { id: '5', image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=400&h=600&fit=crop&q=80', title: 'Elegant Evening' },
  { id: '6', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop&q=80', title: 'Weekend Casual' },
];

// PRODUK DENGAN LINK KE MARKETPLACE
// Catatan: Untuk produk real, ganti dengan URL produk asli dari Shopee/Tokopedia
export const products: Product[] = [
  // Women's Collection - Koleksi Wanita
  { 
    id: '1', 
    name: 'Gamis Syari Set Khimar Jumbo Premium Busui Friendly', 
    price: 189000, 
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 2847,
    discount: 24,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id/search?keyword=gamis%20syari%20set%20khimar',
    shopName: 'Hijab Alila Official'
  },
  { 
    id: '2', 
    name: 'Tunik Wanita Muslim Polos Premium Bahan Wolfis', 
    price: 85000, 
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.8,
    sold: 5234,
    discount: 29,
    badge: 'Best Deal',
    shopUrl: 'https://www.tokopedia.com/search?q=tunik%20wanita%20muslim%20premium',
    shopName: 'Baju Muslimah Store'
  },
  { 
    id: '3', 
    name: 'Hijab Segi Empat Voal Premium Import Turkey', 
    price: 35000, 
    originalPrice: 50000,
    image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 12456,
    discount: 30,
    badge: 'Top Rated',
    shopUrl: 'https://shopee.co.id/search?keyword=hijab%20segi%20empat%20voal%20premium',
    shopName: 'Hijab Premium Store'
  },
  { 
    id: '4', 
    name: 'Abaya Dubai Premium Bordir Mewah Elegant', 
    price: 425000, 
    originalPrice: 600000,
    image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 1234,
    discount: 29,
    badge: 'Recommended',
    shopUrl: 'https://www.tokopedia.com/search?q=abaya%20dubai%20premium%20bordir',
    shopName: 'Abaya Dubai Official'
  },
  { 
    id: '5', 
    name: 'Kaftan Wanita Modern Kombinasi Batik', 
    price: 165000, 
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 3456,
    discount: 25,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id/search?keyword=kaftan%20wanita%20modern',
    shopName: 'Kaftan Collection'
  },
  { 
    id: '6', 
    name: 'Dress Muslim Casual Daily Wear Bahan Rayon', 
    price: 125000, 
    originalPrice: 175000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 6789,
    discount: 29,
    badge: 'Best Deal',
    shopUrl: 'https://www.tokopedia.com/search?q=dress%20muslim%20casual%20daily',
    shopName: 'Dress Muslim Shop'
  },
  { 
    id: '7', 
    name: 'Outer Cardigan Rajut Panjang Premium Hangat', 
    price: 95000, 
    originalPrice: 135000,
    image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 4567,
    discount: 30,
    badge: 'Recommended',
    shopUrl: 'https://shopee.co.id/search?keyword=outer%20cardigan%20rajut%20panjang',
    shopName: 'Outer Fashion'
  },
  { 
    id: '8', 
    name: 'Rok Plisket Syari Panjang Elegant All Size', 
    price: 89000, 
    originalPrice: 125000,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 8901,
    discount: 29,
    badge: 'Best Seller',
    shopUrl: 'https://www.tokopedia.com/search?q=rok%20plisket%20syari%20panjang',
    shopName: 'Rok Syari Collection'
  },
  { 
    id: '9', 
    name: 'Pashmina Instan Ceruti Premium Tidak Menerawang', 
    price: 28000, 
    originalPrice: 40000,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 15678,
    discount: 30,
    badge: 'Best Deal',
    shopUrl: 'https://shopee.co.id/search?keyword=pashmina%20instan%20ceruti%20premium',
    shopName: 'Pashmina Store'
  },
  { 
    id: '10', 
    name: 'Mukena Katun Jepang Eksklusif Bordir Cantik', 
    price: 185000, 
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 3456,
    discount: 26,
    badge: 'Top Rated',
    shopUrl: 'https://www.tokopedia.com/search?q=mukena%20katun%20jepang%20eksklusif',
    shopName: 'Mukena Premium'
  },
  { 
    id: '11', 
    name: 'Khimar Syari Jumbo Pet Antem Bahan Diamond', 
    price: 75000, 
    originalPrice: 105000,
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 7890,
    discount: 29,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id/search?keyword=khimar%20syari%20jumbo%20pet',
    shopName: 'Khimar Collection'
  },
  { 
    id: '12', 
    name: 'Blouse Tunik Kombinasi Motif Batik Modern', 
    price: 115000, 
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=700&fit=crop&q=80',
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 4567,
    discount: 28,
    badge: 'Recommended',
    shopUrl: 'https://www.tokopedia.com/search?q=blouse%20tunik%20kombinasi%20motif',
    shopName: 'Tunik Fashion'
  },
  
  // Men's Collection - Koleksi Pria
  { 
    id: '13', 
    name: 'Baju Koko Lengan Panjang Premium Bordir Eksklusif', 
    price: 145000, 
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80',
    category: 'man',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 5678,
    discount: 28,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id/search?keyword=baju%20koko%20lengan%20panjang%20premium',
    shopName: 'Koko Fashion'
  },
  { 
    id: '14', 
    name: 'Gamis Pria Jubah Arab Saudi Import Premium', 
    price: 285000, 
    originalPrice: 400000,
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80',
    category: 'man',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 2345,
    discount: 29,
    badge: 'Top Rated',
    shopUrl: 'https://www.tokopedia.com/search?q=gamis%20pria%20jubah%20arab%20saudi',
    shopName: 'Jubah Arab Official'
  },
  { 
    id: '15', 
    name: 'Sarung Premium Tenun Songket Palembang', 
    price: 125000, 
    originalPrice: 175000,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80',
    category: 'man',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 3456,
    discount: 29,
    badge: 'Recommended',
    shopUrl: 'https://shopee.co.id/search?keyword=sarung%20premium%20tenun%20songket',
    shopName: 'Sarung Nusantara'
  },
  { 
    id: '16', 
    name: 'Celana Sirwal Panjang Katun Combed Premium', 
    price: 85000, 
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80',
    category: 'man',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 6789,
    discount: 29,
    badge: 'Best Deal',
    shopUrl: 'https://www.tokopedia.com/search?q=celana%20sirwal%20panjang%20katun',
    shopName: 'Sirwal Collection'
  },
  { 
    id: '17', 
    name: 'Peci Songkok Hitam Premium Beludru Halus', 
    price: 55000, 
    originalPrice: 80000,
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80',
    category: 'man',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 8901,
    discount: 31,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id/search?keyword=peci%20songkok%20hitam%20premium',
    shopName: 'Peci Nusantara'
  },
  { 
    id: '18', 
    name: 'Kemeja Koko Bordir Eksklusif Bahan Katun', 
    price: 195000, 
    originalPrice: 275000,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80',
    category: 'man',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 2345,
    discount: 29,
    badge: 'Top Rated',
    shopUrl: 'https://www.tokopedia.com/search?q=kemeja%20koko%20bordir%20eksklusif',
    shopName: 'Koko Bordir Official'
  },
  
  // Kids Collection - Koleksi Anak
  { 
    id: '19', 
    name: 'Gamis Anak Set Jilbab Cantik Bahan Adem', 
    price: 95000, 
    originalPrice: 135000,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=700&fit=crop&q=80',
    category: 'kids',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 4567,
    discount: 30,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id/search?keyword=gamis%20anak%20set%20jilbab',
    shopName: 'Kids Muslim Fashion'
  },
  { 
    id: '20', 
    name: 'Baju Koko Anak Laki-laki Premium Bordir', 
    price: 85000, 
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80',
    category: 'kids',
    marketplace: 'tokopedia',
    rating: 4.8,
    sold: 5678,
    discount: 29,
    badge: 'Recommended',
    shopUrl: 'https://www.tokopedia.com/search?q=baju%20koko%20anak%20laki%20premium',
    shopName: 'Koko Kids Store'
  },
  { 
    id: '21', 
    name: 'Dress Anak Perempuan Muslim Lucu Motif', 
    price: 75000, 
    originalPrice: 105000,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=700&fit=crop&q=80',
    category: 'kids',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 6789,
    discount: 29,
    badge: 'Best Deal',
    shopUrl: 'https://shopee.co.id/search?keyword=dress%20anak%20perempuan%20muslim',
    shopName: 'Dress Kids Collection'
  },
  { 
    id: '22', 
    name: 'Hijab Anak Instan Lucu Motif Karakter', 
    price: 28000, 
    originalPrice: 40000,
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&h=700&fit=crop&q=80',
    category: 'kids',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 9012,
    discount: 30,
    badge: 'Top Rated',
    shopUrl: 'https://www.tokopedia.com/search?q=hijab%20anak%20instan%20lucu',
    shopName: 'Hijab Kids Store'
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};
