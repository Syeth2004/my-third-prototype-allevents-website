
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const events = [
  {
    id:1,
    title: "Technical Hacking Confrence 2025",
    date: "April 25, 2025",
    time: "10:00 Am",
    location: "Iitm Research Park",
    catogory: "Technology",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cybersecurity & Ethical Hacking.",
    organizer: "Tech Events Hub"
  },

  {
    id:2,
    title: "Music Festival 2025",
    date: "May 5, 2025",
    time: "3:00 Pm",
    location: "The Artery",
    catogory: "Music",
    image: "https://plus.unsplash.com/premium_photo-1663046050988-1b873a56dced?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Live music and Performance by top artists.",
    organizer: "Chennai Music hub "
  },

  {
    id:3,
    title: "Food & Culture Expo",
    date: "March 30, 2025",
    time: "10:00 Am",
    location: "City Center",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the rich cultural heritage and Excusite Cusine.",
    organizer: "Chennai Culture Fest"
  },
  
];


export default function PopularPage() {
  return (
    <section className="relative bg-white from-primary to-primary/80 text-black py-4 sm:py-6 lg:py-8">
      <div className=" container mx-auto px-22 text-3xl font-bold mb-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events in Chennai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{event.date} at {event.time}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{event.location}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Organized by {event.organizer}</span>
                  <button className="text-primary  hover:text-primary/80 text-sm">
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

