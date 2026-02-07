export type Testimonial = {
  quote: string;
  name?: string;
  title?: string;
};

// Anonymised placeholders until published client reviews are available.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Clear, pragmatic advice. The options and trade-offs were explained in plain English, with a focus on what matters commercially and what stands up to scrutiny.",
    name: "Client (anonymised)",
    title: "Founder, owner-managed business",
  },
  {
    quote:
      "Fast turnaround and genuinely useful written recommendations we could share with our accountants and legal team. Very structured, very actionable.",
    name: "Client (anonymised)",
    title: "Finance lead, UK group",
  },
  {
    quote:
      "Helped us plan around a move and a major transaction with confidence. No jargon, just decisions, timelines, and clear next steps.",
    name: "Client (anonymised)",
    title: "Internationally mobile individual",
  },
];
