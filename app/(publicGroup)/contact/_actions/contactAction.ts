"use server";

export type IContactState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

export const contactAction = async (
  _prev: IContactState,
  formData: FormData,
): Promise<IContactState> => {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Server-side validation (mirrors client-side for safety)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (message.length > 5000) {
    return {
      success: false,
      message: "Message cannot exceed 5000 characters.",
    };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        message:
          errorData?.message ||
          "Failed to send your message. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thanks for reaching out! We'll get back to you within 24 hours.",
    };
  } catch {
    return {
      success: false,
      message: "A network error occurred. Please check your connection and try again.",
    };
  }
};
