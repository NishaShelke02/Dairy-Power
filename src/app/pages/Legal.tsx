import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'This policy explains how Dairy Power handles information submitted through website enquiry forms and direct contact links.',
    sections: [
      ['Information we collect', 'Name, phone number, email address, city, company details, enquiry requirements, career information, and any details voluntarily shared through forms or email.'],
      ['How we use information', 'To respond to product enquiries, B2B requirements, distributor discussions, career applications, and customer support requests.'],
      ['Data sharing', 'Information is used by Dairy Power teams and service partners only where required to respond to an enquiry or operate the business relationship.'],
      ['Retention', 'Enquiry information may be retained for follow-up, compliance, and business records unless deletion is requested.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'These terms cover general website use and enquiry submission for Dairy Power products and services.',
    sections: [
      ['Website information', 'Product details, pack sizes, storage guidance, and availability may change by market, batch, and distribution requirements.'],
      ['Enquiries', 'Submitting an enquiry does not create a confirmed order, supply commitment, distributorship, or employment offer.'],
      ['Catalogue content', 'Images and descriptions are provided for product discovery and may differ from final packaging or regional availability.'],
      ['Liability', 'Users should verify commercial, nutritional, storage, and regulatory details with the Dairy Power team before business decisions.'],
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    intro: 'This website currently uses basic browser functionality and may use analytics or embedded services such as maps in production.',
    sections: [
      ['Essential behavior', 'The site uses normal browser storage and routing behavior required for navigation and interactive features.'],
      ['Embedded services', 'Third-party embeds such as maps may use their own cookies or tracking technologies.'],
      ['Analytics', 'If analytics are enabled, they should be used to understand aggregate page visits, product interest, and enquiry conversion.'],
      ['Control', 'Users can manage cookies through browser settings. Some embedded services may be affected if cookies are blocked.'],
    ],
  },
} as const;

export function Legal() {
  const { page } = useParams<{ page: keyof typeof legalContent }>();
  const content = page ? legalContent[page] : undefined;

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-slate-950 text-white">
        <div className="container-custom">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <ShieldCheck className="mb-5 h-10 w-10 text-emerald-300" />
            <h1 className="mb-5 text-5xl font-bold font-display">{content.title}</h1>
            <p className="text-lg leading-relaxed text-white/75">{content.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-custom max-w-4xl">
          <div className="space-y-5">
            {content.sections.map(([title, body]) => (
              <section key={title} className="rounded-2xl border border-stone-100 bg-stone-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                </div>
                <p className="leading-relaxed text-stone-600">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
