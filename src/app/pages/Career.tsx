import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { BriefcaseBusiness, Upload, Send, Users, GraduationCap, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: '',
    experience: '',
    message: '',
  });
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `City: ${formData.city}`,
      `Preferred role / department: ${formData.role || 'Not specified'}`,
      `Experience: ${formData.experience || 'Not specified'}`,
      `Selected CV file: ${fileName || 'Not attached'}`,
      '',
      formData.message,
      '',
      'Please attach the CV/resume file before sending this email.',
    ].join('\n');

    window.location.href = `mailto:contact@dairypower.in?subject=${encodeURIComponent(`Career application: ${formData.name}`)}&body=${encodeURIComponent(body)}`;
    toast.success('Opening your email client', { description: 'Please attach your CV before sending the prepared application email.' });
  };

  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/lifestyle/factory.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-900/60 to-emerald-900/25" />
        </div>
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-4">
              <BriefcaseBusiness className="w-4 h-4" />
              Careers
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Work With Dairy Power</h1>
            <p className="text-xl text-white/75 max-w-2xl">
              Submit your profile once. When a suitable role opens, our team can directly contact shortlisted candidates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Talent Pool</span>
              <h2 className="section-title-display mb-6">Simple Application, Easier Follow-Up</h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                Instead of maintaining a changing list of openings, this page collects candidate details and CVs for future matching by the Dairy Power team.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Users, label: 'Plant & Operations' },
                  { icon: GraduationCap, label: 'Quality & Technical' },
                  { icon: MapPin, label: 'Sales & Distribution' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl bg-white border border-stone-100 p-5 shadow-sm">
                      <Icon className="w-7 h-7 text-emerald-600 mb-3" strokeWidth={1.7} />
                      <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-stone-100 bg-white p-6 lg:p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900 font-display mb-2">Application Form</h2>
              <p className="text-stone-500 mb-8">Add your details and upload your CV for future role consideration.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField label="Full name *"><input className="form-input" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></FormField>
                  <FormField label="Email address *"><input className="form-input" required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></FormField>
                  <FormField label="Phone number *"><input className="form-input" required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></FormField>
                  <FormField label="City *"><input className="form-input" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} /></FormField>
                  <FormField label="Preferred role / department"><input className="form-input" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} /></FormField>
                  <FormField label="Experience"><input className="form-input" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} /></FormField>
                </div>
                <label className="block rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 p-6 text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors">
                  <Upload className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <span className="font-semibold text-slate-900">{fileName || 'Upload CV / Resume'}</span>
                  <span className="block text-sm text-stone-500 mt-1">PDF or DOC file preferred</span>
                  <input type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')} />
                </label>
                <FormField label="Additional details"><textarea className="form-textarea" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></FormField>
                <button type="submit" className="w-full btn-primary text-lg py-5">
                  Submit Application
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
