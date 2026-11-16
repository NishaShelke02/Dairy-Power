import { Coffee, Droplet, Gift, Leaf, Milk, Package, Snowflake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  sizes: string[];
  variants?: string[];
  fat?: string;
  snf?: string;
  tag?: string;
  storage?: string;
  shelfLife?: string;
  ingredients?: string;
}

export interface Category {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  color: string;
  products: Product[];
}

export const categoryData: Category[] = [
  {
    id: 'milk',
    name: 'Milk',
    tagline: 'Farm Fresh Goodness',
    description:
      'Wholesome and pure Dairy Power milk packed with essential nutrients, natural taste, and everyday freshness.',
    heroImage: '/images/lifestyle/milk-kojagiri.jpg',
    icon: Droplet,
    color: 'from-sky-500 to-sky-600',
    products: [
      {
        id: 1,
        name: 'Cow Milk',
        description: 'Pure pasteurized cow milk with balanced nutrition for daily family use',
        image: '/images/products/Cow Milk 1000 ML.png',
        sizes: ['200ml', '500ml', '1000ml'],
        fat: '3.5%',
        snf: '8.5% min',
        tag: 'Bestseller',
      },
      {
        id: 2,
        name: 'Buffalo Milk',
        description: 'Fresh cow and rich buffalo milk pouches for homes, retailers, and daily consumption',
        image: '/images/products/Buffalo Milk 1000 ML.png',
        sizes: ['500ml', '1000ml'],
        variants: ['Cow Milk', 'Buffalo Milk'],
        fat: '4.0% / 6.0%',
        snf: '9.0% min',
      },
      {
        id: 3,
        name: 'Standardised Milk',
        description: 'Standardised milk with consistent quality, clean taste, and dependable daily nutrition',
        image: '/images/products/Saksham Milk 1000 ML.PNG',
        sizes: ['500ml', '1000ml'],
        fat: '4.5%',
        snf: '8.7%',
      },
    ],
  },
  {
    id: 'dahi',
    name: 'Dahi',
    tagline: 'Thick & Creamy',
    description:
      'Traditional dahi made from pure milk with active lactic culture, available in cups, pouches, and buckets.',
    heroImage: '/images/lifestyle/dahi-lifestyle.jpg',
    icon: Snowflake,
    color: 'from-blue-500 to-blue-700',
    products: [
      {
        id: 4,
        name: 'Malai Dahi Pouch',
        description: 'Thick traditional malai dahi pouch made with pasteurized toned milk',
        image: '/images/products/Dahi 200 gm.PNG',
        sizes: ['200g', '400g'],
        variants: ['Pouch'],
        tag: 'Bestseller',
      },
      {
        id: 5,
        name: 'Malai Dahi Cup',
        description: 'Single-serve creamy dahi cups for homes, tiffins, and retail shelves',
        image: '/images/products/dahi 70 gm cup.png',
        sizes: ['70g', '140g', '200g'],
        variants: ['Cup'],
      },
      {
        id: 6,
        name: 'Malai Dahi Bucket',
        description: 'Large dahi buckets for food-service, institutional, and household requirements',
        image: '/images/products/Dahi DTM Bucket 10 KG.PNG',
        sizes: ['5kg', '10kg Low Fat', '10kg DTM Dahi'],
        variants: ['Bucket'],
      },
      {
        id: 7,
        name: 'Premium Dahi',
        description: 'Premium dahi made with toned milk and active culture for a rich curd experience',
        image: '/images/products/Dahi Premium 200 gm.png',
        sizes: ['200g', '1kg'],
        tag: 'Premium',
      },
      {
        id: 8,
        name: 'Skimmed Curd',
        description: 'Low-fat curd option with clean taste and active lactic culture',
        image: '/images/products/Skimmed Light Dahi 10 KG Bucket.PNG',
        sizes: ['500g', '1kg', '10kg Bucket'],
        fat: '0.5%',
      },
      {
        id: 9,
        name: 'Delicious Dahi',
        description: 'Double-toned dahi in everyday pack sizes with a light, smooth texture',
        image: '/images/products/Dahi DTM 180 gm pouch.png',
        sizes: ['200g', '1kg', '10kg Bucket'],
        fat: '1.5%',
      },
    ],
  },
  {
    id: 'ghee',
    name: 'Ghee',
    tagline: 'Pure Richness',
    description:
      'Traditionally crafted Dairy Power pure ghee with rich aroma, authentic taste, and long shelf life.',
    heroImage: '/images/lifestyle/ghee-lifestyle.jpg',
    icon: Leaf,
    color: 'from-amber-500 to-yellow-600',
    products: [
      {
        id: 10,
        name: 'Pure Ghee',
        description: 'Creamy, aromatic pure ghee free of preservatives for traditional cooking and festive use',
        image: '/images/products/Dairy Power Ghee 1000 ML.png',
        sizes: ['100g', '200g', '500g', '1kg', '15kg Tin'],
        tag: 'Premium',
      },
    ],
  },
  {
    id: 'fresh-dairy',
    name: 'Fresh Dairy',
    tagline: 'Paneer, Shrikhand & Butter',
    description:
      'Fresh paneer, traditional shrikhand, and butter crafted for homes, food service, and institutional kitchens.',
    heroImage: '/images/lifestyle/paneer-lifestyle.jpg',
    icon: Package,
    color: 'from-emerald-500 to-emerald-700',
    products: [
      {
        id: 11,
        name: 'Paneer',
        description: 'Fresh paneer made with milk and a natural source of citric acid, with no added preservatives',
        image: '/images/products/Malai Paneer 500 gm.png',
        sizes: ['100g', '200g', '400g', '1kg', '1kg Low Fat'],
        variants: ['Regular', 'Low Fat'],
      },
      {
        id: 12,
        name: 'Shrikhand',
        description: 'Traditional shrikhand in mango and badam pista variants with a smooth festive taste',
        image: '/images/products/Shrikhand Mango 500 gm.PNG',
        sizes: ['100g', '200g', '500g'],
        variants: ['Mango', 'Badam Pista'],
        tag: 'Premium',
      },
      {
        id: 13,
        name: 'Butter',
        description: 'No-added-preservatives butter for cooking, spreading, baking, and food-service use',
        image: '/images/products/COW Butter 20KG.PNG',
        sizes: ['100g', '200g', '500g'],
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tagline: 'Refreshingly Crafted',
    description:
      'Flavoured lassi, flavoured milk, chaas, cold coffee, and coconut water for refreshing anytime consumption.',
    heroImage: '/images/lifestyle/lassi-lifestyle.jpg',
    icon: Milk,
    color: 'from-rose-500 to-orange-500',
    products: [
      {
        id: 14,
        name: 'Malai Lassi',
        description: 'Rich and creamy traditional lassi, just like homemade',
        image: '/images/products/Saksham Lassi 180 ML.png',
        sizes: ['200ml'],
        tag: 'Bestseller',
      },
      {
        id: 15,
        name: 'Mango Lassi',
        description: 'Sweet mango flavored yogurt drink, a refreshing treat',
        image: '/images/products/mango-lassi.png',
        sizes: ['200ml'],
        tag: 'Bestseller',
      },
      {
        id: 16,
        name: 'Flavoured Lassi',
        description: 'Fruit and floral lassi range crafted with active lactic culture',
        image: '/images/products/guava-lassi.png',
        sizes: ['180ml'],
        variants: ['Strawberry', 'Rose', 'Guava Chilli'],
      },
      {
        id: 17,
        name: 'Flavoured Milk',
        description: 'Six flavoured milk options made with approved ingredients and no added preservatives',
        image: '/images/products/FM 180 ML Elaichi.PNG',
        sizes: ['180ml'],
        variants: ['Elaichi', 'Almond', 'Pineapple', 'Strawberry', 'Butterscotch', 'Pista'],
      },
      {
        id: 18,
        name: 'Masala Chaas',
        description: 'Spiced buttermilk made with cow and buffalo milk for a cooling savoury refreshment',
        image: '/images/products/Masala Tak 200 ML pouch.png',
        sizes: ['200ml'],
        variants: ['Pouch', 'Cup'],
      },
      {
        id: 19,
        name: 'Chaas',
        description: 'Classic buttermilk made with cow milk for a light and refreshing drink',
        image: '/images/products/chaas-pouch.png',
        sizes: ['500ml'],
      },
      {
        id: 20,
        name: 'Cold Coffee',
        description: 'Ready-to-drink cold coffee in classic, vanilla, and mocha variants',
        image: '/images/products/cold-coffee-vanilla.png',
        sizes: ['200ml'],
        variants: ['Classic', 'Vanilla', 'Mocha'],
        tag: 'New',
      },
      {
        id: 21,
        name: 'Coconut Water',
        description: 'Tender coconut water for natural hydration',
        image: '/images/products/coconut-water-2.png',
        sizes: ['200ml'],
      },
    ],
  },
  {
    id: 'mithai',
    name: 'Mithai',
    tagline: 'Celebration of Tradition',
    description:
      'Traditional Dairy Power mithai presented in festive retail packs for gifting, celebrations, and sharing with family.',
    heroImage: '/images/hero/mithai-collection-celebration-2.png',
    icon: Gift,
    color: 'from-orange-500 to-amber-600',
    products: [
      {
        id: 25,
        name: 'Motichur Laddoo',
        description: 'Classic motichur laddoo in a festive Dairy Power presentation pack',
        image: '/images/products/mithai-motichur-laddoo.png',
        sizes: ['200g'],
        tag: 'Festive',
      },
      {
        id: 26,
        name: 'Kalakand',
        description: 'Traditional milk-based kalakand with a soft, rich texture',
        image: '/images/products/mithai-kalakand.png',
        sizes: ['200g'],
        tag: 'Traditional',
      },
      {
        id: 27,
        name: 'Kesar Pedha',
        description: 'Saffron-flavoured pedha crafted for festive occasions and gifting',
        image: '/images/products/mithai-kesar-pedha.png',
        sizes: ['100g'],
        tag: 'Festive',
      },
      {
        id: 28,
        name: 'Malai Pedha',
        description: 'Creamy traditional malai pedha in a celebration-ready pack',
        image: '/images/products/mithai-malai-pedha.png',
        sizes: ['100g'],
        tag: 'Traditional',
      },
    ],
  },
  {
    id: 'milk-powder',
    name: 'Milk Powder & Dairy Ingredients',
    tagline: 'Bulk & Food Service',
    description:
      'Skimmed milk powder, whole milk powder, and dairy whitener support for institutional, food service, and B2B requirements.',
    heroImage: '/images/lifestyle/production.jpg',
    icon: Coffee,
    color: 'from-emerald-600 to-teal-700',
    products: [
      {
        id: 22,
        name: 'Skimmed Milk Powder',
        description: 'Milk solids in long shelf-life packs for food service, manufacturing, tea, coffee, and sweets',
        image: '/images/products/Dairy Power SMP 25 KG.PNG',
        sizes: ['1kg', '25kg'],
        variants: ['Standard Grade'],
      },
      {
        id: 23,
        name: 'Whole Milk Powder',
        description: 'Dairy powder product for richer B2B formulations, food service applications, and institutional enquiries',
        image: '/images/products/Dairy Power SMP Pack 1KG.PNG',
        sizes: ['Bulk enquiry'],
        variants: ['B2B Supply'],
      },
      {
        id: 24,
        name: 'Dairy Whitener',
        description: 'Dairy whitener support for tea, coffee, vending, HoReCa, and institutional beverage requirements',
        image: '/images/products/Dairy Power SMP Pack 1KG.PNG',
        sizes: ['Bulk enquiry'],
        variants: ['Food Service'],
      },
    ],
  },
];
