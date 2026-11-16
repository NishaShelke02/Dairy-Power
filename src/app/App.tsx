import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from 'sonner';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Products = lazy(() => import('./pages/Products').then((module) => ({ default: module.Products })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then((module) => ({ default: module.ProductDetail })));
const Infrastructure = lazy(() => import('./pages/Infrastructure').then((module) => ({ default: module.Infrastructure })));
const Quality = lazy(() => import('./pages/Quality').then((module) => ({ default: module.Quality })));
const B2B = lazy(() => import('./pages/B2B').then((module) => ({ default: module.B2B })));
const Career = lazy(() => import('./pages/Career').then((module) => ({ default: module.Career })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const Legal = lazy(() => import('./pages/Legal').then((module) => ({ default: module.Legal })));
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-white">
          <Toaster position="top-right" richColors closeButton />
          <LogoIntro />
          <RouteSeo />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <Suspense fallback={<RouteLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:categoryId" element={<Products />} />
                <Route path="/products/:categoryId/:productSlug" element={<ProductDetail />} />
                <Route path="/infrastructure" element={<Infrastructure />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/b2b" element={<B2B />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal/:page" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

const routeMeta = [
  {
    match: (pathname: string) => pathname === '/',
    title: 'Dairy Power | Pure Dairy Products & B2B Dairy Supply',
    description:
      'Dairy Power offers milk, dahi, ghee, paneer, beverages, skimmed milk powder, and bulk dairy supply from Nashik, Maharashtra.',
    canonical: '/',
  },
  {
    match: (pathname: string) => pathname === '/about',
    title: 'About Dairy Power | Dairy Manufacturer in Nashik',
    description:
      'Learn about Dairy Power, its Nashik dairy facility, procurement network, processing capability, and commitment to quality dairy products.',
    canonical: '/about',
  },
  {
    match: (pathname: string) => pathname.startsWith('/products'),
    title: 'Dairy Power Products | Milk, Dahi, Ghee, Beverages & SMP',
    description:
      'Explore Dairy Power product categories including milk, dahi, ghee, paneer, shrikhand, butter, beverages, and milk powder products.',
    canonical: '/products',
  },
  {
    match: (pathname: string) => pathname === '/infrastructure',
    title: 'Dairy Power Infrastructure | Manufacturing Plant & Quality Systems',
    description:
      'View Dairy Power infrastructure, dairy processing capacity, powder plant support, quality lab, cold chain, and manufacturing capability.',
    canonical: '/infrastructure',
  },
  {
    match: (pathname: string) => pathname === '/quality',
    title: 'Dairy Power Quality | Food Safety, Testing & Cold Chain',
    description:
      'See how Dairy Power maintains dairy quality through batch testing, food safety practices, controlled processing, and cold-chain discipline.',
    canonical: '/quality',
  },
  {
    match: (pathname: string) => pathname === '/b2b',
    title: 'Dairy Power B2B Supply | SMP, WMP, Dairy Whitener & Bulk Dairy',
    description:
      'Send B2B enquiries for skimmed milk powder, whole milk powder, dairy whitener, flavoured milk, cold coffee, ghee, and bulk dairy supply.',
    canonical: '/b2b',
  },
  {
    match: (pathname: string) => pathname === '/career',
    title: 'Careers at Dairy Power | Dairy Industry Jobs in Nashik',
    description:
      'Explore career opportunities with Dairy Power across dairy operations, quality, sales, logistics, and business support functions.',
    canonical: '/career',
  },
  {
    match: (pathname: string) => pathname === '/contact',
    title: 'Contact Dairy Power | Product, B2B & Distributor Enquiries',
    description:
      'Contact Dairy Power for product information, B2B supply, distributor enquiries, plant location, phone, email, and business support.',
    canonical: '/contact',
  },
  {
    match: (pathname: string) => pathname.startsWith('/legal'),
    title: 'Dairy Power Legal Information',
    description: 'Read Dairy Power website legal information, privacy policy, terms, and cookie policy.',
    canonical: '/legal/privacy',
  },
];

function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta.find((item) => item.match(location.pathname)) ?? routeMeta[0];
    const canonicalUrl = `https://www.dairypower.in${meta.canonical}`;

    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMetaProperty('og:title', meta.title);
    setMetaProperty('og:description', meta.description);
    setMetaProperty('og:url', canonicalUrl);
    setCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}

function setMeta(name: string, content: string) {
  const tag = document.querySelector(`meta[name="${name}"]`);
  if (tag) tag.setAttribute('content', content);
}

function setMetaProperty(property: string, content: string) {
  const tag = document.querySelector(`meta[property="${property}"]`);
  if (tag) tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  const link = document.querySelector('link[rel="canonical"]');
  if (link) link.setAttribute('href', href);
}

function LogoIntro() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('dairyPowerLogoIntroDone'));

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('dairyPowerLogoIntroDone', 'true');
      setVisible(false);
    }, 2700);

    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[70] pointer-events-none bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2.2, duration: 0.5, ease: 'easeOut' }}
        >
          <motion.img
            src="/images/logo/dairy-power-logo.png"
            alt="Dairy Power"
            className="fixed h-20 w-auto object-contain drop-shadow-2xl sm:h-24"
            initial={{
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              top: ['50%', '50%', '50%', '1rem'],
              left: ['50%', '50%', '50%', 'max(1rem, calc((100vw - 80rem) / 2 + 1rem))'],
              x: ['-50%', '-50%', '-50%', 0],
              y: ['-50%', '-50%', '-50%', 0],
              scale: [0.9, 1.8, 1.8, 0.5],
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              duration: 2.2,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.35, 0.6, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RouteLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="h-10 w-10 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin" aria-label="Loading page" />
    </div>
  );
}
