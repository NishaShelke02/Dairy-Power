import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Award, Building2, Package, ShieldCheck, Snowflake, Thermometer } from 'lucide-react';
import { categoryData } from '../../data/productCategories';
import type { Product } from '../../data/productCategories';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const categorySpecs: Record<string, { storage: string; shelfLife: string; ingredients: string; handling: string }> = {
  milk: {
    storage: 'Below 4°C',
    shelfLife: '3-5 days',
    ingredients: 'Pasteurized milk',
    handling: 'Keep refrigerated and consume before use-by date.',
  },
  dahi: {
    storage: 'Below 4°C',
    shelfLife: '7-15 days',
    ingredients: 'Pasteurized milk and active lactic culture',
    handling: 'Keep refrigerated. Use a clean spoon after opening.',
  },
  ghee: {
    storage: '20-30°C',
    shelfLife: '6-12 months',
    ingredients: 'Milk fat',
    handling: 'Store in a cool, dry place away from direct sunlight.',
  },
  'fresh-dairy': {
    storage: '2-4°C',
    shelfLife: 'Product-specific fresh shelf life',
    ingredients: 'Milk-based fresh dairy ingredients',
    handling: 'Keep refrigerated and follow pack instructions.',
  },
  beverages: {
    storage: '4-8°C',
    shelfLife: 'Product-specific chilled shelf life',
    ingredients: 'Milk or beverage base with approved ingredients',
    handling: 'Serve chilled. Shake well where applicable.',
  },
  mithai: {
    storage: 'As directed on pack',
    shelfLife: 'See pack for best-before date',
    ingredients: 'Milk-based sweet ingredients',
    handling: 'Keep sealed and store as directed on the pack.',
  },
  'milk-powder': {
    storage: '8-25°C',
    shelfLife: '24 months',
    ingredients: 'Milk solids',
    handling: 'Store sealed in a cool, dry place. Protect from moisture.',
  },
};

type ProductSpecs = {
  storage: string;
  shelfLife: string;
  ingredients: string;
  handling: string;
};

const productOverrides: Record<string, Partial<ProductSpecs>> = {
  paneer: { storage: '2-3°C / -10°C', shelfLife: '21 days chilled / 60 days frozen', ingredients: 'Milk and natural source of citric acid' },
  shrikhand: { storage: '4-8°C', shelfLife: '12-18 days', ingredients: 'Chakka, sugar, and approved flavour ingredients' },
  butter: { storage: 'Below 4°C', shelfLife: '6 months from manufacture', ingredients: 'Milk fat' },
  'malai-lassi': { storage: 'Below 5°C', shelfLife: '21 days', ingredients: 'Cultured milk base with sugar' },
  'mango-lassi': { storage: 'Below 5°C', shelfLife: '21 days', ingredients: 'Cultured milk base with mango flavour' },
  'flavoured-lassi': { storage: 'Below 5°C', shelfLife: '21 days', ingredients: 'Cultured milk base with approved flavours' },
  'flavoured-milk': { storage: 'Below 4°C', shelfLife: '180 days from manufacture', ingredients: 'Milk, sugar, and approved flavours' },
  'masala-chaas': { storage: 'Below 4°C', shelfLife: '6-10 days', ingredients: 'Cow milk, buffalo milk, spices, and culture' },
  chaas: { storage: 'Below 4°C', shelfLife: '3-5 days', ingredients: 'Cow milk and culture' },
  'cold-coffee': { storage: '4-8°C', shelfLife: '5-10 days', ingredients: 'Milk, coffee, sugar, and approved flavours' },
  'coconut-water': { storage: 'Below 4°C', shelfLife: '6-10 days', ingredients: 'Tender coconut water' },
};

function getProductSpecs(product: Product, categoryId: string): ProductSpecs {
  const base = categorySpecs[categoryId] ?? categorySpecs.milk;
  const override = productOverrides[slugify(product.name)] ?? {};

  return {
    storage: override.storage ?? product.storage ?? base.storage,
    shelfLife: override.shelfLife ?? product.shelfLife ?? base.shelfLife,
    ingredients: override.ingredients ?? product.ingredients ?? base.ingredients,
    handling: override.handling ?? base.handling,
  };
}

export function ProductDetail() {
  const { categoryId, productSlug } = useParams<{ categoryId: string; productSlug: string }>();
  const category = categoryData.find((item) => item.id === categoryId);
  const product = category?.products.find((item) => slugify(item.name) === productSlug);

  useEffect(() => {
    const scrollToProductHero = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToProductHero();
    const frame = requestAnimationFrame(scrollToProductHero);
    const timeout = window.setTimeout(scrollToProductHero, 100);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [categoryId, productSlug]);

  if (!category || !product) {
    return <Navigate to="/products" replace />;
  }

  const CategoryIcon = category.icon;
  const specs = getProductSpecs(product, category.id);
  const related = category.products.filter((item) => item.id !== product.id).slice(0, 3);
  const enquiryHref = `/contact?subject=${encodeURIComponent(`Product enquiry: ${product.name}`)}`;
  const b2bHref = `/b2b?requirement=${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-emerald-950/70 to-slate-950/30" />
        </div>
        <div className="relative container-custom">
          <Link to={`/products/${category.id}`} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to {category.name}
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className={`mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${category.color} px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg`}>
                <CategoryIcon className="h-3.5 w-3.5" />
                {category.name}
              </span>
              <h1 className="mb-5 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl font-display">{product.name}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/75">{product.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to={enquiryHref} className="btn-white">
                  Enquire Now <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to={b2bHref} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/35 px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-slate-900">
                  <Building2 className="h-5 w-5" />
                  Bulk Requirement
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="rounded-3xl border border-white/15 bg-white/95 p-8 shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white via-stone-50 to-emerald-50 p-6">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-stone-50/70">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900 font-display">Product Specifications</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Package, label: 'Available Pack Sizes', value: product.sizes.join(', ') },
                  { icon: Snowflake, label: 'Storage', value: specs.storage },
                  { icon: Thermometer, label: 'Shelf Life', value: specs.shelfLife },
                  { icon: ShieldCheck, label: 'Ingredients', value: specs.ingredients },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-stone-100 bg-stone-50 p-5">
                      <Icon className="mb-3 h-6 w-6 text-emerald-600" />
                      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-stone-400">{item.label}</div>
                      <div className="font-semibold leading-relaxed text-slate-900">{item.value}</div>
                    </div>
                  );
                })}
              </div>

              {(product.variants || product.fat || product.snf) && (
                <div className="mt-8 rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">Pack & Composition Details</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants?.map((variant) => (
                      <span key={variant} className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800">{variant}</span>
                    ))}
                    {product.fat && <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">Fat {product.fat}</span>}
                    {product.snf && <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">SNF {product.snf}</span>}
                  </div>
                </div>
              )}
            </div>

            <aside className="rounded-3xl border border-stone-100 bg-slate-950 p-6 text-white shadow-xl lg:sticky lg:top-28">
              <Award className="mb-5 h-10 w-10 text-emerald-300" />
              <h2 className="mb-3 text-2xl font-bold font-display">Need this product?</h2>
              <p className="mb-6 text-sm leading-relaxed text-stone-300">
                Share your retail, distribution, or institutional requirement and the Dairy Power team can respond with availability and supply details.
              </p>
              <div className="space-y-3">
                <Link to={enquiryHref} className="btn-white w-full">
                  Send Product Enquiry
                </Link>
                <Link to={b2bHref} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white hover:text-slate-900">
                  B2B / Bulk Enquiry
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-light py-14 lg:py-16">
          <div className="container-custom">
            <h2 className="mb-8 text-3xl font-bold text-slate-900 font-display">More in {category.name}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.id} to={`/products/${category.id}/${slugify(item.name)}`} className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-xl">
                  <div className="product-media-surface absolute inset-0 overflow-hidden">
                    <img src={item.image} alt="" aria-hidden="true" className="product-media-ambient" />
                    <div className="absolute inset-x-0 top-0 bottom-20 flex items-center justify-center p-5">
                      <img src={item.image} alt={item.name} className="relative z-10 h-full max-w-[75%] object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.035]" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                  </div>
                  <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-5 pt-16 text-white">
                    <h3 className="mb-1 text-lg font-bold text-white">{item.name}</h3>
                    <p className="line-clamp-2 text-sm text-white/80">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
