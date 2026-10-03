import React, { useState } from 'react';
import { SectionLabel } from '../atoms/SectionLabel';
import { StatusPip } from '../atoms/StatusPip';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { IconButton } from '../atoms/IconButton';
import { FormField } from '../atoms/FormField';
import { ContactChannel } from '../molecules/ContactChannel';
import { contactImg } from '../../data/portfolio';
import type { ContactFormData } from '../../types';

const SUBJECT_OPTIONS = [
  { value: 'Full-Time Engineering Opportunity', label: 'Full-Time Engineering Opportunity' },
  { value: 'Consulting / Architecture Review', label: 'Consulting / Architecture Review' },
  { value: 'Contract Web Development', label: 'Contract Web Development' },
  { value: 'Open Source Collaboration', label: 'Open Source Collaboration' },
  { value: 'Other Inquiry', label: 'Other Inquiry' },
];

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleField = (field: keyof ContactFormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setForm(EMPTY_FORM);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="w-full py-space-xl scroll-mt-24"
    >
      {/* ── Section header ──────────────────────────────── */}
      <div className="flex flex-col gap-space-sm mb-space-xl">
        <SectionLabel label="Initialization" />
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold text-on-surface tracking-tight">
          Let's build something extraordinary together.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Have a project in mind or want to explore a collaboration? Pick the channel that works
          best for you — I&apos;m always open to meaningful conversations.
        </p>
      </div>

      {/* ── 12-col grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

        {/* ── Left column (col-span-5) ──────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-space-lg">

          {/* Box 1 — Priority Direct Channels */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-md">

            {/* Header */}
            <div className="flex items-center gap-space-sm">
              <StatusPip color="primary" />
              <span className="font-semibold text-on-surface font-body-md text-body-md">
                Priority Direct Channels
              </span>
            </div>

            {/* Body text */}
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              For fastest response, reach me directly through WhatsApp or email. I monitor
              these channels daily and typically reply within a few hours during business hours.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-space-sm px-space-md py-space-md rounded-xl bg-primary-container text-on-primary font-semibold hover:opacity-95 transition-all shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat directly on WhatsApp
            </a>

            {/* Contact Channel */}
            <ContactChannel label="Direct Email" value="hello@oktadaffa.dev" />

            {/* Footer row */}
            <div className="flex items-center justify-between pt-space-xs">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-code-md text-code-md">
                <span className="material-symbols-outlined text-base leading-none text-primary">
                  bolt
                </span>
                <span>Avg. response: &lt; 24h</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <IconButton
                  icon="code"
                  label="GitHub"
                  href="https://github.com/oktadaffa"
                />
                <IconButton
                  icon="work"
                  label="LinkedIn"
                  href="https://linkedin.com/in/oktadaffa"
                />
              </div>
            </div>
          </div>

          {/* Box 2 — Primary Timezone */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-md flex flex-col gap-space-sm">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-base leading-none text-primary">
                  public
                </span>
                <span className="font-semibold text-on-surface font-body-md text-body-md">
                  Primary Timezone
                </span>
              </div>
              <Badge label="UTC+7" color="primary" />
            </div>

            {/* Map visual */}
            <div
              className="w-full h-32 rounded-xl bg-surface-container-highest relative flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url(${contactImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-surface/60" />

              {/* Badge */}
              <div className="relative flex items-center gap-space-sm px-space-md py-space-sm rounded-full bg-surface-container/90 border border-surface-container-high shadow-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="font-code-md text-code-md text-on-surface font-semibold">
                  Current Base: Jakarta, ID
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right column (col-span-7) — Dispatch Message form ── */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">

          {/* Card header */}
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              Dispatch Message
            </h3>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-base leading-none text-primary">
                lock
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                E2E Encrypted
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-space-md" noValidate>

            {/* 2-col name + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <FormField
                id="contact-name"
                type="text"
                label="Your Name"
                placeholder="e.g. Alex Henderson"
                required
                value={form.name}
                onChange={handleField('name')}
              />
              <FormField
                id="contact-email"
                type="email"
                label="Email Address"
                placeholder="alex@company.com"
                required
                value={form.email}
                onChange={handleField('email')}
              />
            </div>

            {/* Subject select */}
            <FormField
              id="contact-subject"
              type="select"
              label="Project Scope or Topic"
              placeholder="Select a topic…"
              value={form.subject}
              onChange={handleField('subject')}
              options={SUBJECT_OPTIONS}
            />

            {/* Message textarea */}
            <FormField
              id="contact-message"
              type="textarea"
              label="Project Brief & Requirements"
              placeholder="Tell me about your product, goals, and timeline…"
              required
              rows={5}
              value={form.message}
              onChange={handleField('message')}
            />

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs">
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                Your message is transmitted securely. No spam — ever.
              </p>
              <Button
                variant="primary"
                size="md"
                type="submit"
                icon="send"
                iconPosition="right"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </div>

            {/* Success alert */}
            {isSubmitted && (
              <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-primary/10 text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[20px] leading-none">
                  check_circle
                </span>
                <span className="font-body-sm text-body-sm font-semibold">
                  Message dispatched successfully! I&apos;ll get back to you within 24 hours.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
