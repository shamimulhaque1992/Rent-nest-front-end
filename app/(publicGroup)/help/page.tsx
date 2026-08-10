import { ArrowRight, HelpCircle, LifeBuoy, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Help & Support — RentNest",
  description:
    "Find answers to common questions about RentNest — listings, payments, accounts, and more.",
};

const faqs = [
  {
    category: "Getting Started",
    color:
      "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60",
    items: [
      {
        q: "How do I create an account?",
        a: "Click 'Log in' in the top navigation, then select 'Register'. Choose your role — Tenant or Landlord — fill in your details, and you're ready to go.",
      },
      {
        q: "What roles are available on RentNest?",
        a: "RentNest supports three roles: Tenant (browse & request properties), Landlord (list & manage properties), and Admin (platform management). Your role is set at registration.",
      },
    ],
  },
  {
    category: "Listings & Rentals",
    color:
      "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60",
    items: [
      {
        q: "How do I request to rent a property?",
        a: "Browse to any available property, open its detail page, and click 'Request Rental'. You can include a message to the landlord. The landlord will then approve or reject your request.",
      },
      {
        q: "Can I cancel a rental request?",
        a: "Yes. Head to your Tenant Dashboard, find the request under 'My Requests', and cancel it before the landlord approves it.",
      },
      {
        q: "How do I list a property as a landlord?",
        a: "Log in as a Landlord, go to your Dashboard, and click 'Add Property'. Fill in the title, description, price, address, category, amenities, and upload images.",
      },
    ],
  },
  {
    category: "Payments",
    color:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60",
    items: [
      {
        q: "How are payments processed?",
        a: "All payments are handled securely via Stripe. Your card details are never stored on RentNest servers — Stripe manages all sensitive financial data.",
      },
      {
        q: "What happens if my payment fails?",
        a: "If a payment fails, you'll receive a notification. You can retry the payment from your Tenant Dashboard under 'Payment History'.",
      },
    ],
  },
  {
    category: "Account & Security",
    color:
      "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/60",
    items: [
      {
        q: "How do I update my profile?",
        a: "Navigate to your Dashboard and click on your profile section. You can update your name, bio, phone number, and avatar from there.",
      },
      {
        q: "My account has been banned. What should I do?",
        a: "If your account has been banned, please contact our support team at support@rentnest.com with your account email and a brief explanation. Our admin team will review your case.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/10 rounded-full px-4 py-1 text-xs text-indigo-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Support Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            How Can We <span className="text-indigo-300">Help You?</span>
          </h1>
          <p className="text-indigo-100/75 max-w-xl mx-auto text-sm leading-relaxed">
            Browse our frequently asked questions below. Can&apos;t find what
            you&apos;re looking for? Reach out to our support team directly.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-10">
        {faqs.map(({ category, color, items }) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center border ${color}`}
              >
                <HelpCircle className="h-4 w-4" />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-2"
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {q}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 flex flex-col items-center gap-4 text-center">
          <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-white/10 border border-white/10">
            <LifeBuoy className="h-6 w-6 text-indigo-300" />
          </div>
          <h2 className="text-xl font-extrabold">Still need help?</h2>
          <p className="text-indigo-100/70 text-sm max-w-md">
            Our support team is available Monday–Friday, 9am–6pm PST. We
            typically respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 hover:bg-indigo-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
          >
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
