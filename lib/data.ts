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

export const products: Product[] = [
  // Women's Collection - Koleksi Wanita
  { 
    id: '1', 
    name: 'Tunik Premium Cotton Wanita', 
    price: 285000, 
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 1250,
    discount: 19,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Hijab Fashion Store'
  },
  { 
    id: '2', 
    name: 'Gamis Syari Elegant Set Khimar', 
    price: 450000, 
    originalPrice: 550000,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 2100,
    discount: 18,
    badge: 'Top Rated',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Gamis Syari Official'
  },
  { 
    id: '5', 
    name: 'Hijab Segi Empat Premium Voal', 
    price: 65000, 
    originalPrice: 85000,
    image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'shopee',
    rating: 4.7,
    sold: 5600,
    discount: 24,
    badge: 'Best Deal',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Hijab Collection'
  },
  { 
    id: '7', 
    name: 'Kaftan Modern Bordir Mewah', 
    price: 320000, 
    originalPrice: 420000,
    image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.8,
    sold: 890,
    discount: 24,
    badge: 'Recommended',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Kaftan Boutique'
  },
  { 
    id: '9', 
    name: 'Abaya Dubai Premium Import', 
    price: 550000, 
    originalPrice: 750000,
    image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 1450,
    discount: 27,
    badge: 'Top Rated',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Dubai Fashion ID'
  },
  { 
    id: '10', 
    name: 'Dress Muslim Casual Daily', 
    price: 245000, 
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.6,
    sold: 3200,
    discount: 18,
    badge: 'Best Seller',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Muslim Wear Store'
  },
  { 
    id: '11', 
    name: 'Blouse Tunik Kombinasi Motif', 
    price: 195000, 
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'shopee',
    rating: 4.7,
    sold: 1890,
    discount: 22,
    badge: 'Recommended',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Tunik Fashion'
  },
  { 
    id: '12', 
    name: 'Gamis Set Khimar Jumbo Syari', 
    price: 485000, 
    originalPrice: 600000,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 1670,
    discount: 19,
    badge: 'Top Rated',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Syari Collection'
  },
  { 
    id: '13', 
    name: 'Outer Cardigan Panjang Rajut', 
    price: 165000, 
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'shopee',
    rating: 4.6,
    sold: 2340,
    discount: 25,
    badge: 'Best Deal',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Outer Collection'
  },
  { 
    id: '14', 
    name: 'Rok Plisket Syari Panjang', 
    price: 145000, 
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 4100,
    discount: 19,
    badge: 'Best Seller',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Rok Syari Shop'
  },
  { 
    id: '15', 
    name: 'Pashmina Instan Ceruti Premium', 
    price: 55000, 
    originalPrice: 75000,
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 8900,
    discount: 27,
    badge: 'Best Deal',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Pashmina Store'
  },
  { 
    id: '16', 
    name: 'Mukena Katun Jepang Eksklusif', 
    price: 225000, 
    originalPrice: 280000,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=700&fit=crop&q=80', 
    category: 'women',
    marketplace: 'tokopedia',
    rating: 4.9,
    sold: 3450,
    discount: 20,
    badge: 'Top Rated',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Mukena Premium'
  },
  
  // Men's Collection - Koleksi Pria
  { 
    id: '3', 
    name: 'Kemeja Koko Lengan Panjang Premium', 
    price: 195000, 
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', 
    category: 'man',
    marketplace: 'shopee',
    rating: 4.7,
    sold: 2890,
    discount: 22,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Koko Fashion'
  },
  { 
    id: '6', 
    name: 'Sarung Premium Tenun Songket', 
    price: 175000, 
    originalPrice: 230000,
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80', 
    category: 'man',
    marketplace: 'tokopedia',
    rating: 4.8,
    sold: 1560,
    discount: 24,
    badge: 'Recommended',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Sarung Nusantara'
  },
  { 
    id: '17', 
    name: 'Baju Koko Bordir Eksklusif', 
    price: 265000, 
    originalPrice: 340000,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80', 
    category: 'man',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 1230,
    discount: 22,
    badge: 'Top Rated',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Koko Bordir Official'
  },
  { 
    id: '18', 
    name: 'Gamis Pria Jubah Arab Saudi', 
    price: 385000, 
    originalPrice: 500000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', 
    category: 'man',
    marketplace: 'tokopedia',
    rating: 4.8,
    sold: 890,
    discount: 23,
    badge: 'Recommended',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Jubah Arab Store'
  },
  { 
    id: '19', 
    name: 'Celana Sirwal Panjang Katun', 
    price: 125000, 
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80', 
    category: 'man',
    marketplace: 'shopee',
    rating: 4.6,
    sold: 3450,
    discount: 22,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Sirwal Collection'
  },
  { 
    id: '20', 
    name: 'Peci Songkok Hitam Premium', 
    price: 85000, 
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80', 
    category: 'man',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 5670,
    discount: 23,
    badge: 'Best Deal',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Peci Nusantara'
  },
  
  // Kids Collection - Koleksi Anak
  { 
    id: '4', 
    name: 'Dress Anak Perempuan Muslim Lucu', 
    price: 125000, 
    originalPrice: 160000,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=700&fit=crop&q=80', 
    category: 'kids',
    marketplace: 'shopee',
    rating: 4.8,
    sold: 4560,
    discount: 22,
    badge: 'Best Seller',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Kids Muslim Fashion'
  },
  { 
    id: '8', 
    name: 'Baju Koko Anak Laki-laki Premium', 
    price: 145000, 
    originalPrice: 190000,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', 
    category: 'kids',
    marketplace: 'tokopedia',
    rating: 4.7,
    sold: 3890,
    discount: 24,
    badge: 'Recommended',
    shopUrl: 'https://tokopedia.com',
    shopName: 'Koko Kids Store'
  },
  { 
    id: '23', 
    name: 'Gamis Anak Set Jilbab Cantik', 
    price: 165000, 
    originalPrice: 210000,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=700&fit=crop&q=80', 
    category: 'kids',
    marketplace: 'shopee',
    rating: 4.9,
    sold: 2340,
    discount: 21,
    badge: 'Top Rated',
    shopUrl: 'https://shopee.co.id',
    shopName: 'Gamis Kids Official'
  },
  { 
    id: '27', 
    name: 'Hijab Anak Instan Lucu', 
    price: 45000, 
    originalPrice: 60000,
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&h=700&fit=crop&q=80', 
    category: 'kids',
    marketplace: 'tokopedia',
    rating: 4.8,
    sold: 6780,
    discount: 25,
    badge: 'Best Deal',
    shopUrl: 'https://tokopedia.com',
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
