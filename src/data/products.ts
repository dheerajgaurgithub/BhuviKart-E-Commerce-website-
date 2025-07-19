export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  brand: string;
  stock: number;
  discount?: number;
  tags: string[];
  specifications: Record<string, string>;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    description: 'Latest gadgets and electronic devices',
    productCount: 45
  },
  {
    id: 'clothing',
    name: 'Clothing & Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    description: 'Trendy clothing and fashion accessories',
    productCount: 78
  },
  {
    id: 'home',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    description: 'Everything for your home and garden',
    productCount: 56
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    description: 'Sports equipment and fitness gear',
    productCount: 34
  },
  {
    id: 'books',
    name: 'Books & Media',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    description: 'Books, movies, and digital media',
    productCount: 67
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
    description: 'Beauty products and personal care items',
    productCount: 89
  }
];

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones - Premium Quality",
    price: 89.99,
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 324 },
    brand: "AudioTech",
    stock: 25,
    discount: 15,
    tags: ["wireless", "noise-cancelling", "premium"],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Driver Size": "40mm",
      "Weight": "250g"
    },
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Smartphone Protective Case - Shockproof",
    price: 24.99,
    description: "Military-grade protection for your smartphone with reinforced corners and raised edges to protect screen and camera.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: { rate: 4.2, count: 189 },
    brand: "ShieldGuard",
    stock: 150,
    tags: ["protective", "durable", "shockproof"],
    specifications: {
      "Material": "TPU + PC",
      "Drop Protection": "6 feet",
      "Compatibility": "Multiple models",
      "Weight": "45g"
    },
    images: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Premium Cotton T-Shirt - Organic",
    price: 29.99,
    description: "Soft, breathable organic cotton t-shirt perfect for everyday wear. Available in multiple colors and sizes.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: { rate: 4.8, count: 445 },
    brand: "EcoWear",
    stock: 75,
    discount: 20,
    tags: ["organic", "cotton", "eco-friendly"],
    specifications: {
      "Material": "100% Organic Cotton",
      "Fit": "Regular",
      "Care": "Machine washable",
      "Origin": "Sustainably sourced"
    },
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Ceramic Coffee Mug - Handcrafted",
    price: 16.99,
    description: "Beautiful handcrafted ceramic mug perfect for your morning coffee or tea. Microwave and dishwasher safe.",
    category: "home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop",
    rating: { rate: 4.3, count: 156 },
    brand: "ArtisanCraft",
    stock: 40,
    tags: ["handcrafted", "ceramic", "kitchen"],
    specifications: {
      "Material": "High-quality ceramic",
      "Capacity": "350ml",
      "Care": "Dishwasher safe",
      "Design": "Handcrafted"
    },
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Yoga Mat - Premium Non-Slip",
    price: 45.99,
    description: "Professional-grade yoga mat with superior grip and cushioning. Perfect for all types of yoga and exercise.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 278 },
    brand: "ZenFlex",
    stock: 30,
    tags: ["yoga", "fitness", "non-slip"],
    specifications: {
      "Material": "TPE (Eco-friendly)",
      "Thickness": "6mm",
      "Size": "72\" x 24\"",
      "Weight": "1.2kg"
    },
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Bestselling Fiction Novel",
    price: 14.99,
    description: "An captivating story that will keep you turning pages. Winner of multiple literary awards.",
    category: "books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 892 },
    brand: "Classic Publishers",
    stock: 100,
    tags: ["fiction", "bestseller", "award-winning"],
    specifications: {
      "Pages": "352",
      "Language": "English",
      "Format": "Paperback",
      "ISBN": "978-1234567890"
    },
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Luxury Face Cream - Anti-Aging",
    price: 79.99,
    description: "Premium anti-aging face cream with natural ingredients. Reduces fine lines and improves skin texture.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    rating: { rate: 4.4, count: 267 },
    brand: "LuxeBeauty",
    stock: 20,
    discount: 25,
    tags: ["anti-aging", "luxury", "skincare"],
    specifications: {
      "Volume": "50ml",
      "Skin Type": "All skin types",
      "Key Ingredients": "Retinol, Hyaluronic Acid",
      "Usage": "Day & Night"
    },
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Wireless Gaming Mouse - High Precision",
    price: 69.99,
    description: "Professional gaming mouse with customizable RGB lighting, programmable buttons, and ultra-fast response time.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 412 },
    brand: "GameTech",
    stock: 35,
    tags: ["gaming", "wireless", "rgb"],
    specifications: {
      "DPI": "Up to 16,000",
      "Buttons": "8 programmable",
      "Battery": "70 hours",
      "Connectivity": "2.4GHz wireless"
    },
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 9,
    title: "Designer Jeans - Slim Fit",
    price: 89.99,
    description: "Premium designer jeans with perfect fit and comfort. Made from high-quality denim with stretch.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    rating: { rate: 4.3, count: 298 },
    brand: "DenimCraft",
    stock: 45,
    tags: ["designer", "jeans", "slim-fit"],
    specifications: {
      "Material": "98% Cotton, 2% Elastane",
      "Fit": "Slim",
      "Rise": "Mid-rise",
      "Care": "Machine wash"
    },
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
    ]
  },
  {
    id: 10,
    title: "Indoor Plant - Monstera Deliciosa",
    price: 34.99,
    description: "Beautiful Monstera Deliciosa houseplant in decorative pot. Perfect for adding greenery to your home.",
    category: "home",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 156 },
    brand: "GreenThumb",
    stock: 15,
    tags: ["plant", "indoor", "decorative"],
    specifications: {
      "Plant Height": "30-40cm",
      "Pot Size": "15cm diameter",
      "Light": "Bright, indirect",
      "Watering": "Weekly"
    },
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop"
    ]
  }
];