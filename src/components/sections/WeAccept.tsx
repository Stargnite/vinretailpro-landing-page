import Logo1 from "@/assets/images/card-logo1.png"
import Logo2 from "@/assets/images/card-logo2.png"
import Logo3 from "@/assets/images/card-logo3.png"
import Logo4 from "@/assets/images/card-logo4.png"

const WeAccept = () => {
  return (
    <div className="py-12 px-4 hidden md:block">
        <h1 className="text-2xl poppins-regular py-10">We accept </h1>
        <div className="border-y-1 border-gray-600 py-16 flex items-center justify-center space-x-12">
            <img src={Logo1} alt="" width={100} height={100} />
            <img src={Logo2} alt="" width={100} height={100} />
            <img src={Logo3} alt="" width={100} height={100} />
            <img src={Logo4} alt="" width={100} height={100} />
        </div>
    </div>
  )
}

export default WeAccept
