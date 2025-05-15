import { Button } from "../ui/button";
import tablet from "@/assets/images/tablet.png";
import desktop from "@/assets/images/desktop.png";

const Hero = () => {
  return (
    <main className="min-h-full mt-16">
      <section className="relative overflow-hidden bg-white">
        {/* Large blue-purple circle background */}
        <div className="absolute z-10 right-0 top-10 md:top-24 h-[40%] md:h-[60%] w-[90%] md:w-[47%] bg-gradient-to-br from-[#2871FA] to-[#6717CD] rounded-l-full -z-10"></div>

        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row items-center">
            {/* Content - Order changes based on screen size */}
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-[492px] poppins-semibold">
                The all-in-one{" "}
                <span className="text-purple-600">POS solution</span> to grow
                your business
              </h1>
              <p className="text-sm md:text-base mb-6 max-w-lg max-w-[496px] poppins-regular">
                We understand the everyday struggle of running a successful
                business. That is why we built a revolutionary management system
                specifically designed to streamline your operations and
                skyrocket your profits.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md cursor-pointer poppins-regular">
                Get Started
              </Button>
            </div>

            {/* Images - Order changes based on screen size */}
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end z-10">
              <div className="relative w-full max-w-md md:max-w-lg">
                {/* Desktop screen */}
                <div className="relative w-full">
                  <img
                    src={desktop}
                    alt="POS Desktop Interface"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>

                {/* Tablet/mobile device positioned in front and below */}
                <div className="absolute bottom-[-5%] right-0 w-[60%]">
                  <img
                    src={tablet}
                    alt="POS Mobile Interface"
                    width={300}
                    height={200}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    // <div className="mt-20 px-4 md:p-0 mt-10 flex flex-col-reverse md:flex-row items-center justify-center space-10">
    //   <div className="flex-1">
    //     <h1 className="poppins-semibold font-3xl">
    //       The all-in-one <span>POS solution</span> to grow your business
    //     </h1>
    //     <p>
    //       We understand the everyday struggle of running a successful business.
    //       That is why we built a revolutionary management system specifically
    //       designed to streamline your operations and skyrocket your profits.
    //     </p>
    //     <Button className="bg-[#6717CD] hover:bg-[#574175] cursor-pointer h-10 poppins-regular">Get Started</Button>
    //   </div>
    //   <div className="flex-1 mb-10 md:mb-8">
    //     <img src={heroImg} alt="" />
    //   </div>
    // </div>
  );
};

export default Hero;
