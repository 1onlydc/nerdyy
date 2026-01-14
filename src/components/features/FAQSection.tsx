import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Is nerdyy safe to use?",
    answer: "nerdyy uses advanced anti-detection techniques to minimize detection risk. However, all external tools carry inherent risks. Use at your own discretion and never on your main account."
  },
  {
    question: "Does it work on all Roblox games?",
    answer: "nerdyy is compatible with most Roblox games. Some games with advanced anti-cheat may require updates. We push updates regularly to maintain compatibility."
  },
  {
    question: "How do I install nerdyy?",
    answer: "Simply download the .exe file, extract it to a folder, disable Windows Defender, and run as administrator. Then launch Roblox and use the injector."
  },
  {
    question: "Is it free?",
    answer: "Yes, nerdyy is completely free to download and use. We believe powerful tools should be accessible to everyone."
  },
  {
    question: "What if I get banned?",
    answer: "While nerdyy is designed to minimize detection, we cannot guarantee you won't be banned. Always use on alt accounts and follow best practices for staying undetected."
  },
  {
    question: "How often is it updated?",
    answer: "We release updates regularly, typically within 24-48 hours of major Roblox updates. Join our Discord for update notifications."
  }
];

export default function FAQSection() {
  const headerAnimation = useScrollAnimation();

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const animation = useScrollAnimation();
              return (
              <AccordionItem
                key={index}
                ref={animation.ref}
                value={`item-${index}`}
                className={`bg-card border border-border rounded-lg px-6 transition-all duration-700 ${animation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            )})}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
