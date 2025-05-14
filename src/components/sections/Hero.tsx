import { Button } from "../ui/button";
import heroImg from "@/assets/images/heroImg.png"

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center space-10">
      <div className="flex-1">
        <h1>
          The all-in-one <span>POS solution</span> to grow your business
        </h1>
        <p>
          We understand the everyday struggle of running a successful business.
          That is why we built a revolutionary management system specifically
          designed to streamline your operations and skyrocket your profits.
        </p>
        <Button className="bg-[#6717CD] hover:bg-[#574175] cursor-pointer h-10 poppins-regular">Get Started</Button>
      </div>
      <div className="flex-1">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
