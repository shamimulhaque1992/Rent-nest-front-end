import { Mail, MapPin, MessageSquare, Phone, Sparkles } from "lucide-react";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Contact Us — RentNest",
  description:
    "Get in touch with the RentNest team. We're here to help with any questions about listings, payments, or your account.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@rentnest.com",
    color:
      "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) 123-4567",
    color:
      "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "123 Nest Ave, San Francisco, CA",
    color:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/10 rounded-full px-4 py-1 text-xs text-indigo-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            We&apos;d love to hear from you
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Get in <span className="text-indigo-300">Touch</span>
          </h1>
          <p className="text-indigo-100/75 max-w-xl mx-auto text-sm leading-relaxed">
            Have a question about a listing, a payment, or your account? Our
            team is ready to help — usually within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactInfo.map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="flex items-start gap-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
            >
              <div
                className={`h-11 w-11 rounded-xl flex items-center justify-center border shrink-0 ${color}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">
                  {label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 space-y-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <MessageSquare className="h-3.5 w-3.5" />
              Send a Message
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Fill out the form below
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We&apos;ll respond to your inquiry as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
