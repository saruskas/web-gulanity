"use client";
import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="multiple" className="w-full">
      {items.map((it, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left text-lg font-semibold">
            {it.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            {it.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
