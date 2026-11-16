import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinkClass = 'rounded-md text-stone-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900';

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-2xl p-2">
                <img
                  src="/images/logo/dairy-power-logo.png"
                  alt="Dairy Power"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-stone-300 text-base mb-6 max-w-md leading-relaxed">
              Delivering pure, fresh, and nutritious dairy products with an unwavering commitment to quality, hygiene, and family health since 2009.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-stone-300">
              FSSAI Lic No. 11521999000154
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={footerLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={footerLinkClass}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className={footerLinkClass}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className={footerLinkClass}>
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/quality" className={footerLinkClass}>
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/b2b" className={footerLinkClass}>
                  B2B Supply
                </Link>
              </li>
              <li>
                <Link to="/career" className={footerLinkClass}>
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products/milk" className={footerLinkClass}>Milk</Link></li>
              <li><Link to="/products/dahi" className={footerLinkClass}>Dahi</Link></li>
              <li><Link to="/products/ghee" className={footerLinkClass}>Pure Ghee</Link></li>
              <li><Link to="/products/fresh-dairy" className={footerLinkClass}>Paneer, Shrikhand & Butter</Link></li>
              <li><Link to="/products/beverages" className={footerLinkClass}>Beverages</Link></li>
              <li><Link to="/products/milk-powder" className={footerLinkClass}>Milk Powder</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" strokeWidth={2} />
                <span className="text-sm leading-relaxed">Gat No. 555/1, At Songaon, Post Saikheda<br />Bhausahebnagar, Maharashtra 422210</span>
              </li>
              <li className="flex items-center gap-3 text-stone-300">
                <Phone className="w-5 h-5 flex-shrink-0 text-emerald-400" strokeWidth={2} />
                <a href="tel:+918010900630" className={footerLinkClass}>080109 00630</a>
              </li>
              <li className="flex items-center gap-3 text-stone-300">
                <Mail className="w-5 h-5 flex-shrink-0 text-emerald-400" strokeWidth={2} />
                <a href="mailto:info@dairypower.in" className={footerLinkClass}>info@dairypower.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              © {currentYear} Dairy Power Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-stone-400">
              <Link to="/legal/privacy" className="rounded-md hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900">Privacy Policy</Link>
              <Link to="/legal/terms" className="rounded-md hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900">Terms of Service</Link>
              <Link to="/legal/cookies" className="rounded-md hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
