import Link from "next/link";
import { Building2, GitBranch, Mail, MessageCircle } from "lucide-react";
import { IUser } from "@/lib/types";

const socials = [
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:support@rentnest.com", label: "Email" },
];

export function AppFooter({ user }: { user: IUser }) {
  const accountLinks = user.success
    ? [
        {
          label: "Dashboard",
          href:
            user?.data?.role === "ADMIN"
              ? "/dashboard/admin"
              : user?.data?.role === "TENANT"
                ? "/dashboard/tenant"
                : user?.data?.role === "LANDLORD"
                  ? "/dashboard/landlord"
                  : "/",
        },
      ]
    : [
        { label: "Log In", href: "/auth/login" },
        { label: "Register", href: "/auth/register" },
      ];
  const footerLinks = [
    {
      heading: "Platform",
      links: [
        { label: "Home", href: "/" },
        { label: "Properties", href: "/properties" },
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      heading: "Support",
      links: [
        { label: "Help & FAQ", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy & Terms", href: "/privacy" },
      ],
    },
    { heading: "Account", links: accountLinks },
  ];
  return (
    <footer className="border-t bg-background/95 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="font-sans text-lg font-semibold tracking-tight"
            >
              RENT 🏠 NEST
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Connecting landlords and tenants with verified listings, secure
              Stripe payments, and role-based dashboards — all in one place.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-8 w-8 rounded-lg flex items-center justify-center border border-border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground">
                {heading}
              </p>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" />
            <span>
              &copy; {new Date().getFullYear()} RentNest. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
