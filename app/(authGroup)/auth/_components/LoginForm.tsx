"use client";

import React, { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ILoginStateType, loginAction } from "../_actions/loginAction";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { KeyRound, ShieldCheck, User, Home } from "lucide-react";

const initialState: ILoginStateType = {
  success: false,
  statusCode: 0,
  message: "",
  data: {
    accessToken: "",
    refreshToken: "",
  },
};

const demoCredentials = [
  {
    role: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    icon: ShieldCheck,
    color:
      "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border-violet-200 dark:border-violet-800/60",
    badgeColor: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
  },
  {
    role: "Landlord",
    email: "testlandlord5@gmail.com",
    password: "123456",
    icon: Home,
    color:
      "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800/60",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
  },
  {
    role: "Tenant",
    email: "demotanent@gmail.com",
    password: "123456",
    icon: User,
    color:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
  },
];

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectToUrl = searchParams.get("redirectTo") || "";
  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectToUrl),
    initialState,
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      return;
    }
    if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., name@example.com)";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  const applyDemoCredentials = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    setErrors({});
    setPopoverOpen(false);
  };

  return (
    <form action={action} onSubmit={handleSubmit}>
      <CardContent className="space-y-4 pt-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            className="h-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-xs text-rose-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-xs text-rose-500">{errors.password}</p>
          )}
        </div>

        {/* Demo Credentials Popover */}
        <div className="flex justify-end">
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-xs h-8 gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <KeyRound className="h-3.5 w-3.5" />
                Demo Credentials
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 p-3">
              <div className="mb-3">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Demo Accounts
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Click &quot;Apply&quot; to auto-fill credentials and log in.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {demoCredentials.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={cred.role}
                      className={`flex items-center justify-between gap-3 rounded-xl border p-3 ${cred.color}`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className="h-4 w-4 shrink-0" />
                        <div className="min-w-0">
                          <span
                            className={`inline-block text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-md mb-0.5 ${cred.badgeColor}`}
                          >
                            {cred.role}
                          </span>
                          <p className="text-xs font-medium truncate">
                            {cred.email}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {cred.password}
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        className="h-7 text-xs shrink-0 cursor-pointer"
                        onClick={() =>
                          applyDemoCredentials(cred.email, cred.password)
                        }
                      >
                        Apply
                      </Button>
                    </div>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 pt-4">
        <Button
          type="submit"
          className="w-full h-10 font-semibold cursor-pointer"
          disabled={pending}
        >
          {pending ? "Submitting..." : "Login"}
        </Button>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?
          <Link
            href="/auth/register"
            className="text-primary underline font-medium hover:text-primary/80 transition-colors"
          >
            Register
          </Link>
        </div>
      </CardFooter>
    </form>
  );
};

export default LoginForm;
