type FaqItem = {
  q: string;
  a: string;
};

const DEFAULT_FAQ: FaqItem[] = [
  {
    q: "What happens after I get in touch?",
    a: "We start with a short discovery call to understand your goals, deadlines, and current structure. If there is a fit, we agree scope and fees, then move into analysis and recommendations.",
  },
  {
    q: "Do you work with internationally mobile clients?",
    a: "Yes. We advise internationally mobile individuals on UK residence, non-dom related considerations, and cross-border coordination with other advisers.",
  },
  {
    q: "How quickly can you start?",
    a: "Timing depends on complexity and deadlines. If you have an urgent transaction or filing date, mention it and we will prioritise an initial view.",
  },
  {
    q: "How are fees structured?",
    a: "Fees are agreed up-front based on scope. Some engagements are fixed-fee; others are staged (discovery, design, implementation) so you can make decisions with clarity.",
  },
  {
    q: "Do you handle implementation?",
    a: "We can coordinate implementation with your legal and finance teams to ensure structures are executed correctly and documented appropriately.",
  },
  {
    q: "Do you provide tax returns or compliance work?",
    a: "We can support VAT and compliance needs where appropriate, and we often work alongside existing accountants and bookkeepers.",
  },
];

export default function Faq({ items = DEFAULT_FAQ }: { items?: FaqItem[] }) {
  return (
    <section className="faq" aria-label="Frequently asked questions">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2>Answers to common questions.</h2>
        <div className="faq__list">
          {items.map((item) => (
            <details key={item.q} className="faq__item">
              <summary className="faq__q">{item.q}</summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

