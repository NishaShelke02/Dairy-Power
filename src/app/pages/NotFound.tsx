import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-stone-50 via-emerald-50 to-amber-50">
      <div className="container-custom text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Big 404 */}
          <div className="relative inline-block mb-8">
            <span className="text-[10rem] md:text-[14rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-amber-500 leading-none select-none">
              404
            </span>
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/images/products/DTM 500 ML.jpeg"
                alt="Lost milk"
                className="h-28 md:h-36 drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Oops! This page has gone missing
          </h1>
          <p className="text-lg text-stone-600 mb-10 max-w-lg mx-auto">
            Looks like this page spilled. Don't worry — our fresh products are still just a click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link to="/products" className="btn-outline">
              <Search className="w-5 h-5" />
              Browse Products
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
