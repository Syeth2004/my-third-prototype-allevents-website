import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function HeaderPage() {
  return (
    <section className="relative bg-gradient-to-l from-primary to-primary/50 text-white py-1 sm:py-2 lg:py-2">
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-0">
    <DropdownMenu>
    <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6">
      All
    </DropdownMenuTrigger>
    </DropdownMenu>
  
    <DropdownMenu>
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6">
  ENTERNTAINMENT
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Music</DropdownMenuItem>
    <DropdownMenuItem>Movies</DropdownMenuItem>
    <DropdownMenuItem>Performance</DropdownMenuItem>
    <DropdownMenuItem>Consert</DropdownMenuItem>  
    <DropdownMenuItem>Comedy</DropdownMenuItem>
    <DropdownMenuItem>Party and Night show</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 
 
 <DropdownMenu>
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6">
  ART & THEATRE
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Fine Arts</DropdownMenuItem>
    <DropdownMenuItem>Theatrel</DropdownMenuItem>
    <DropdownMenuItem>Hockey</DropdownMenuItem>  
    <DropdownMenuItem>Literary Arts</DropdownMenuItem>
    <DropdownMenuItem>Crafts</DropdownMenuItem>
    <DropdownMenuItem>Photography</DropdownMenuItem>
    <DropdownMenuItem>Cooking</DropdownMenuItem>
  </DropdownMenuContent>
 </DropdownMenu>

  <DropdownMenu> 
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6">
  FOOD & DRINK
  </DropdownMenuTrigger>
  </DropdownMenu>


  <DropdownMenu>
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6"> 
  ADVENTURES
  </DropdownMenuTrigger>
  </DropdownMenu>

  <DropdownMenu>
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6"> 
  BUSINESS
  </DropdownMenuTrigger>
  </DropdownMenu>


  <DropdownMenu>
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6"> 
  FESTIVALES
  </DropdownMenuTrigger>
  </DropdownMenu>


  <DropdownMenu>
  <DropdownMenuTrigger className="text-xl sm:text-1x1 text-teal-500 font-bold py-2 sm:py-3 px-4 sm:px-6"> 
  MORE
  <DropdownMenuContent>
    <DropdownMenuItem>Fine Arts</DropdownMenuItem>
    <DropdownMenuItem>Theatrel</DropdownMenuItem>
    <DropdownMenuItem>Hockey</DropdownMenuItem>  
    <DropdownMenuItem>Literary Arts</DropdownMenuItem>
    <DropdownMenuItem>Crafts</DropdownMenuItem>
    <DropdownMenuItem>Photography</DropdownMenuItem>
    <DropdownMenuItem>Cooking</DropdownMenuItem>
  </DropdownMenuContent>
  </DropdownMenuTrigger>
 </DropdownMenu>
 

    </div>
    </section>
  );
}
