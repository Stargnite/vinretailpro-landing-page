import { useState } from "react"
import faqImg from "@/assets/images/faqImg.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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








// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// export default function FAQSection() {
//   const faqs = [
//     {
//       question: "What is VinretailPRO?",
//       answer:
//         "VinretailPRO is a comprehensive point-of-sale (POS) solution designed specifically for retail businesses. It offers inventory management, sales processing, customer management, and business analytics in one integrated platform.",
//     },
//     {
//       question: "How much does VinretailPRO cost?",
//       answer:
//         "VinretailPRO offers flexible pricing plans starting from ₦5,000 per month for the Basic plan. We also offer Standard (₦8,000/month) and Premium (₦15,000/month) plans with additional features. Annual billing provides a discount of up to 20%.",
//     },
//     {
//       question: "Can I try VinretailPRO before purchasing?",
//       answer:
//         "Yes! We offer a free 3-day trial that gives you full access to all features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time.",
//     },
//     {
//       question: "Is my data secure with VinretailPRO?",
//       answer:
//         "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, secure user authentication, regular security audits, and compliance with industry standards to ensure your business and customer data remains protected.",
//     },
//     {
//       question: "Can I use VinretailPRO offline?",
//       answer:
//         "Yes, VinretailPRO includes an offline mode that allows you to continue processing sales even when your internet connection is down. The system will automatically sync all data once the connection is restored.",
//     },
//     {
//       question: "How does the WooCommerce integration work?",
//       answer:
//         "Our WooCommerce integration synchronizes your inventory, orders, and customer data between your physical store and online shop. This ensures consistent stock levels, unified reporting, and seamless order fulfillment across all sales channels.",
//     },
//     {
//       question: "Can I manage multiple store locations?",
//       answer:
//         "Yes, our Standard plan supports up to 3 business locations, while our Premium plan offers unlimited locations. All locations are managed from a single dashboard with centralized inventory, reporting, and customer data.",
//     },
//     {
//       question: "What kind of support do you offer?",
//       answer:
//         "We provide 24/7 customer support via live chat, email, and phone. Our dedicated support team is always available to assist with any questions or issues you might encounter, ensuring your business runs smoothly.",
//     },
//   ]

//   return (
//     <section className="w-full py-12 md:py-24 bg-gray-50">
//       <div className="container px-4 md:px-6 mx-auto">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
//             <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
//               Find answers to common questions about VinretailPRO
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto w-full max-w-3xl">
//           <Accordion type="single" collapsible className="w-full">
//             {faqs.map((faq, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
//                 <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   )
// }




