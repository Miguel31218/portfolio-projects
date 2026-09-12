"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contact, profile } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    { label: t.contact.email, value: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
    { label: t.contact.github, value: t.contact.githubValue, href: contact.github, Icon: Github },
    {
      label: t.contact.linkedin,
      value: t.contact.linkedinValue,
      href: contact.linkedin,
      Icon: Linkedin,
    },
    {
      label: t.contact.whatsapp,
      value: t.contact.whatsappValue,
      href: contact.whatsapp,
      Icon: MessageCircle,
    },
  ];

  return (
    <section id="contacto" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-accent">{t.contact.eyebrow}</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {t.contact.heading}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-md border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <Icon size={20} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
              <div>
                <p className="font-body text-sm text-text">{label}</p>
                <p className="text-sm text-muted">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-content font-mono text-xs text-muted">
          {profile.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
