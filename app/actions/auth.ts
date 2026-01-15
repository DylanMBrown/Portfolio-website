import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function signInWithOAuth(provider: string) {
  await signIn(provider, { redirectTo: "/dashboard" });
}

export async function signInWithEmail(formData: FormData) {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return { success: true };
}

export async function signUp(
  prevState: { success: boolean; errors?: Record<string, string[]> } | null,
  formData: FormData,
) {
  const validatedFields = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return { success: true };
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
}

export async function getSession() {
  return await auth();
}

export async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    return { authorized: false };
  }
  return { authorized: true, user: session.user };
}
