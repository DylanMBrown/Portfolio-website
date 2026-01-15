"use client";

import { useFormState } from "react-dom";
import { submitContact } from "@/app/actions/contact";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction, pending] = useFormState(
    submitContact,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="Your name"
        />
        {state?.errors?.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="your@email.com"
        />
        {state?.errors?.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Your message..."
        />
        {state?.errors?.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {state?.message && (
        <div
          className={`p-4 rounded-lg ${
            state.errors
              ? "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
              : "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
          }`}
          aria-live="polite"
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
