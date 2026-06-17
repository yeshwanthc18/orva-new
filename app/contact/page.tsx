"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { CONTACT_INFO } from "@/lib/constants";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        <ContactHero />

        {/* Contact Info Cards */}
        <section className="py-20 md:py-32 px-6 md:px-12" style={{ background: "#FBF9F6" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTACT_INFO.map((info, idx) => (
                <ContactInfoCard
                  key={idx}
                  icon={info.icon}
                  title={info.title}
                  details={info.details}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
