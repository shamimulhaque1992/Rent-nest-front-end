import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog — RentNest",
  description:
    "Tips, guides, and insights for tenants and landlords on the RentNest platform.",
};

const posts = [
  {
    tag: "Tenant Tips",
    tagColor:
      "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300",
    title: "10 Things to Check Before Signing a Rental Agreement",
    excerpt:
      "Before you commit to a lease, make sure you've reviewed these key clauses — from maintenance responsibilities to early termination fees.",
    date: "June 12, 2025",
    readTime: "5 min read",
  },
  {
    tag: "Landlord Guide",
    tagColor:
      "bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300",
    title: "How to Write a Property Listing That Attracts Quality Tenants",
    excerpt:
      "A great listing is more than photos. Learn how to craft descriptions, set competitive pricing, and highlight the right amenities.",
    date: "May 28, 2025",
    readTime: "4 min read",
  },
  {
    tag: "Platform Update",
    tagColor:
      "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300",
    title: "Introducing Stripe Subscription Payments on RentNest",
    excerpt:
      "We've upgraded our payment system to support recurring monthly rent payments via Stripe — making rent collection seamless for landlords.",
    date: "May 10, 2025",
    readTime: "3 min read",
  },
  {
    tag: "Tenant Tips",
    tagColor:
      "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300",
    title: "How to Use RentNest's Advanced Filters to Find Your Ideal Home",
    excerpt:
      "Our filter system lets you narrow down by category, price range, location, and availability. Here's how to get the most out of it.",
    date: "April 22, 2025",
    readTime: "3 min read",
  },
  {
    tag: "Landlord Guide",
    tagColor:
      "bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300",
    title: "Managing Rental Requests: Approve, Reject, and Complete",
    excerpt:
      "Your landlord dashboard gives you full control over incoming requests. Learn the workflow from approval to marking a rental as complete.",
    date: "April 5, 2025",
    readTime: "4 min read",
  },
  {
    tag: "Platform Update",
    tagColor:
      "bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-300",
    title: "Role-Based Dashboards: What's New for Tenants, Landlords & Admins",
    excerpt:
      "We've rolled out major dashboard improvements across all three roles. Here's a breakdown of what changed and why.",
    date: "March 18, 2025",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/10 rounded-full px-4 py-1 text-xs text-indigo-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Insights &amp; Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            The RentNest <span className="text-indigo-300">Blog</span>
          </h1>
          <p className="text-indigo-100/75 max-w-xl mx-auto text-sm leading-relaxed">
            Tips for tenants, guides for landlords, and the latest platform
            updates — all in one place.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <BookOpen className="h-3.5 w-3.5" />
            Latest Articles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Recent Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col gap-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className={`self-start inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${post.tagColor}`}
              >
                {post.tag}
              </span>
              <div className="flex-1 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  {post.date} · {post.readTime}
                </span>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
