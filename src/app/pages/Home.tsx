import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Leaf, Shield, Truck, Star, ChevronLeft, ChevronRight, FileDown, Factory } from 'lucide-react';

/* Shared viewport config — triggers once, minimal threshold */
const vp = { once: true, amount: 0.15 } as const;
/* Light fade-in only — avoids expensive transform animations */
const fadeIn = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: vp, transition: { duration: 0.5 } } as const;

type HeroSlide = {
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: { label: string; to: string };
  fullArtwork?: boolean;
  transparentArtwork?: boolean;
};

export function Home() {
  /* ─── Hero Slides ─── */
  const heroSlides: HeroSlide[] = [
   
    {
      image: '/images/products/all-products.png',
      imageAlt: 'Dairy Power product range',
      badge: 'Complete Range',
      title: 'Explore Our\nComplete Range',
      subtitle: 'Discover all our premium dairy products carefully crafted to meet your family\'s nutritional needs.',
      cta: { label: 'View All Products', to: '/products' },
    },
     {
      image: '/images/hero/mithai-products-wide-transparent.png',
      imageAlt: 'Dairy Power Celebration of Tradition Mithai Collection featuring Motichur Laddoo, Kalakand, Kesar Pedha, and Malai Pedha',
      badge: 'Mithai Collection',
      title: 'Celebration of\nTradition',
      subtitle: 'Discover Dairy Power\'s festive collection of traditional Indian sweets.',
      cta: { label: 'Explore Products', to: '/products' },
      fullArtwork: true,
      transparentArtwork: true,
    },
    {
      image: '/images/lifestyle/hero-dairy.jpg',
      imageAlt: 'Fresh Dairy Power milk and dairy products',
      badge: 'Farm Fresh Goodness',
      title: 'Daily Dose of\nPure Nutrition',
      subtitle: 'From our farms to your family — fresh dairy products crafted since 2009 with dedication to purity and taste.',
      cta: { label: 'Explore Products', to: '/products' },
    },
    {
      image: '/images/lifestyle/lassi-lifestyle.jpg',
      imageAlt: 'Dairy Power lassi and beverage range',
      badge: 'Handcrafted Beverages',
      title: 'Taste the\nTradition',
      subtitle: 'Our range of lassi, chaas & cold coffee brings you authentic flavours with modern quality standards.',
      cta: { label: 'View Beverages', to: '/products' },
    },
    {
      image: '/images/lifestyle/ghee-production.jpg',
      imageAlt: 'Dairy Power ghee production',
      badge: 'Bulk Dairy Ingredients',
      title: 'SMP, Butter\n& Ghee Supply',
      subtitle: 'Modern processing capability for skimmed milk powder, butter, ghee, and institutional dairy requirements.',
      cta: { label: 'B2B Supply', to: '/b2b' },
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /* ─── Features ─── */
  const features = [
    { icon: CheckCircle2, title: '100% Pure', description: 'No additives or preservatives. Just pure, natural dairy goodness.' },
    { icon: Leaf, title: 'Farm Fresh', description: 'Sourced daily from certified farms maintaining the highest standards.' },
    { icon: Shield, title: 'Quality Tested', description: 'Multi-stage quality testing including fat, SNF & bacterial count.' },
    { icon: Truck, title: 'Cold Chain', description: 'Temperature-controlled supply chain from collection to doorstep.' },
  ];

  /* ─── Stats ─── */
  const stats = [
    { value: '250,000 L', label: 'Daily Capacity', suffix: '' },
    { value: '10,000+', label: 'Happy Families', suffix: '' },
    { value: '17+', label: 'Years Experience', suffix: '' },
    { value: '100%', label: 'Quality Assured', suffix: '' },
  ];

  /* ─── Product Categories (Milky Mist style) ─── */
  const productCategories = [
    {
      name: 'Milk',
      description: 'Cow milk, buffalo milk, and standardised milk in everyday pouch sizes.',
      image: '/images/products/Cow Milk 5000ML.jpeg',
      to: '/products/milk',
      bg: 'from-sky-50 to-blue-50',
    },
    {
      name: 'Dahi',
      description: 'Malai dahi, premium dahi, skimmed curd, and bulk dahi buckets.',
      image: '/images/products/dahi-pouch.png',
      to: '/products/dahi',
      bg: 'from-amber-50 to-orange-50',
    },
    {
      name: 'Beverages',
      description: 'Lassi, flavoured milk, chaas, cold coffee, and coconut water.',
      image: '/images/products/FM 180 ML Mix.png',
      to: '/products/beverages',
      bg: 'from-rose-50 to-pink-50',
    },
    {
      name: 'Pure Ghee',
      description: 'Aromatic pure ghee in retail packs and 15kg tins for larger needs.',
      image: '/images/products/Dairy Power Ghee 1000 ML.png',
      to: '/products/ghee',
      bg: 'from-yellow-50 to-amber-50',
    },
    {
      name: 'Fresh Dairy',
      description: 'Paneer, shrikhand, and butter for homes, food service, and institutions.',
      image: '/images/products/Dairy Power Low Fat Paneer 1000gm.png',
      to: '/products/fresh-dairy',
      bg: 'from-stone-50 to-amber-50/50',
    },
    {
      name: 'Mithai',
      description: 'Motichur laddoo, kalakand, kesar pedha, and malai pedha for celebrations and gifting.',
      image: '/images/products/mithai-motichur-laddoo.png',
      to: '/products/mithai',
      bg: 'from-orange-50 to-amber-50',
    },
    {
      name: 'Milk Powder & Dairy Ingredients',
      description: 'Skimmed milk powder in 1kg and 25kg packs for B2B and food service.',
      image: '/images/products/Dairy Power SMP Pack 1KG.PNG',
      to: '/products/milk-powder',
      bg: 'from-emerald-50 to-teal-50',
    },
  ];

  /* ─── Marquee Products ─── */
  const marqueeProducts = [
    { src: '/images/products/Saksham Milk 450 ML.PNG', name: 'Saksham Milk' },
    { src: '/images/products/Buffalo Milk 500 ML.png', name: 'Buffalo Milk' },
    { src: '/images/products/Dahi 140 gm cup.png', name: 'Dahi Cup' },
    { src: '/images/products/dahi.png', name: 'DTM Dahi' },
    { src: '/images/products/Dairy Power Ghee 100 ML.png', name: 'Ghee' },
    { src: '/images/products/rose-lassi.png', name: 'Rose Lassi' },
    { src: '/images/products/lassi.png', name: 'Mango Lassi' },
    { src: '/images/products/strawberry-lassi.png', name: 'Strawberry Lassi' },
    { src: '/images/products/cold-coffee-classic.png', name: 'Cold Coffee' },
    { src: '/images/products/chaas.png', name: 'Chaas' },
    { src: '/images/products/coconut-water.png', name: 'Coconut Water' },
    { src: '/images/products/Malai Paneer 1000gm.png', name: 'Paneer' },
    { src: '/images/products/shrikhand-100gm.png', name: 'Shrikhand' },
    { src: '/images/products/cold-coffee-mocha.png', name: 'Mocha Coffee' },
  ];

  const bulkVisuals = [
    { image: '/images/products/Dairy Power SMP Pack 1KG.PNG', label: 'Skimmed Milk Powder', tone: 'from-emerald-50 to-teal-50', position: 'object-center' },
    { image: '/images/products/butter-card-visual.png', label: 'Butter', tone: 'from-amber-50 to-yellow-50', position: 'object-center' },
    { image: '/images/products/Dairy Power Ghee 1000 ML.png', label: 'Ghee', tone: 'from-orange-50 to-amber-50' },
  ];

  /* ─── Gallery ─── */
  const galleryLeft = [
    { src: '/images/lifestyle/mango-lassi-styled.jpg', alt: 'Mango Lassi' },
    { src: '/images/lifestyle/ghee-styled.jpg', alt: 'Pure Ghee' },
  ];
  const galleryCenter = [
    { src: '/images/lifestyle/cold-coffee-pour.jpg', alt: 'Cold Coffee' },
    { src: '/images/lifestyle/chaas-styled.jpg', alt: 'Masala Chaas' },
    { src: '/images/lifestyle/coconut-water-styled.jpg', alt: 'Coconut Water' },
  ];
  const galleryRight = [
    { src: '/images/lifestyle/rose-lassi-styled.jpg', alt: 'Rose Lassi' },
    { src: '/images/lifestyle/shrikhand-styled.jpg', alt: 'Shrikhand' },
  ];

  return (
    <div className="bg-white">
      {/* ════════════ HERO — Full-Screen Slider ════════════ */}
      <section className="relative min-h-[580px] md:h-[min(90vh,840px)] md:min-h-[640px] overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            {heroSlides[currentSlide].fullArtwork ? (
              <>
                {heroSlides[currentSlide].transparentArtwork ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(16,185,129,0.38),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(245,158,11,0.34),transparent_34%)] bg-stone-950" />
                ) : (
                  <>
                    <img
                      src={heroSlides[currentSlide].image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
                    />
                    <div className="absolute inset-0 bg-stone-950/55" />
                  </>
                )}
                <div className="absolute inset-x-0 bottom-0 top-20 flex items-center justify-center">
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].imageAlt}
                    className="h-auto w-auto max-h-[94%] max-w-[96%] drop-shadow-2xl"
                  />
                </div>
              </>
            ) : (
              <>
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        {!heroSlides[currentSlide].fullArtwork && (
        <div className="relative flex min-h-[580px] items-center pt-24 md:h-full md:min-h-0 md:pt-0">
          <div className="container-custom w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/20 mb-6">
                  <Leaf className="w-4 h-4 text-emerald-300" strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-white/90">{heroSlides[currentSlide].badge}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight whitespace-pre-line font-display">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-[20rem] sm:max-w-xl leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={heroSlides[currentSlide].cta.to} className="btn-white">
                    {heroSlides[currentSlide].cta.label}
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold backdrop-blur-sm"
                  >
                    Our Story
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        )}

        {/* Slide Controls */}
        <div className="absolute bottom-12 left-0 right-0 hidden md:block">
          <div className="container-custom flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show hero slide ${i + 1}`}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous hero slide"
                onClick={prevSlide}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next hero slide"
                onClick={nextSlide}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/30 rounded-full items-start justify-center p-1.5 hidden md:flex">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </section>

      {/* ════════════ PRODUCT MARQUEE ════════════ */}
      <section className="py-6 bg-gradient-to-r from-emerald-50 via-white to-amber-50 border-y border-stone-200/60 overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...marqueeProducts, ...marqueeProducts].map((p, i) => (
            <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
              <img src={p.src} alt={p.name} className="h-12 w-12 object-contain" />
              <span className="text-sm font-semibold text-stone-500 whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            {...fadeIn}
            className="text-center mb-14"
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Why Dairy Power</span>
            <h2 className="section-title-display mb-6">Purity You Can Trust</h2>
            <p className="section-subtitle mx-auto">Quality and care built into every drop, every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`group text-center rounded-3xl border p-6 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl ${
                    index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/70' : 'border-amber-100 bg-amber-50/70'
                  }`}
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-all duration-500">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ BULK DAIRY INGREDIENTS ════════════ */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950 text-white">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/lifestyle/production.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_78%_70%,rgba(245,158,11,0.18),transparent_34%)]" />
        <div className="relative container-custom">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">
                <Factory className="w-4 h-4" />
                Bulk Dairy Products
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold font-display leading-tight mb-6">
                Ingredients for Food Service and B2B Supply
              </h2>
              <p className="text-lg text-white/75 leading-relaxed mb-8">
                A stronger product showcase for SMP, butter, ghee, and institutional dairy needs, supported by plant capability and consistent quality control.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {['SMP', 'Butter', 'Ghee'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="text-2xl font-bold font-display mb-1">{item}</div>
                    <div className="text-sm text-white/60">Bulk ready</div>
                  </div>
                ))}
              </div>
              <Link to="/b2b" className="btn-white">
                Explore B2B Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div {...fadeIn} className="grid sm:grid-cols-3 gap-4">
              {bulkVisuals.map((item) => (
                <div key={item.label} className={`group relative h-[320px] overflow-hidden rounded-3xl bg-gradient-to-br ${item.tone} shadow-2xl`}>
                  <img src={item.image} alt={item.label} className={`absolute inset-0 h-full w-full object-cover ${item.position ?? 'object-center'} transition-transform duration-700 group-hover:scale-105`} loading="lazy" />
                  <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ STATS BAR ════════════ */}
      <section className="bg-emerald-900 py-14 lg:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">{stat.value}</div>
                <div className="text-sm md:text-base text-emerald-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PRODUCT CATEGORIES (Milky Mist-style) ════════════ */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-white via-emerald-50/60 to-amber-50/70">
        <img src="/images/products/Dairy Power SMP Pack 1KG.PNG" alt="" className="pointer-events-none absolute -left-8 top-20 hidden h-40 rotate-[-12deg] object-contain opacity-20 blur-[1px] lg:block" loading="lazy" />
        <img src="/images/products/FM 180 ML Mix.png" alt="" className="pointer-events-none absolute -right-8 bottom-16 hidden h-44 rotate-[10deg] object-contain opacity-20 blur-[1px] lg:block" loading="lazy" />
        <div className="container-custom">
          <motion.div
            {...fadeIn}
            className="text-center mb-14"
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Range</span>
            <h2 className="section-title-display mb-6">Product Categories</h2>
            <p className="section-subtitle mx-auto">
              From traditional favourites to modern essentials — each product crafted with the highest standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={vp}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <Link
                  to={cat.to}
                  className="group relative block min-h-[300px] overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl"
                >
                  <div className={`product-media-surface absolute inset-0 bg-gradient-to-br ${cat.bg}`}>
                    <img src={cat.image} alt="" aria-hidden="true" className="product-media-ambient" />
                    <div className="absolute inset-x-0 top-0 bottom-24 flex items-center justify-center p-6">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="relative z-10 h-full max-w-[72%] object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.035]"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                  </div>
                  <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-6 pt-20 text-white">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="mb-1 text-xl font-bold text-white">{cat.name}</h3>
                        <p className="text-sm leading-relaxed text-white/80 line-clamp-2">{cat.description}</p>
                      </div>
                      <div className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight className="w-5 h-5 text-emerald-700" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="/catalogue/dairy-power-product-catalogue.pdf" download className="btn-outline">
              <FileDown className="w-5 h-5" />
              Download Catalogue
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════ LIFESTYLE GALLERY ════════════ */}
      <section className="py-18 lg:py-24 section-light">
        <div className="container-custom">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Crafted With Love</span>
            <h2 className="section-title-display mb-6">Made With Care</h2>
            <p className="section-subtitle mx-auto">
              A glimpse into our world — from state-of-the-art facilities to beautifully crafted products
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Left column — 2 images, tall + short */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden group aspect-[3/4]">
                <img src={galleryLeft[0].src} alt={galleryLeft[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden group aspect-square">
                <img src={galleryLeft[1].src} alt={galleryLeft[1].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
              </div>
            </div>

            {/* Center two columns — 3 images */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden group aspect-[16/9]">
                <img src={galleryCenter[0].src} alt={galleryCenter[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden group aspect-square">
                  <img src={galleryCenter[1].src} alt={galleryCenter[1].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
                </div>
                <div className="rounded-3xl overflow-hidden group aspect-square">
                  <img src={galleryCenter[2].src} alt={galleryCenter[2].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right column — 2 images, short + tall */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden group aspect-square">
                <img src={galleryRight[0].src} alt={galleryRight[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden group aspect-[3/4]">
                <img src={galleryRight[1].src} alt={galleryRight[1].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ QUALITY PROMISE ════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              {...fadeIn}
            >
              <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Promise</span>
              <h2 className="section-title-display mb-6">Quality You<br />Can Taste</h2>
              <p className="text-lg text-stone-500 mb-8 leading-relaxed">
                Every batch undergoes rigorous testing for purity, fat content, and bacterial count. Our temperature-controlled supply chain ensures freshness from collection to your doorstep.
              </p>

              <div className="space-y-4 mb-10">
                {['Multi-stage quality testing at every step', 'ISO 9001:2015 certified facilities', 'FSSAI licensed operations', 'Cold chain integrity always maintained'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/quality" className="btn-primary">
                Learn About Our Process
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="relative"
            >
              <div className="absolute -inset-6 bg-emerald-100 rounded-[2rem] opacity-40" />
              <img
                src="/images/lifestyle/quality-lab.jpg"
                alt="Quality Testing"
                className="relative rounded-3xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 quality-badge">
                <Shield className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                <span className="font-bold">Quality Certified</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">4.9/5</div>
                  <div className="text-xs text-stone-400">Customer Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/lifestyle/lassi-pour.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/70 to-emerald-900/40" />
        </div>

        <div className="relative container-custom">
          <motion.div
            {...fadeIn}
            className="max-w-2xl"
          >
            <span className="inline-block text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">Join the Family</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display leading-tight">Ready to Experience<br />Fresh?</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Join thousands of families who trust Dairy Power for their daily dairy needs. Pure, fresh, and delivered with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-white">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/b2b"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                Business Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ TRUST BAR ════════════ */}
      <section className="py-12 bg-stone-50 border-t border-stone-200/60">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-stone-400">
              <Award className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm font-semibold">Quality Systems</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Shield className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm font-semibold">FSSAI Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm font-semibold">Batch Checks</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Leaf className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm font-semibold">100% Natural</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
