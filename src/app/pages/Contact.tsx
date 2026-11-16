import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useSearchParams } from 'react-router-dom';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const subject = searchParams.get('subject');
    if (subject) {
      setFormData((current) => ({ ...current, subject }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:info@dairypower.in?subject=${encodeURIComponent(formData.subject || 'Website enquiry')}&body=${encodeURIComponent(body)}`;
    toast.success('Opening your email client', { description: 'Please send the prepared email to complete the enquiry.' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['080109 00630'],
      action: 'Call us',
      href: 'tel:+918010900630',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dairypower.in', 'support@dairypower.in'],
      action: 'Send email',
      href: 'mailto:info@dairypower.in',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Gat No. 555/1, At Songaon, Post Saikheda', 'Bhausahebnagar, Maharashtra 422210'],
      action: 'Get directions',
      href: 'https://www.google.com/maps/search/?api=1&query=Gat%20No.%20555%2F1%2C%20At%20Songaon%2C%20Post%20Saikheda%2C%20Tal.%20Niphad%2C%20Dist.%20Nashik%20422210',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 6:00 AM - 8:00 PM', 'Sunday: 6:00 AM - 12:00 PM'],
      action: 'Visit us',
      href: 'https://www.google.com/maps/search/?api=1&query=Dairy%20Power%20Songaon%20Saikheda%20Nashik',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.08, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400 rounded-full blur-3xl"
          />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">We're Here to Help</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">Get in Touch</h1>
            <p className="text-xl text-white/70">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`info-card hover-lift text-center ${index % 2 === 0 ? 'border-emerald-100 bg-emerald-50/65' : 'border-amber-100 bg-amber-50/65'}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-5">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-stone-600">{detail}</p>
                    ))}
                  </div>
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    {info.action} →
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-20 section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 font-heading mb-4">Send us a Message</h2>
                <p className="text-lg text-stone-600">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="080109 00630"
                    />
                  </div>

                  <div>
                    <label className="form-label">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Select subject</option>
                      {formData.subject && !['product', 'b2b', 'career', 'feedback', 'complaint', 'other'].includes(formData.subject) && (
                        <option value={formData.subject}>{formData.subject}</option>
                      )}
                      <option value="product">Product Inquiry</option>
                      <option value="b2b">B2B / Bulk Enquiry</option>
                      <option value="career">Career / Job Application</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary text-lg py-5">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Gat%20No.%20555%2F1%2C%20At%20Songaon%2C%20Post%20Saikheda%2C%20Tal.%20Niphad%2C%20Dist.%20Nashik%20422210&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dairy Power Location"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-3xl p-8 lg:p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-200 mb-1">Call Us</p>
                      <a href="tel:+918010900630" className="font-bold text-lg hover:underline">080109 00630</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-200 mb-1">Email Us</p>
                      <a href="mailto:info@dairypower.in" className="font-bold text-lg hover:underline">info@dairypower.in</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-200 mb-1">Office Hours</p>
                      <p className="font-bold">Mon - Sat: 6 AM - 8 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title font-heading mb-6">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What are your delivery timings?',
                a: 'We deliver fresh dairy products daily between 6:00 AM to 10:00 AM. For special requests, please contact our customer service.',
              },
              {
                q: 'Do you offer bulk orders for events?',
                a: 'Yes, we provide bulk orders for events, parties, and corporate functions. Please contact us at least 48 hours in advance.',
              },
              {
                q: 'How can I become a distributor?',
                a: 'Use the B2B Supply page or select B2B / Bulk Enquiry in the contact form. Our business team will review your requirement and respond.',
              },
              {
                q: 'What quality certifications do you have?',
                a: 'Dairy Power publishes FSSAI license number 11521999000154 and follows documented quality checks. Additional business documentation can be requested through the B2B Supply page.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-stone-100 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-3">{faq.q}</h3>
                <p className="text-stone-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
