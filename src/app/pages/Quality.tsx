import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, Microscope, Thermometer, Truck, Award, Clock, Droplet, FileDown } from 'lucide-react';

export function Quality() {
  const qualitySteps = [
    {
      icon: Droplet,
      title: 'Farm Collection',
      description: 'Milk collected within 2 hours of milking from certified farms',
      time: '6:00 AM',
    },
    {
      icon: Microscope,
      title: 'Lab Testing',
      description: 'Multi-parameter quality testing for purity and composition',
      time: '7:00 AM',
    },
    {
      icon: Thermometer,
      title: 'Pasteurization',
      description: 'Precise temperature control to eliminate harmful bacteria',
      time: '8:00 AM',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Check',
      description: 'Final verification before packaging',
      time: '9:00 AM',
    },
    {
      icon: Truck,
      title: 'Cold Chain Delivery',
      description: 'Temperature-monitored delivery to your doorstep',
      time: '10:00 AM',
    },
  ];

  const certifications = [
    {
      name: 'FSSAI Licensed',
      description: 'Food safety license number 11521999000154',
      proof: 'License number published in Dairy Power catalogue',
      icon: Shield,
    },
    {
      name: 'Batch Quality Checks',
      description: 'Routine checks for product composition, temperature, and handling discipline',
      proof: 'Quality documentation available for qualified business enquiries',
      icon: Award,
    },
    {
      name: 'Cold Chain Handling',
      description: 'Storage guidance documented by product category in the catalogue',
      proof: 'Storage ranges displayed across product pages',
      icon: CheckCircle2,
    },
  ];

  const qualityParameters = [
    { parameter: 'Milk Composition', standard: 'Product specific', our: 'Fat and SNF listed for milk products' },
    { parameter: 'Storage Temperature', standard: 'Category specific', our: '4°C chilled chain for fresh dairy ranges' },
    { parameter: 'Shelf Life', standard: 'Product specific', our: 'Displayed on product detail pages from catalogue data' },
    { parameter: 'Handling', standard: 'Controlled storage', our: 'Chilled, frozen, or dry storage by product type' },
  ];

  const qualityControlImages = [
    {
      src: '/images/quality/milk-analyzer-lab.webp',
      alt: 'Milk analyzer equipment in a hygienic dairy laboratory',
    },
    {
      src: '/images/quality/pasteurization-monitoring.webp',
      alt: 'Pasteurization monitoring system with stainless dairy processing equipment',
    },
    {
      src: '/images/quality/microbiology-testing.webp',
      alt: 'Microbiological testing setup for dairy quality assurance',
    },
    {
      src: '/images/quality/quality-inspection-lab.webp',
      alt: 'Quality inspection laboratory with dairy testing instruments',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/quality/quality-inspection-lab.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-900/60 to-emerald-900/30" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">FSSAI Licensed</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">Quality & Process</h1>
            <p className="text-xl text-white/70">From farm to family - every step monitored for your safety</p>
          </motion.div>
        </div>
      </section>

      {/* Farm to Home Journey */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/80 via-stone-50 to-amber-50/70 py-14 lg:py-16">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center mb-12"
          >
            <h2 className="section-title font-heading mb-6">Farm to Home Journey</h2>
            <p className="section-subtitle mx-auto">
              Our quality process ensures freshness at every stage
            </p>
          </motion.div>

          <div className="relative rounded-[2rem] border border-white/80 bg-white/45 p-4 shadow-sm backdrop-blur-sm lg:p-6">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-[7.5rem] left-12 right-12 h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {qualitySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className={`relative rounded-2xl border-2 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-xl h-full ${
                      index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/90' : 'border-amber-100 bg-amber-50/90'
                    }`}>
                      <div className="relative inline-flex mb-6">
                        <div className="absolute inset-0 bg-emerald-600 rounded-2xl blur-md opacity-30" />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold mb-4">
                        <Clock className="w-3 h-3" />
                        {step.time}
                      </div>
                      <h3 className="text-lg font-bold text-stone-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-stone-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Parameters */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title font-heading mb-6">Quality Parameters</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Dairy Power communicates product-specific composition, storage, shelf-life, and handling information through the catalogue and product pages so buyers can evaluate products with clearer context.
              </p>

              <div className="space-y-4">
                {qualityParameters.map((param, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-stone-200 hover:border-emerald-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-stone-900">{param.parameter}</h4>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-stone-500 mb-1">Industry Standard</div>
                        <div className="font-semibold text-stone-700">{param.standard}</div>
                      </div>
                      <div>
                        <div className="text-stone-500 mb-1">Our Standard</div>
                        <div className="font-bold text-emerald-700">{param.our}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative grid grid-cols-2 gap-4">
                {qualityControlImages.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title font-heading mb-6">Quality Proof & Documentation</h2>
            <p className="section-subtitle mx-auto">
              Public proof is shown clearly. Additional batch or business documentation can be requested by qualified buyers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`info-card text-center hover-lift ${index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/65' : 'border-amber-100 bg-amber-50/65'}`}
                >
                  <div className="feature-icon mx-auto mb-6">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">{cert.name}</h3>
                  <p className="text-stone-600">{cert.description}</p>
                  <p className="text-sm text-emerald-700 font-semibold mt-4">{cert.proof}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/catalogue/dairy-power-product-catalogue.pdf" download className="btn-primary">
              <FileDown className="w-5 h-5" />
              Download Product Catalogue
            </a>
            <Link to="/b2b" className="btn-outline">
              Request Business Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-3xl blur-2xl opacity-20" />
              <img
                src="/images/quality/microbiology-testing.webp"
                alt="Dairy microbiology testing and hygiene standards"
                className="relative rounded-3xl shadow-2xl w-full"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="section-title font-heading mb-6">Hygiene Standards</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our state-of-the-art facilities maintain the highest hygiene standards with automated cleaning systems, regular audits, and strict protocols.
              </p>

              <div className="space-y-4">
                {[
                  'Automated CIP (Clean-in-Place) systems',
                  'Regular microbiological testing',
                  'Temperature-controlled storage',
                  'Documented hygiene practices',
                  'Trained quality assurance team',
                  'Daily equipment sanitization',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/lifestyle/shrikhand-festive.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-stone-900/70" />
        </div>
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-emerald-300 mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">Quality You Can Trust</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Experience the difference that rigorous quality control makes
            </p>
            <a href="/contact" className="btn-white">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
