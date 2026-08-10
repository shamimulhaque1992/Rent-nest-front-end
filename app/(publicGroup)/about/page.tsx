import {
  BadgeCheck,
  Building2,
  CreditCard,
  LayoutDashboard,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About Us — RentNest",
  description:
    "Learn about RentNest — the platform connecting landlords and tenants with verified listings, secure payments, and role-based dashboards.",
};

const stats = [
  { label: "Properties Listed", value: "500+", icon: Building2 },
  { label: "Verified Landlords", value: "120+", icon: BadgeCheck },
  { label: "Happy Tenants", value: "1,000+", icon: Users },
  { label: "Payments Processed", value: "$2M+", icon: CreditCard },
];

const values = [
  {
    title: "Transparency",
    desc: "Every listing is verified. No hidden fees, no surprises — just honest rental information.",
    color:
      "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60",
  },
  {
    title: "Security",
    desc: "Payments are handled via Stripe. Your financial data is never stored on our servers.",
    color:
      "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60",
  },
  {
    title: "Simplicity",
    desc: "From browsing to booking, every step is designed to be intuitive and fast.",
    color:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60",
  },
  {
    title: "Empowerment",
    desc: "Landlords get full control over listings. Tenants get full visibility into their rental journey.",
    color:
      "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/60",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/10 rounded-full px-4 py-1 text-xs text-indigo-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Built for Renters &amp;{" "}
            <span className="text-indigo-300">Landlords Alike</span>
          </h1>
          <p className="text-indigo-100/75 max-w-2xl mx-auto text-sm leading-relaxed">
            RentNest was founded with a single mission — make renting simple,
            transparent, and stress-free for everyone involved. We connect
            verified landlords with tenants looking for their next home.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm text-center"
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60">
                <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                {value}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <LayoutDashboard className="h-3.5 w-3.5" />
          Our Mission
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 max-w-2xl">
          Redefining the Rental Experience
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
          The rental market has long been fragmented — scattered listings,
          opaque pricing, and unreliable communication. RentNest brings
          everything under one roof. Landlords list and manage properties with
          ease. Tenants browse, request, and pay securely. Admins keep the
          platform healthy and fair. Every role has a purpose-built dashboard
          tailored to their needs.
        </p>
      </section>

      {/* Values */}
      <section className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              What We Stand For
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc, color }) => (
              <div
                key={title}
                className="flex flex-col gap-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`h-10 w-10 rounded-xl flex items-center justify-center border ${color}`}
                >
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
