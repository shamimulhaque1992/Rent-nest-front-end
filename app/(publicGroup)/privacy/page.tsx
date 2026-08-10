import { ArrowRight, Lock, ScrollText, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy & Terms — RentNest",
  description:
    "Read RentNest's privacy policy and terms of service. We're committed to protecting your data and being transparent about how we operate.",
};

const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly — such as your name, email address, phone number, and profile details — when you register or update your account. We also collect usage data such as pages visited and actions taken on the platform to improve our services.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to operate and improve RentNest, process rental requests and payments, send transactional notifications, and provide customer support. We do not sell your personal data to third parties.",
  },
  {
    title: "Payment Data",
    content:
      "All payment processing is handled by Stripe. RentNest does not store your credit card or banking information. Stripe's privacy policy governs the handling of your payment data.",
  },
  {
    title: "Cookies",
    content:
      "We use HTTP-only cookies to manage authentication sessions (access and refresh tokens). These cookies are essential for the platform to function and are not used for advertising or tracking purposes.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your account data for as long as your account is active. You may request deletion of your account and associated data by contacting support@rentnest.com.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at support@rentnest.com.",
  },
];

const termsSections = [
  {
    title: "Acceptance of Terms",
    content:
      "By creating an account or using RentNest, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    title: "User Responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials. You agree not to use RentNest for any unlawful purpose, to post false or misleading listings, or to harass other users.",
  },
  {
    title: "Landlord Obligations",
    content:
      "Landlords are responsible for ensuring their listings are accurate, up-to-date, and comply with local rental laws. RentNest reserves the right to remove listings that violate our policies.",
  },
  {
    title: "Tenant Obligations",
    content:
      "Tenants agree to use the platform in good faith, submit rental requests only for genuine interest, and complete payments for approved rentals in a timely manner.",
  },
  {
    title: "Account Suspension",
    content:
      "RentNest reserves the right to suspend or ban accounts that violate these terms, engage in fraudulent activity, or receive repeated complaints from other users.",
  },
  {
    title: "Limitation of Liability",
    content:
      "RentNest acts as a platform connecting landlords and tenants. We are not a party to any rental agreement and are not liable for disputes between landlords and tenants. Use the platform at your own discretion.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/10 rounded-full px-4 py-1 text-xs text-indigo-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Privacy &amp; <span className="text-indigo-300">Terms</span>
          </h1>
          <p className="text-indigo-100/75 max-w-xl mx-auto text-sm leading-relaxed">
            We believe in full transparency. Read how we handle your data and
            what you agree to when using RentNest.
          </p>
          <p className="text-indigo-200/50 text-xs mt-4">
            Last updated: June 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <Lock className="h-3.5 w-3.5" />
            Privacy Policy
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            How We Handle Your Data
          </h2>
        </div>
        <div className="space-y-4">
          {privacySections.map(({ title, content }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-2"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="border-t border-slate-200 dark:border-slate-800" />
      </div>

      {/* Terms of Service */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
            <ScrollText className="h-3.5 w-3.5" />
            Terms of Service
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Rules of the Platform
          </h2>
        </div>
        <div className="space-y-4">
          {termsSections.map(({ title, content }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-2"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Questions about our privacy practices or terms?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-sm font-semibold text-white transition-all"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
