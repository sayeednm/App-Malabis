export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'man' | 'women' | 'kids';
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
  { id: '1', name: 'Tunik Premium Cotton', price: 285000, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '2', name: 'Gamis Syari Elegant', price: 450000, image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '5', name: 'Hijab Segi Empat Premium', price: 65000, image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '7', name: 'Kaftan Modern Bordir', price: 320000, image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '9', name: 'Abaya Dubai Mewah', price: 550000, image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '10', name: 'Dress Muslim Casual', price: 245000, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '11', name: 'Blouse Tunik Kombinasi', price: 195000, image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '12', name: 'Gamis Set Khimar', price: 485000, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '13', name: 'Outer Cardigan Panjang', price: 165000, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '14', name: 'Rok Plisket Syari', price: 145000, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '15', name: 'Pashmina Instan Ceruti', price: 55000, image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '16', name: 'Mukena Katun Jepang', price: 225000, image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '29', name: 'Gamis Polos Elegant', price: 295000, image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '30', name: 'Tunik Set Celana', price: 335000, image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '31', name: 'Khimar Syari Jumbo', price: 125000, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=700&fit=crop&q=80', category: 'women' },
  { id: '32', name: 'Abaya Umbrella Cut', price: 475000, image: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&h=700&fit=crop&q=80', category: 'women' },
  
  // Men's Collection - Koleksi Pria
  { id: '3', name: 'Kemeja Koko Lengan Panjang', price: 195000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '6', name: 'Sarung Premium Tenun', price: 175000, image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '17', name: 'Baju Koko Bordir Eksklusif', price: 265000, image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '18', name: 'Gamis Pria Jubah Arab', price: 385000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '19', name: 'Celana Sirwal Panjang', price: 125000, image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '20', name: 'Peci Songkok Hitam', price: 85000, image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '21', name: 'Kemeja Koko Kombinasi', price: 215000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '22', name: 'Jaket Parka Muslim', price: 345000, image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '33', name: 'Koko Lengan Pendek', price: 165000, image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=700&fit=crop&q=80', category: 'man' },
  { id: '34', name: 'Gamis Pakistan Style', price: 425000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'man' },
  
  // Kids Collection - Koleksi Anak
  { id: '4', name: 'Dress Anak Perempuan Lucu', price: 125000, image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '8', name: 'Baju Koko Anak Laki-laki', price: 145000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '23', name: 'Gamis Anak Set Jilbab', price: 165000, image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '24', name: 'Kemeja Koko Anak Motif', price: 95000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '25', name: 'Rok Anak Syari Cantik', price: 85000, image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '26', name: 'Celana Sirwal Anak', price: 75000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '27', name: 'Hijab Anak Instan', price: 45000, image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&h=700&fit=crop&q=80', category: 'kids' },
  { id: '28', name: 'Setelan Koko Anak Lengkap', price: 185000, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=700&fit=crop&q=80', category: 'kids' },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};
