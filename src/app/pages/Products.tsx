import { useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, Award, Leaf, ArrowRight, Package, Search, Building2, ChevronRight, Eye, FileDown } from 'lucide-react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { categoryData } from '../../data/productCategories';
import type { Product } from '../../data/productCategories';

/* ─── Viewport / fade presets ─── */
const vp = { once: true, amount: 0.15 } as const;
const fadeIn = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: vp, transition: { duration: 0.5 } } as const;
const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export function Products() {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const navigate = useNavigate();
  const productBrowserRef = useRef<HTMLDivElement>(null);
  const activeCategoryId = categoryId ?? categoryData[0]?.id ?? '';
  const activeCategory = useMemo(
    () => categoryData.find((category) => category.id === activeCategoryId) ?? categoryData[0],
    [activeCategoryId]
  );

  if (categoryId && !categoryData.some((category) => category.id === categoryId)) {
    return <Navigate to="/products" replace />;
  }

  const ActiveCategoryIcon = activeCategory.icon;
  const categoryTotal = categoryData.length;
  const productTotal = categoryData.reduce((count, category) => count + category.products.length, 0);

  const catalogueProducts = categoryData.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );

  const selectCategory = (id: string) => {
    navigate(`/products/${id}`);

    window.requestAnimationFrame(() => {
      const browser = productBrowserRef.current;
      if (!browser) return;

      const headerOffset = 96;
      const top = browser.getBoundingClientRect().top;
      if (top < headerOffset) {
        window.scrollTo({
          top: window.scrollY + top - headerOffset,
          behavior: 'smooth',
        });
      }
    });
  };

  return (
    <div className="bg-white">
      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/products/all-products.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-900/30" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">Premium Quality</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Our Products</h1>
            <p className="text-xl text-white/70 max-w-xl">
              Fresh dairy products crafted with care, delivered with trust. Explore our full range.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <Package className="w-4 h-4 text-emerald-300" />
                {productTotal} catalogue products
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <Search className="w-4 h-4 text-emerald-300" />
                {categoryTotal} product categories
              </span>
            </div>
            <div className="mt-8">
              <a href="/catalogue/dairy-power-product-catalogue.pdf" download className="btn-white">
                <FileDown className="w-5 h-5" />
                Download Catalogue
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ INTERACTIVE CATEGORY BROWSER ════════════ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <motion.div {...fadeIn} className="mb-10">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Product Categories</span>
            <h2 className="section-title-display mb-5">Explore Our Range</h2>
            <p className="section-subtitle">
              Choose a category to view matching Dairy Power products instantly. The URL updates with your selection, so every category can be opened or shared directly.
            </p>
          </motion.div>

          <div ref={productBrowserRef} className="grid scroll-mt-28 lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">
            <motion.aside
              {...fadeIn}
              className="lg:sticky lg:top-28 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"
            >
              <div className="px-3 py-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
                  <Search className="w-4 h-4 text-emerald-600" />
                  Browse Categories
                </div>
                <p className="text-sm text-stone-500">Tap any category to update the products and URL.</p>
              </div>
              <div className="space-y-2">
                {categoryData.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = cat.id === activeCategory.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => selectCategory(cat.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full text-left rounded-xl p-3 transition-all duration-300 ${
                        isActive
                          ? 'bg-emerald-50 shadow-sm border border-emerald-200'
                          : 'bg-transparent hover:bg-stone-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${cat.color}`}>
                          <Icon className="w-5 h-5" strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-slate-900">{cat.name}</div>
                          <div className="text-xs text-stone-500">{cat.products.length} products</div>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-colors ${isActive ? 'text-emerald-600' : 'text-stone-300'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.aside>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative rounded-2xl overflow-hidden min-h-[260px] mb-6 border border-stone-100 shadow-sm">
                    <img src={activeCategory.heroImage} alt={activeCategory.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
                    <div className="relative p-6 sm:p-8 lg:p-10 max-w-2xl">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activeCategory.color} text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-lg`}>
                        <ActiveCategoryIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {activeCategory.tagline}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display leading-tight">{activeCategory.name}</h3>
                      <p className="text-white/75 leading-relaxed mb-6">{activeCategory.description}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                          <Package className="w-4 h-4 text-emerald-300" />
                          {activeCategory.products.length} products
                        </span>
                        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 hover:bg-emerald-50 transition-colors">
                          Enquire for {activeCategory.name} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={`grid items-stretch gap-6 sm:grid-cols-2 ${activeCategory.products.length === 4 ? 'xl:grid-cols-2' : 'xl:grid-cols-3'}`}>
                    {activeCategory.products.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        categoryId={activeCategory.id}
                        categoryName={activeCategory.name}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FULL CATALOGUE ════════════ */}
      <section className="py-16 lg:py-20 section-light border-y border-stone-100">
        <div className="container-custom">
          <motion.div {...fadeIn} className="mb-10">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Complete Catalogue</span>
            <h2 className="section-title-display mb-5">Dairy Power Product List</h2>
            <p className="section-subtitle">
              A complete view of the current Dairy Power catalogue with available variants and pack sizes.
            </p>
          </motion.div>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {catalogueProducts.map((product, index) => (
              <Link
                key={`${product.categoryId}-${product.id}`}
                to={`/products/${product.categoryId}/${slugify(product.name)}`}
                className="group relative block min-h-[390px] h-full overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-xl"
              >
                <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: index * 0.025, duration: 0.35 }}
                className="relative flex h-full min-h-[390px] flex-col"
              >
                <div className="product-media-surface absolute inset-0 overflow-hidden">
                  <img src={product.image} alt="" aria-hidden="true" className="product-media-ambient" />
                  <div className="absolute inset-x-0 top-0 bottom-40 flex items-center justify-center p-5 pt-7">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="relative z-10 max-h-full max-w-[76%] object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 h-[58%] bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
                    {product.categoryName}
                  </span>
                </div>

                  <div className="relative z-30 mt-auto flex flex-col p-5 pt-16 text-white">
                  <h3 className="mb-1 text-lg font-bold leading-tight text-white line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-white/80 line-clamp-2">{product.description}</p>

                  {product.variants && product.variants.length > 0 && (
                    <div className="mb-3">
                      <ProductChipList items={product.variants} tone="amber" />
                    </div>
                  )}

                  <div>
                    <ProductChipList items={product.sizes} tone="stone" />
                    <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors group-hover:text-emerald-200">
                      View details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PRODUCT HIGHLIGHTS STRIP ════════════ */}
      <section className="py-16 lg:py-20 bg-white border-t border-stone-100">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Why Choose Dairy Power</span>
            <h2 className="section-title-display mb-6">Our Promise</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Droplet, title: '100% Pure', desc: 'No additives, preservatives, or artificial ingredients. Just pure dairy as nature intended.', stat: '0%', statLabel: 'Additives' },
              { icon: Award, title: 'Quality Tested', desc: 'Every single batch undergoes rigorous multi-stage testing for purity, fat content, and safety.', stat: '50+', statLabel: 'Quality Checks' },
              { icon: Leaf, title: 'Farm Fresh Daily', desc: 'Sourced every morning from certified and trusted farms, with complete cold-chain integrity.', stat: '4°C', statLabel: 'Cold Chain' },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`rounded-3xl border p-8 text-center transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl group ${
                    i === 0
                      ? 'border-emerald-100 bg-emerald-50/80 hover:border-emerald-300'
                      : i === 1
                        ? 'border-amber-100 bg-amber-50/80 hover:border-amber-300'
                        : 'border-sky-100 bg-sky-50/80 hover:border-sky-300'
                  }`}
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-all duration-500">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1 font-display">{f.stat}</div>
                  <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-4">{f.statLabel}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/lifestyle/cold-coffee-all.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/70 to-emerald-900/40" />
        </div>
        <div className="relative container-custom">
          <motion.div {...fadeIn} className="max-w-2xl">
            <Package className="w-12 h-12 text-emerald-300 mb-6" strokeWidth={1.5} />
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display leading-tight">Interested in<br />Our Products?</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Get in touch for bulk supply, distributor enquiries, institutional purchases, and retail partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-white">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/b2b" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold backdrop-blur-sm">
                <Building2 className="w-5 h-5" />
                B2B Enquiries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  product,
  categoryId,
  categoryName,
  index,
}: {
  product: Product;
  categoryId: string;
  categoryName: string;
  index: number;
}) {
  const productPath = `/products/${categoryId}/${slugify(product.name)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="group relative flex h-full min-h-[390px] overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-xl"
    >
      <div className="product-media-surface absolute inset-0 overflow-hidden">
        <img src={product.image} alt="" aria-hidden="true" className="product-media-ambient" />
        <div className="absolute inset-x-0 top-0 bottom-40 flex items-center justify-center px-6 pt-8">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="relative z-10 max-h-full max-w-[76%] object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.035]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 h-[58%] bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
          {categoryName}
        </span>
        {product.tag && (
          <span className="absolute right-3 top-3 rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {product.tag}
          </span>
        )}
      </div>

      <div className="relative z-30 mt-auto p-5 pt-16 text-white">
        <h3 className="mb-1 text-xl font-bold leading-tight text-white line-clamp-2">
          {product.name}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-white/80 line-clamp-2">{product.description}</p>

        {product.variants && product.variants.length > 0 && (
          <div className="mb-3">
            <ProductChipList items={product.variants} tone="amber" />
          </div>
        )}

        <ProductChipList items={product.sizes} tone="stone" />

        <Link
          to={productPath}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-emerald-200"
        >
          View Details <Eye className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}

function ProductChipList({ items, tone }: { items: string[]; tone: 'amber' | 'stone' }) {
  const visibleItems = items.slice(0, 4);
  const hiddenCount = items.length - visibleItems.length;
  const chipClass =
    tone === 'amber'
      ? 'border border-white/20 bg-amber-400/90 text-amber-950'
      : 'bg-white/90 text-stone-700';

  return (
    <div className="flex min-h-[2rem] flex-wrap gap-1.5">
      {visibleItems.map((item) => (
        <span key={item} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${chipClass}`}>
          {item}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-stone-500 ring-1 ring-stone-200">
          +{hiddenCount}
        </span>
      )}
    </div>
  );
}
