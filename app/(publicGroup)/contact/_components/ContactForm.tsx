"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactAction, IContactState } from "../_actions/contactAction";

const initialState: IContactState = { success: false, message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(contactAction, initialState);

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            className="h-10"
          />
        </div>
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
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">
          Subject <span className="text-rose-500">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help you?"
          className="h-10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-rose-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full h-10 font-semibold cursor-pointer"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
