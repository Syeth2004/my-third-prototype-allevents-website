import Link from "next/link";
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as React from "react"


export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-l from-primary to-primary/80 text-black py-4 sm:py-4 lg:py-4">
      <div className="container mx-auto px-22">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4"> 
          <div className="flex flex-row items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            <span className="text-teal-500 text-2xl sm:text-3xl font-bold">Allevents</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-xl sm:text-2xl text-teal-400">in Chennai</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select your City by location</DropdownMenuLabel>
                <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                <DropdownMenuItem>Bangalore</DropdownMenuItem>
                <DropdownMenuItem>Mumbai</DropdownMenuItem>
                <DropdownMenuItem>Madurai</DropdownMenuItem>
                <DropdownMenuItem>Coimbatore</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Chennai</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end w-full sm:w-auto gap-4">
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2 sm:gap-4">
              <Link href="/createevents" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-teal-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6">
                  Create Event
                </Button> 
              </Link>

              
              <div className="flex flex-row items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-teal-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6">Sign in</Button>
                
              </div>
            </div>

            
            <div className="w-full sm:w-auto">
              <Input type="text" placeholder="Search events" className="w-full sm:w-auto bg-white text-black py-2 sm:py-3 px-4 sm:px-6"/>
            </div>
              
            
            
          </div>
        </div>
      </div>
    </section>
  );
}