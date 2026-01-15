"use client";

import { useFormState } from "react-dom";
import { signUp } from "@/app/actions/auth";
import Link from "next/link";

interface SignInFormState {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
}

const initialState: SignInFormState = { success: true };

export function SignInForm({
  mode = "signin",
}: {
  mode?: "signin" | "signup";
}) {
  const [state, formAction, pending] = useFormState(signUp, initialState);
}
