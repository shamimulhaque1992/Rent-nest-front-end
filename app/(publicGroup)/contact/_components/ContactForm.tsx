"use client";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactAction, IContactState } from "../_actions/contactAction";
const initialState: IContactState = { success: false, message: "" };
export default function ContactForm() {
  const [state, action, pending] = useActionState(contactAction, initialState);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const subject = ((formData.get("subject") as string) || "").trim();
    const message = ((formData.get("message") as string) || "").trim();
    const newErrors: typeof errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name) {
      newErrors.name = "Full name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., name@example.com)";
    }
    if (!subject) {
      newErrors.subject = "Subject is required";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }
    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };
  return (
    <form action={action} onSubmit={handleSubmit} className="space-y-4">
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {" "}
        <div className="space-y-2">
          {" "}
          <Label htmlFor="name" className="text-sm font-medium">
            {" "}
            Full Name <span className="text-rose-500">*</span>{" "}
          </Label>{" "}
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            className="h-10"
          />{" "}
          {errors.name && (
            <p className="text-xs text-rose-500">{errors.name}</p>
          )}{" "}
        </div>{" "}
        <div className="space-y-2">
          {" "}
          <Label htmlFor="email" className="text-sm font-medium">
            {" "}
            Email Address <span className="text-rose-500">*</span>{" "}
          </Label>{" "}
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            className="h-10"
          />{" "}
          {errors.email && (
            <p className="text-xs text-rose-500">{errors.email}</p>
          )}{" "}
        </div>{" "}
      </div>{" "}
      <div className="space-y-2">
        {" "}
        <Label htmlFor="subject" className="text-sm font-medium">
          {" "}
          Subject <span className="text-rose-500">*</span>{" "}
        </Label>{" "}
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help you?"
          className="h-10"
        />{" "}
        {errors.subject && (
          <p className="text-xs text-rose-500">{errors.subject}</p>
        )}{" "}
      </div>{" "}
      <div className="space-y-2">
        {" "}
        <Label htmlFor="message" className="text-sm font-medium">
          {" "}
          Message <span className="text-rose-500">*</span>{" "}
        </Label>{" "}
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className="resize-none"
        />{" "}
        {errors.message && (
          <p className="text-xs text-rose-500">{errors.message}</p>
        )}{" "}
      </div>{" "}
      <Button
        type="submit"
        className="w-full h-10 font-semibold cursor-pointer"
        disabled={pending}
      >
        {" "}
        {pending ? "Sending..." : "Send Message"}{" "}
      </Button>{" "}
    </form>
  );
}
