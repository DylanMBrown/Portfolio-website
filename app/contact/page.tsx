"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/personal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { submitContact } from "@/app/actions/contact";
import { ContactForm } from "@/components/ContactForm";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden bg-black">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <GradientText variant="aboriginal" className="text-5xl md:text-7xl mb-6 tracking-tighter">
              Get In Touch
            </GradientText>
            <p className="text-xl text-neon-light/60 max-w-2xl mx-auto uppercase tracking-widest font-light">
              Let&apos;s build something <span className="text-neon-cyan italic">extraordinary</span> together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-white mb-8 tracking-tight uppercase">
                  Contact <span className="text-ochre">Information</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-cyan transition-all duration-500">
                      <Mail className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-neon-light/40 uppercase tracking-[0.2em] mb-1">
                        Electronic Mail
                      </h3>
                      <p className="text-xl text-white font-medium">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-ochre transition-all duration-500">
                      <MapPin className="w-6 h-6 text-ochre" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-neon-light/40 uppercase tracking-[0.2em] mb-1">
                        Base Location
                      </h3>
                      <p className="text-xl text-white font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-earth-red transition-all duration-500">
                      <Clock className="w-6 h-6 text-earth-red" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-neon-light/40 uppercase tracking-[0.2em] mb-1">
                        Operational Status
                      </h3>
                      <p className="text-xl text-white font-medium">
                        {personalInfo.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black text-neon-light/40 uppercase tracking-[0.2em] mb-6">
                  Social Channels
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <GlassCard className="p-8 md:p-12 border-neon-cyan/10">
                <h2 className="text-3xl font-black text-white mb-10 tracking-tight uppercase">
                  Send <span className="text-neon-cyan">Transmissions</span>
                </h2>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Background noise */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <NoiseOverlay />
        </div>
      </main>

      <Footer socialLinks={socialLinks} />
    </>
  );
}
