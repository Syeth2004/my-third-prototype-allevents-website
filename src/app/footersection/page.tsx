import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function page() {
  return (
    <section className="relative bg-gradient-to-l from-primary to-primary/80 text-black py-4 sm:py-6 lg:py-8">
    <div className="container mx-auto px-22">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
        
          <div className="space-y-4">
            <h3 className="text-xl font-semibold  text-white">Host Events</h3>
            <p className=" text-white">Create and manage your events with ease</p>
            <Button variant="outline" className="w-auto mt-2 text-black">
              Host Your Event
            </Button>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Discover Events</h3>
            <p className=" text-white">Find events happening around you</p>
            <div className="flex flex-wrap gap-2 mt-4 text-white">
              <Button variant="ghost" size="sm">Concerts</Button>
              <Button variant="ghost" size="sm">Meetups</Button>
              <Button variant="ghost" size="sm">Open Mics</Button>
              <Button variant="ghost" size="sm">Art Shows</Button>
              <Button variant="ghost" size="sm">Music Events</Button>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Explore</h3>
            <div className="space-y-2 text-white">
            <Button variant="ghost" size="sm">Cites </Button>
              <Button variant="ghost" size="sm">Catogories</Button>
              <Button variant="ghost" size="sm">Organizers</Button>
              <Button variant="ghost" size="sm">Event Managers</Button>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">#stay Happening</h3>
            <p className="text-white">Stay updated with the latest events</p>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow
              </Button>
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  )
}

