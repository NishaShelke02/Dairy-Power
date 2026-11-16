import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Factory, Thermometer, Beaker, Package, Shield, Gauge, Cpu, FlaskConical, Snowflake, ArrowRight, Building2, PlayCircle, Video } from 'lucide-react';

const plantVideoUrl = 'https://www.youtube.com/embed/ZrtAM1KF49U';

export function Infrastructure() {
  const [showPlantVideo, setShowPlantVideo] = useState(false);
  const facilities = [
    {
      icon: Factory,
      title: 'Modern Processing Plant',
      description: 'Automated dairy processing lines designed for consistent output, hygiene, and batch traceability',
      capacity: '250,000 liters/day',
    },
    {
      icon: Thermometer,
      title: 'Temperature-Controlled Storage',
      description: 'Dedicated cold rooms and monitored holding areas for finished goods and raw material integrity',
      capacity: '4°C dairy cold chain',
    },
    {
      icon: Beaker,
      title: 'Quality Lab',
      description: 'In-house lab systems for routine quality checks, food safety assurance, and batch release discipline',
      capacity: '200+ tests/day',
    },
    {
      icon: Package,
      title: 'Packaging Unit',
      description: 'Automated packaging with stringent hygiene protocols',
      capacity: '10,000 units/hour',
    },
  ];

  const technologies = [
    {
      icon: Factory,
      title: 'Powder Plant & Spray Drying',
      description: 'Powder processing capability supported by filtration, concentration, and spray drying workflows for SMP requirements',
    },
    {
      icon: Gauge,
      title: 'Nano-Filtration Support',
      description: 'Membrane-based filtration support for improved concentration efficiency, process control, and product consistency',
    },
    {
      icon: Cpu,
      title: 'Retort Processing',
      description: 'Retort-based beverage processing support for flavoured milk shelf-life, safety, and uniform thermal treatment',
    },
    {
      icon: Snowflake,
      title: 'Butter Cold Storage',
      description: 'Butter production and storage workflows supported by deep cold storage maintained at -18°C',
    },
  ];

  const plantHighlights = [
    {
      title: 'Powder Plant',
      image: '/images/infrastructure/powder-spray-drying-plant.png',
      points: ['Spray drying process for powder conversion', 'Nano-filtration support for process efficiency', 'Bulk SMP supply readiness'],
    },
    {
      title: 'Flavoured Milk Retort',
      image: '/images/infrastructure/retort-filling-line.png',
      points: ['Retort system for beverage safety', 'Controlled thermal processing', 'Operationally suited for institutional volumes'],
    },
    {
      title: 'Quality Control Lab',
      image: '/images/infrastructure/quality-control-lab.png',
      points: ['GC machine support for advanced testing', 'Batch-level checks and records', 'Food safety assurance practices'],
    },
    {
      title: 'Cold Storage Warehouse',
      image: '/images/infrastructure/cold-storage-warehouse.png',
      points: ['Temperature-monitored storage areas', 'Organized finished-goods handling', 'Cold-chain readiness for distribution'],
    },
  ];

  const stats = [
    { value: '100,000', label: 'sq.ft. Facility', unit: '' },
    { value: '250,000 L', label: 'Daily Capacity', unit: '' },
    { value: '300,000 L', label: 'Utility Support', unit: '' },
    { value: '28', label: 'BMC Centers', unit: '' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/infrastructure/modern-dairy-plant-exterior.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-900/60 to-emerald-900/30" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">State-of-the-Art Facility</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Infrastructure</h1>
            <p className="text-xl text-white/70">Advanced technology and modern facilities ensuring quality at every step</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-18 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-value text-gradient">{stat.value}{stat.unit}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Video */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">
                <Video className="w-4 h-4" />
                Plant Video
              </span>
              <h2 className="section-title-display mb-6">Dairy Power Limited Manufacturing Plant</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                A dedicated video area has been added to present the manufacturing plant walkthrough and reduce the plain visual gaps on the infrastructure page.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Processing and powder plant capability',
                  'Quality, hygiene, and plant readiness',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50/65 p-5">
                    <Shield className="w-6 h-6 text-emerald-600 mb-3" strokeWidth={1.8} />
                    <p className="text-sm font-semibold text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500 to-amber-500 opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-stone-100 bg-slate-950 shadow-2xl">
                {plantVideoUrl && showPlantVideo ? (
                  <iframe
                    src={plantVideoUrl}
                    title="Dairy Power Limited manufacturing plant video"
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <div className="relative aspect-video">
                    <img src="/images/infrastructure/stainless-processing-floor.png" alt="Dairy Power manufacturing plant video poster" className="absolute inset-0 h-full w-full object-cover opacity-80" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <button
                          type="button"
                          onClick={() => setShowPlantVideo(true)}
                          className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-emerald-700 shadow-2xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
                          aria-label="Play Dairy Power Limited plant video"
                        >
                          <PlayCircle className="h-12 w-12" strokeWidth={1.5} />
                        </button>
                        <div className="text-2xl font-bold font-display">Dairy Processing Plant Video</div>
                        <p className="mt-2 text-sm text-white/65">
                          Watch a dairy manufacturing plant walkthrough
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title font-heading mb-6">Our Facilities</h2>
            <p className="section-subtitle mx-auto">
              Modern infrastructure designed for excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`info-card hover-lift ${index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/65' : 'border-amber-100 bg-amber-50/65'}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{facility.title}</h3>
                      <p className="text-stone-600 mb-3">{facility.description}</p>
                      <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold">
                        <Gauge className="w-4 h-4 mr-2" strokeWidth={2.5} />
                        {facility.capacity}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title font-heading mb-6">Advanced Processing Capability</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our infrastructure is presented for retail customers as well as institutional buyers who evaluate dairy partners on technology, hygiene, process control, and dependable production capability.
              </p>

              <div className="space-y-6">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-stone-900 mb-2">{tech.title}</h3>
                        <p className="text-stone-600">{tech.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-3xl blur-2xl opacity-20" />
              <img
                src="/images/infrastructure/stainless-processing-floor.png"
                alt="Advanced dairy processing equipment"
                className="relative rounded-3xl shadow-2xl w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plant Systems */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Plant, Machinery & Testing</span>
            <h2 className="section-title-display mb-6">Infrastructure Built for Credibility</h2>
            <p className="section-subtitle">
              Key operational areas are highlighted with production relevance, safety focus, and business-readiness for distributors, institutional buyers, and third-party manufacturing enquiries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plantHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative min-h-[340px] overflow-hidden rounded-3xl border border-stone-100 bg-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-xl"
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <div className="space-y-2">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <FlaskConical className="w-4 h-4 text-emerald-300 mt-1 flex-shrink-0" strokeWidth={2} />
                        <span className="text-sm text-white/85 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title font-heading mb-6">Production Excellence</h2>
            <p className="section-subtitle mx-auto">
              Every product goes through a rigorous production process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-3xl blur-2xl opacity-20" />
              <img
                src="/images/infrastructure/retort-filling-line.png"
                alt="Automated dairy production line"
                className="relative rounded-3xl shadow-2xl w-full"
                loading="lazy"
              />
            </motion.div>

            <div className="space-y-4">
              {[
                { title: 'Automated Pasteurization', desc: 'Computer-controlled heating to precise temperatures' },
                { title: 'Rapid Cooling', desc: 'Quick cooling to maintain freshness and quality' },
                { title: 'Sterile Packaging', desc: 'Automated packaging in hygienic environment' },
                { title: 'Quality Inspection', desc: 'Each batch tested before distribution' },
                { title: 'Cold Storage', desc: 'Temperature-monitored storage facilities' },
                { title: 'Refrigerated Transport', desc: 'GPS-tracked delivery maintaining cold chain' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border-2 p-6 transition-all hover:border-emerald-500 hover:shadow-lg ${index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/65' : 'border-amber-100 bg-amber-50/65'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 mb-1">{step.title}</h3>
                      <p className="text-stone-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="py-16 lg:py-20 bg-stone-950 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">
                <Building2 className="w-4 h-4" />
                B2B & Institutional Buyers
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">Bulk Dairy Supply and Manufacturing Enquiries</h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                Connect with Dairy Power for SMP, butter, institutional dairy products, distributor requirements, and contract manufacturing discussions.
              </p>
              <Link to="/b2b" className="btn-white">
                Open B2B Enquiry
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'SMP & Butter', value: 'Bulk' },
                { label: 'Storage', value: '-18°C' },
                { label: 'Testing', value: 'Lab' },
                { label: 'Partners', value: 'B2B' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 border border-white/10 p-6">
                  <div className="text-3xl font-bold text-white font-display mb-1">{item.value}</div>
                  <div className="text-sm text-stone-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 lg:py-20 bg-white">
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
                src="/images/infrastructure/sustainable-utility-operations.png"
                alt="Sustainable dairy plant utility operations"
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
              <h2 className="section-title font-heading mb-6">Sustainable Operations</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                We're committed to sustainable practices that protect the environment while delivering the highest quality products.
              </p>

              <div className="space-y-4">
                {[
                  'Energy-efficient refrigeration systems',
                  'Water recycling and conservation',
                  'Eco-friendly packaging materials',
                  'Waste reduction programs',
                  'Solar-powered facilities',
                  'Carbon footprint monitoring',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full" />
                    </div>
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
