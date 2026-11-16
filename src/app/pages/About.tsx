import { motion } from 'motion/react';
import { Award, Users, Target, Heart, TrendingUp, Globe, Shield, Leaf, Eye, Handshake, MapPin, Factory, Truck, Cpu } from 'lucide-react';

export function About() {
  const milestones = [
    { year: '2009', title: 'Founded', description: 'Started with a clear commitment to trusted dairy products' },
    { year: '2012', title: 'Expansion', description: 'Strengthened processing and distribution capabilities' },
    { year: '2015', title: 'Regional Leader', description: 'Serving 5,000+ families daily' },
    { year: '2016', title: 'ISO Certified', description: 'Achieved ISO 9001:2015 certification' },
    { year: '2020', title: 'Innovation', description: 'Launched premium product line' },
    { year: '2026', title: 'Growth', description: '10,000+ happy customers' },
  ];

  const values = [
    { icon: Shield, title: 'Quality First', description: 'Uncompromising standards in every product we deliver' },
    { icon: Heart, title: 'Customer Care', description: "Your family's health and satisfaction is our priority" },
    { icon: Leaf, title: 'Sustainability', description: 'Eco-friendly practices from farm to delivery' },
    { icon: Award, title: 'Excellence', description: 'Continuous improvement in all our processes' },
  ];

  const capabilities = [
    {
      icon: MapPin,
      title: 'Strategic Location',
      description:
        'Our 6-acre facility is located in Songaon, Nashik, positioned near the Nashik-Aurangabad and Mumbai-Agra highways with access to Nashik, Mumbai, Aurangabad, Pune, and Surat.',
    },
    {
      icon: Truck,
      title: 'Robust Procurement',
      description:
        'A deep-rooted milk procurement network across Nashik district with 28 Bulk Milk Cooler centers and 120 village-level centers supported by local community ties.',
    },
    {
      icon: Factory,
      title: 'Infrastructure & Capacity',
      description:
        'A 100,000 sq.ft. milk processing unit with daily storage and processing capacity of 250,000 liters, designed to expand by another 200,000 liters per day.',
    },
    {
      icon: Cpu,
      title: 'Expertise & Technology',
      description:
        'Technically skilled professionals, latest machinery, and utilities equipped to support operations up to 300,000 liters per day.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/lifestyle/dahi-lifestyle.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-900/60 to-emerald-900/30" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">Since 2009</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">About Dairy Power</h1>
            <p className="text-xl text-white/70">Building trust through quality, one family at a time</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-18 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Journey</span>
              <h2 className="section-title-display mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-stone-500 leading-relaxed">
                <p>Founded in 2009, Dairy Power has grown from a focused dairy venture into a modern milk and milk products manufacturer rooted in Songaon, Nashik. Our facility is strategically placed near major highways and regional business hubs, helping us serve both consumer and institutional requirements efficiently.</p>
                <p>Our operations combine strong milk procurement, technical dairy expertise, modern processing capacity, and practical cold-chain discipline. With 28 Bulk Milk Cooler centers and 120 village-level centers across Nashik district, our supply network is built close to the farming communities that support us.</p>
                <p>Today, Dairy Power operates with a 100,000 sq.ft. processing unit, high-volume daily handling capability, FSSAI licensing, and a commitment to food safety, hygiene, and consistent product quality.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[2rem] blur-3xl opacity-15" />
              <img src="/images/lifestyle/milk-kojagiri.jpg" alt="Dairy Power Production Facility" className="relative rounded-3xl shadow-2xl w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catalogue About Highlights */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Company Strength</span>
            <h2 className="section-title-display mb-6">Built on Capacity, Procurement, and Technology</h2>
            <p className="section-subtitle">
              Dairy Power's catalogue positions the company as a capable dairy partner with strong location advantage, deep procurement coverage, modern infrastructure, and scalable utilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group rounded-3xl border p-7 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl ${
                    index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/65' : 'border-amber-100 bg-amber-50/65'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                      <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-stone-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { value: '6 Acres', label: 'Songaon facility' },
              { value: '100,000', label: 'sq.ft. processing unit' },
              { value: '250,000 L', label: 'daily capacity' },
              { value: '120', label: 'village-level centers' },
            ].map((item) => (
              <div key={item.label} className={`rounded-2xl border p-5 text-center shadow-sm ${item.label === 'daily capacity' ? 'border-amber-100 bg-amber-50/75' : 'border-emerald-100 bg-emerald-50/65'}`}>
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 font-display mb-1">{item.value}</div>
                <div className="text-sm text-stone-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-18 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-10 lg:p-12 text-white shadow-2xl">
              <Target className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">Our Mission</h2>
              <p className="text-emerald-100 text-lg leading-relaxed">
                To provide the highest quality dairy products through sustainable farming practices, rigorous quality control, and a commitment to customer satisfaction that ensures every family receives pure, nutritious, and fresh dairy products daily.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-10 lg:p-12 text-white shadow-2xl">
              <Globe className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">Our Vision</h2>
              <p className="text-amber-100 text-lg leading-relaxed">
                To become India's most trusted dairy brand, recognized for innovation, quality, and sustainability. We envision a future where every household has access to premium dairy products that contribute to healthier, happier lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance & Vision */}
      <section className="py-18 lg:py-24 bg-stone-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Governance & Vision</span>
              <h2 className="section-title-display mb-6">Guided by Responsible Growth</h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                Dairy Power's management approach is built around operational discipline, product quality, partner trust, and practical dairy manufacturing expertise. Public leadership profiles should be added only when final names, designations, and approved photographs are available.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Eye, label: 'Long-term Vision' },
                  { icon: Shield, label: 'Quality Governance' },
                  { icon: Handshake, label: 'Partner Trust' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-stone-100 bg-stone-50 p-5">
                      <Icon className="w-7 h-7 text-emerald-600 mb-3" strokeWidth={1.7} />
                      <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <div className="grid gap-5">
              {[
                { title: 'Business Direction', focus: 'Long-term growth across retail, distributor, institutional, and B2B supply channels.' },
                { title: 'Manufacturing Discipline', focus: 'Focus on hygienic processing, utility readiness, batch control, and scalable plant operations.' },
                { title: 'Partner Confidence', focus: 'Clear communication for bulk buyers, distributors, and institutional partners evaluating supply reliability.' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-3xl border border-stone-100 bg-stone-50 p-6 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-emerald-600" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-stone-500 leading-relaxed">{item.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-18 lg:py-24 section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src="/images/lifestyle/values-dairy-processing.png" alt="Modern hygienic dairy processing machinery" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl border border-stone-100">
                <div className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-1">Core Values</div>
                <div className="text-2xl font-bold text-slate-900 font-display">Quality, trust, care, and progress in every decision.</div>
              </div>
            </motion.div>

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">What We Stand For</span>
                <h2 className="section-title-display mb-6">Our Values</h2>
                <p className="section-subtitle">The principles that guide our products, partnerships, and daily operations.</p>
              </motion.div>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className={`group flex items-start gap-5 rounded-2xl border p-5 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg ${
                        index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/60' : 'border-amber-100 bg-amber-50/60'
                      }`}
                    >
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                        <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{value.title}</h3>
                        <p className="text-stone-500 leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-18 lg:py-24 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Timeline</span>
            <h2 className="section-title-display mb-6">Our Journey</h2>
            <p className="section-subtitle mx-auto">Key milestones that shaped Dairy Power</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`info-card hover-lift ${index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/65' : 'border-amber-100 bg-amber-50/65'}`}>
                <div className="text-4xl font-bold text-gradient mb-4 font-display">{milestone.year}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                <p className="text-stone-500">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-18 lg:py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Pride</span>
            <h2 className="section-title-display mb-6">Our Products, Our Pride</h2>
            <p className="section-subtitle mx-auto">Crafted with care and delivered with love</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/lifestyle/ghee-lifestyle.jpg', alt: 'Pure Ghee' },
              { src: '/images/lifestyle/paneer-lifestyle.jpg', alt: 'Fresh Paneer' },
              { src: '/images/lifestyle/chaas-lifestyle.jpg', alt: 'Masala Chaas' },
              { src: '/images/lifestyle/shrikhand-lifestyle.jpg', alt: 'Sweet Shrikhand' },
            ].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl overflow-hidden aspect-square group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Users, value: '10,000+', label: 'Happy Families' },
              { icon: Award, value: '17+', label: 'Years Experience' },
              { icon: TrendingUp, value: '250,000 L', label: 'Daily Capacity' },
              { icon: Shield, value: '100%', label: 'Quality Assured' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                  <Icon className="w-10 h-10 text-emerald-500 mx-auto mb-4" strokeWidth={1.5} />
                  <div className="stat-value text-gradient font-display">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
