"use server";

import { z } from "zod";
import type { ContactFormState } from "@/types";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    console.log("Form submitted:", { name, email, message });

    return {
      message: "Thank you for your message! I will get back to you soon.",
    };
  } catch (error) {
    return {
      message: "An error occurred. Please try again later.",
    };
  }
}
