import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.address.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Tunik Premium Cotton',
        description: 'Tunik berbahan cotton premium dengan desain modern dan nyaman',
        price: 285000,
        image: '/product-1.jpg',
        category: 'WOMEN',
        stock: 50,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Gamis Syari Elegant',
        description: 'Gamis syari dengan bahan berkualitas tinggi',
        price: 450000,
        image: '/product-2.jpg',
        category: 'WOMEN',
        stock: 30,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Kemeja Koko Pria',
        description: 'Kemeja koko dengan desain modern untuk pria',
        price: 195000,
        image: '/product-3.jpg',
        category: 'MAN',
        stock: 40,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Dress Anak Lucu',
        description: 'Dress anak dengan motif lucu dan bahan nyaman',
        price: 125000,
        image: '/product-4.jpg',
        category: 'KIDS',
        stock: 60,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Hijab Segi Empat',
        description: 'Hijab segi empat dengan bahan premium',
        price: 65000,
        image: '/product-5.jpg',
        category: 'WOMEN',
        stock: 100,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Sarung Premium',
        description: 'Sarung dengan motif tradisional berkualitas',
        price: 175000,
        image: '/product-6.jpg',
        category: 'MAN',
        stock: 45,
      },
    }),
  ]);

  console.log('✅ Seeded products:', products.length);

  // Create sample user
  const user = await prisma.user.create({
    data: {
      email: 'customer@malabis.com',
      name: 'Ahmad Rizki',
      phone: '081234567890',
    },
  });

  console.log('✅ Created user:', user.email);

  // Create sample address
  const address = await prisma.address.create({
    data: {
      userId: user.id,
      label: 'Home Address',
      street: 'Jl. Merdeka No. 123, Kelurahan Sukamaju',
      city: 'Bandung',
      province: 'Jawa Barat',
      zipCode: '40132',
      isDefault: true,
    },
  });

  console.log('✅ Created address');

  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
