import type React from "react"
import icon1 from "@/assets/images/reasons-icons/icon1.png"
import icon2 from "@/assets/images/reasons-icons/icon2.png"
import icon3 from "@/assets/images/reasons-icons/icon3.png"
import icon4 from "@/assets/images/reasons-icons/icon4.png"
import icon5 from "@/assets/images/reasons-icons/icon5.png"
import icon6 from "@/assets/images/reasons-icons/icon6.png"
import icon7 from "@/assets/images/reasons-icons/icon7.png"
import icon8 from "@/assets/images/reasons-icons/icon8.png"
import icon9 from "@/assets/images/reasons-icons/icon9.png"


interface FeatureProps {
  iconUrl: string
  title: string
  description: string
 
}

function FeatureCard({
  iconUrl,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative flex flex-col items-end border border-gray-200">
      <div className="p-4">
        {/* Icon - either custom icon or image */}
          <div className={`bg-blue-500 absolute -top-5 w-12 h-12 mb-4 flex items-center justify-center`} style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)'
            }}
          >
            <img src={iconUrl} alt={title} width={30} height={30} />
          </div>
       

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 mt-10 poppins-medium">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 poppins-regular">{description}</p>
      </div>
    </div>
  )
}


export default function WhyChooseUs() {
  const features = [
    {
      iconUrl: icon1,
      title: "Easy to Use",
      description:
        "Our intuitive dashboard with an intuitive interface that makes it easy for your staff to learn & use, streamlining your day-to-day operations.",
    },
    {
      iconUrl: icon2,
      title: "24/7 Support",
      description:
        "Our dedicated customer support team is available around the clock to assist you with any questions or issues, ensuring your business runs smoothly.",
    },
    {
      iconUrl: icon3,
      title: "Inventory Efficiency",
      description:
        "Advanced real-time inventory tracking & automation tools that VinretailPRO uses to optimize your stock operations & boost your bottom line.",
    },
    {
      iconUrl: icon4,
      title: "Robust Security",
      description:
        "Protect your business and customer data with our enterprise-grade advanced security features, including user access controls & encrypted transactions.",
    },
    {
      iconUrl: icon5,
      title: "Mobile Compatibility",
      description:
        "Seamlessly compatible with mobile devices, VinretailPRO allows you to manage your retail operations on the go, ensuring you can be flexible & work from anywhere.",
    },
    {
      iconUrl: icon6,
      title: "Multi-Store Management",
      description:
        "Manage multiple stores effortlessly. Our unified, single login, centralized platform enables you to oversee your entire retail network with ease.",
    },
    {
      iconUrl: icon7,
      title: "Offline Transaction Mode",
      description:
        "Keep your business running smoothly even during internet connectivity issues. VinretailPRO enables offline transactions, ensuring your sales can continue uninterrupted.",
    },
    {
      iconUrl: icon8,
      title: "Scalable & Customizable",
      description:
        "Whether you're a small shop or a large enterprise, our platform can be tailored to meet your unique business needs, with the flexibility to grow alongside your company.",
    },
    {
      iconUrl: icon9,
      title: "Flexible Subscription Plans",
      description:
        "VinretailPRO offers a range of subscription options to choose from, allowing you to scale up or down as your requirements change.",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Top diagonal purple background */}
 <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-[#6717CD] transform skew-y-4 origin-top-right -translate-y-8 z-0" ></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 poppins-medium">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} iconUrl={feature.iconUrl} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>

      {/* Bottom diagonal purple background */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-[#6717CD] transform skew-y-4 origin-bottom-left translate-y-8 z-0"></div>
    </section>
  )
}
