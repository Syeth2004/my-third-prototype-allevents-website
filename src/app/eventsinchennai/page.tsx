import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";


 
 export default function Eventpage() {
  return (
    <section className="relative bg-gradient-to-l from-primary to-primary/80
     text-white py-4 sm:py-1 lg:py-2 bg-cover bg-no-repeat bg-center shadow-lg" 
     style={{ backgroundImage: "url('https://cdn2.allevents.in/transup/ba/b279290d6948c190ec39aeb797a022/Chennai.jpg')" }}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      
      <div className="container mx-auto px-22">
    <div className="text-2xl font-bold mb-4">Events in Chennai</div>
    <div className="bg-gradient-100 p-4">
  <p className="w-1/2 text-left px-8 text-white text-sl">
    Chennai, the capital city of Tamil Nadu, is a wonder in itself! There are a lot of things in store at Chennai. Educational seminars, music events, and historic exhibitions are some of the events and festivals in Chennai include Pongal, the Tamil New Year, and the Music Festival. Chennai is the most popular tourist destination on the southern fringes for travelers. Explore the beautiful city's events with us.
  </p>
</div>
    
      <div className="container mx-auto px-16">
        <DropdownMenu>
          <DropdownMenuTrigger  className="text-1x1 sm:text-1x1 text-black bg-white rounded-2xl font-bold py-4 sm:py-5 px-6 sm:px-8">
         Hook me with Happenings !
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Quick sign in to get Latest Notification Updates</DropdownMenuLabel>
            <DropdownMenuItem>Continue with Google</DropdownMenuItem>
            <DropdownMenuItem>Continue with Facebook</DropdownMenuItem>
            <DropdownMenuItem>Continue with Twitter</DropdownMenuItem>
            <DropdownMenuItem>Continue with Github</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
    </section>
  )
}

