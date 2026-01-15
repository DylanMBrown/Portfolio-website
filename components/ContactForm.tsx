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
    <form action={formAction} className="space-y-6">
      <div className="group">
        <label
          htmlFor="name"
          className="block text-sm font-black text-neon-light/60 uppercase tracking-widest mb-2 group-focus-within:text-neon-cyan transition-colors"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-sm focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/20"
          placeholder="IDENTITY"
        />
        {state?.errors?.name && (
          <p className="mt-2 text-xs font-bold text-neon-pink uppercase">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div className="group">
        <label
          htmlFor="email"
          className="block text-sm font-black text-neon-light/60 uppercase tracking-widest mb-2 group-focus-within:text-neon-cyan transition-colors"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-sm focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all placeholder:text-white/20"
          placeholder="COMMUNICATION"
        />
        {state?.errors?.email && (
          <p className="mt-2 text-xs font-bold text-neon-pink uppercase">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div className="group">
        <label
          htmlFor="message"
          className="block text-sm font-black text-neon-light/60 uppercase tracking-widest mb-2 group-focus-within:text-neon-cyan transition-colors"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-sm focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all resize-none placeholder:text-white/20"
          placeholder="INTENT..."
        />
        {state?.errors?.message && (
          <p className="mt-2 text-xs font-bold text-neon-pink uppercase">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {state?.message && (
        <div
          className={`p-5 border ${state.errors
            ? "bg-neon-pink/10 border-neon-pink text-neon-pink"
            : "bg-neon-cyan/10 border-neon-cyan text-neon-cyan"
            } font-bold text-sm uppercase tracking-wider`}
          aria-live="polite"
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full px-10 py-5 bg-neon-cyan text-black font-black text-lg uppercase tracking-widest hover:bg-neon-purple hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
      >
        {pending ? (
          <>
            <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            TRANSMITTING...
          </>
        ) : (
          "Initiate Contact"
        )}
      </button>
    </form>
  );
}
