"use server";

export type IContactState = {
  success: boolean;
  message: string;
};

export const contactAction = async (
  _prev: IContactState,
  formData: FormData,
): Promise<IContactState> => {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // In a real app you'd send an email or store in DB here.
  // For now we simulate a successful submission.
  return {
    success: true,
    message:
      "Thanks for reaching out! We'll get back to you within 24 hours.",
  };
};
