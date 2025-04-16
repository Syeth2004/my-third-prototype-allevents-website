import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




export default function Chennaipage() {
  return (
    <section className="relative bg-white from-primary to-primary/80 text-black py-4 sm:py-6 lg:py-8">
      <div className=" container mx-auto px-22 text-3xl font-bold mb-4">Chennai Most Loved In </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        
      <div className="container mx-auto px-22">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
      <img
        src="businessevents.png"
        alt="Business Events"
        className="w-full h-full object-cover"/>
        </div>
        <div className=" container mx-auto px-4 text-1xl font-bold mb-4">
        Business Events
        </div>
        </div>
        

      
      <div className="container mx-auto px-2">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
      <img
        src="comedyevents.png"
        alt="Comedy Events"
        className="w-full h-full object-cover"/>
        </div>
        <div className=" container mx-auto px-4 text-1xl font-bold mb-4">
        Comedy Events
        </div>
        </div>
        

       
        <div className="container mx-auto px-2">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
      <img
        src="speeddating.png"
        alt="Speed Dating"
        className="w-full h-full object-cover"/>
        </div>
        <div className=" container mx-auto px-4 text-1xl font-bold mb-4">
        Speed Dating
        </div>
        </div>
        
    
        
        
        <div className="container mx-auto px-2">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
      <img
        src="party.png"
        alt="Party"
        className="w-full h-full object-cover"/>
        </div>
        <div className=" container mx-auto px-4 text-1xl font-bold mb-12">
        Party Events
        </div>
        </div>
       


        
        <div className="container mx-auto px-2">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
      <img
        src="More.png"
        alt="More"
        className="w-full h-full object-cover"/>
        </div>
        <div className=" container mx-auto px-4 text-1xl font-bold mb-4">
        And More Events
        </div>
        </div>
       

        
    
    
    
    
    
    
    
    
    
    
    
    </div>
    </section>
  )
}

