import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Building2, Download, Send, Package, Factory, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useSearchParams } from 'react-router-dom';

export function B2B() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    businessType: '',
    city: '',
    requirement: '',
    quantity: '',
    message: '',
  });

  useEffect(() => {
    const requirement = searchParams.get('requirement');
    if (requirement) {
      setFormData((current) => ({ ...current, requirement }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `B2B enquiry: ${formData.requirement || formData.companyName}`;
    const body = [
      `Company: ${formData.companyName}`,
      `Contact person: ${formData.contactPerson}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Business type: ${formData.businessType}`,
      `City: ${formData.city}`,
      `Requirement: ${formData.requirement}`,
      `Estimated quantity: ${formData.quantity || 'Not specified'}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:contact@dairypower.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success('Opening your email client', { description: 'Please send the prepared B2B enquiry email to complete the request.' });
  };

  const b2bProducts = [
    {
      name: 'Skimmed Milk Powder (SMP)',
      image: '/images/products/Dairy Power SMP 25 KG.PNG',
      description: 'Bulk powder supply for food manufacturing, sweets, bakeries, tea, coffee, and institutional buyers.',
      packs: ['1kg', '25kg'],
    },
    {
      name: 'Whole Milk Powder (WMP)',
      image: '/images/products/Dairy Power SMP Pack 1KG.PNG',
      description: 'Dairy powder requirement support for richer formulations and institutional dairy applications.',
      packs: ['Bulk enquiry'],
    },
    {
      name: 'Dairy Whitener',
      image: '/images/products/Dairy Power SMP Pack 1KG.PNG',
      description: 'Tea, coffee, vending, and HoReCa-ready dairy whitener supply discussion for business customers.',
      packs: ['Food service', 'Institutional'],
    },
    {
      name: 'Flavoured Milk',
      image: '/images/products/FM 180 ML Mix.png',
      description: 'Ready-to-drink flavoured milk range in colorful retail and distribution-ready packs.',
      packs: ['180ml'],
    },
    {
      name: 'Cold Coffee',
      image: '/images/products/cold-coffee-classic.png',
      description: 'Cold coffee products for distributors, modern retail, food service, and beverage channels.',
      packs: ['200ml'],
    },
    {
      name: 'Ghee',
      image: '/images/products/Dairy Power Ghee 1000 ML.png',
      description: 'Pure ghee in retail packs and larger B2B requirements with consistent product representation.',
      packs: ['100g', '200g', '500g', '1kg', '15kg'],
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/lifestyle/production.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-emerald-950/70 to-stone-950/30" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">
              <Building2 className="w-4 h-4" />
              Business Enquiries
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">B2B Supply</h1>
            <p className="text-xl text-white/75 max-w-2xl">
              Bulk dairy products, SMP, butter, distributor requirements, institutional partnerships, and manufacturing enquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/80 border-b border-stone-100">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">B2B Product Portfolio</span>
            <h2 className="section-title-display mb-5">Bulk Products for Business Buyers</h2>
            <p className="section-subtitle">
              Requested B2B products are now shown with dedicated visuals, clear names, and enquiry-ready product representation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group relative flex min-h-[360px] h-full flex-col overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="product-media-surface absolute inset-0 overflow-hidden">
                  <img src={product.image} alt="" aria-hidden="true" className="product-media-ambient" />
                  <div className="absolute inset-x-0 top-0 bottom-28 p-6">
                    <img src={product.image} alt={product.name} className="relative z-10 h-full w-full object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
                    B2B
                  </span>
                </div>
                <div className="relative z-10 mt-auto p-6 pt-14 text-white">
                  <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-3 line-clamp-2">{product.description}</p>
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {product.packs.map((pack) => (
                        <span key={pack} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">
                          {pack}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/b2b?requirement=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-200"
                    >
                      Enquire for this product
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Capabilities</span>
              <h2 className="section-title-display mb-6">Reliable Partner for Bulk Dairy Needs</h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                Dairy Power supports buyers who need dependable supply, hygienic processing, cold-chain discipline, and responsive commercial coordination.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Package, title: 'Bulk Product Range', desc: 'SMP, butter, milk, dahi, paneer, ghee, beverages, and specialty dairy products.' },
                  { icon: Factory, title: 'Production Readiness', desc: 'Modern processing systems and plant capabilities for institutional supply discussions.' },
                  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Batch checks, food safety practices, and controlled handling across operations.' },
                  { icon: Truck, title: 'Supply Coordination', desc: 'Support for distributors, retailers, food-service buyers, and business partners.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-stone-100 bg-stone-50 p-5">
                      <Icon className="w-7 h-7 text-emerald-600 flex-shrink-0" strokeWidth={1.7} />
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/catalogue/dairy-power-product-catalogue.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-stone-200 text-slate-800 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-semibold"
              >
                <Download className="w-5 h-5" />
                Download Product Catalogue
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-stone-100 bg-white p-6 lg:p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900 font-display mb-2">Business Enquiry Form</h2>
              <p className="text-stone-500 mb-8">Share your requirement and our team will connect with the right details.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField label="Company name *"><input className="form-input" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} /></FormField>
                  <FormField label="Contact person *"><input className="form-input" required value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} /></FormField>
                  <FormField label="Phone number *"><input className="form-input" required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></FormField>
                  <FormField label="Email address *"><input className="form-input" required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></FormField>
                  <FormField label="Business type *">
                    <select className="form-input" required value={formData.businessType} onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}>
                      <option value="">Select business type</option>
                      <option value="distributor">Distributor</option>
                      <option value="retailer">Retailer</option>
                      <option value="institution">Institutional buyer</option>
                      <option value="food-service">Food service</option>
                      <option value="contract">Contract manufacturing</option>
                    </select>
                  </FormField>
                  <FormField label="City *"><input className="form-input" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} /></FormField>
                  <FormField label="Requirement *"><input className="form-input" required value={formData.requirement} onChange={(e) => setFormData({ ...formData, requirement: e.target.value })} /></FormField>
                  <FormField label="Estimated quantity"><input className="form-input" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} /></FormField>
                </div>
                <FormField label="Additional details"><textarea className="form-textarea" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></FormField>
                <button type="submit" className="w-full btn-primary text-lg py-5">
                  Submit Business Enquiry
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      {children}
    </label>
  );
}
