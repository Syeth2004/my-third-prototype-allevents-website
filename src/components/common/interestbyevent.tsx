import { Button } from "@/components/ui/button";
import Image from "next/image";



export default function InterestPage() {
  return (
    <section className="relative bg-gray from-primary to-primary/80 text-black py-20 sm:py-22 lg:py-20">
    <div className=" container mx-auto px-22 text-3xl mb-16">
      <h1 className="text-3xl font-bold mb-2">Tell us what you Love</h1>
      <div className="text-2xl text-black mb-10">
        This will help us curate events specially for you
      </div>
      

    <div className="flex flex-wrap sm-auto">
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Business</Button>
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Music</Button>
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Comedy</Button>
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Parties</Button>
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Dance</Button>
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Dating</Button>
      <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Workshop</Button>
    </div>
      <div className="flex flex-wrap sm-auto">
        <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Food & Drinks</Button>
        <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Sports</Button>
        <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Fine Arts</Button>
        <Button className="rounded-full mr-4 mb-6 bg-white  text-black">Show More</Button>
      </div>


  <div className="flex flex-wrap sm-auto">
    <Button className="rounded-full mr-2 mb-2 bg-blue-600  text-white">Get Started</Button>
  </div>
     
      
      
    <div className=" container sm-30 px-30 text-3xl font-bold mb-20">
      <div className="absolute right-45 top-1/2 -translate-y-1/3">
          <div className="relative w-94 h-120 mx-auto">
            <Image
            src="/lookingblueshirt.png"
            alt="Person looking at Spy Glass"
            width={500}
            height={500}
            />
          </div>
      </div>
    </div>
    </div>
  </section>

  );
}


