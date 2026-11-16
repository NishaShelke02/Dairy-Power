import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isProductDetail = /^\/products\/[^/]+\/[^/]+$/.test(pathname);

    // Keep the catalogue position when changing a category, but always focus a
    // newly opened product detail page on its hero and specifications.
    if (pathname.startsWith('/products/') && !isProductDetail) return;

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
