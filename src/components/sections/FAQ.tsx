// import { useState } from "react"
import faqImg from "@/assets/images/faqImg.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  // const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "How much does VinretailPRO cost?",
      answer:
        "VinretailPRO offers flexible pricing plans starting from ₦5,000 per month for the Basic plan. We also offer Standard (₦8,000/month) and Premium (₦15,000/month) plans with additional features. Annual billing provides a discount of up to 20%.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a free 3-day trial that gives you full access to all features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time.",
    },
    {
      question: "Does VinretailPRO work on mobile devices?",
      answer:
        "VinretailPRO is fully responsive and works on all mobile devices. You can manage your inventory, process sales, and access reports from your smartphone or tablet, giving you the flexibility to run your business from anywhere.",
    },
    {
      question: "Can I use VinretailPRO to manage multiple store locations?",
      answer:
        "Yes, our Standard plan supports up to 3 business locations, while our Premium plan offers unlimited locations. All locations are managed from a single dashboard with centralized inventory, reporting, and customer data.",
    },
    {
      question: "Does VinretailPRO work on mobile devices?",
      answer:
        "VinretailPRO is fully responsive and works on all mobile devices. You can manage your inventory, process sales, and access reports from your smartphone or tablet, giving you the flexibility to run your business from anywhere.",
    },
    {
      question: "Can I use VinretailPRO to manage multiple store locations?",
      answer:
        "Yes, our Standard plan supports up to 3 business locations, while our Premium plan offers unlimited locations. All locations are managed from a single dashboard with centralized inventory, reporting, and customer data.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Title and Image */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-start poppins-medium">Frequently asked questions</h2>
          <p className="text-gray-700 mb-8 max-w-md items-center text-center md:text-start poppins-regular">
            If you like to know anything else about how VINRETAILPRO can help your business, read our frequently asked
            questions.
          </p>

          <div className="relative h-90">
            <img
              src={faqImg}
              alt="Person with question"
              width={300}
              height={300}
              className="absolute bottom-0 left-0 flex items-center justify-center"
            />
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="">
          <Accordion type="single" collapsible className="w-full border-y-1 border-black container mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg poppins-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 poppins-regular">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
