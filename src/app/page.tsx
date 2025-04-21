import HeroSection  from "@/components/common/herosection";
import HeaderPage  from "@/components/common/headerpage";
import CalanderSection from "@/components/common/calandersection";
import EventsInSection from "@/components/common/eventsinsection";
import MostLoved from "@/components/common/mostloved";
import PopularEvevts from "@/components/common/popularevents";
import ExploreTheEventsByDates from "@/components/common/exploretheeventsbydates";
import InterestByEvent from "@/components/common/interestbyevent";
import SubscriotionForEvents from "@/components/common/subscriptionevents";
import FooterSection from "@/components/common/footersection";



export default function Home() {
  return (
    <main className="min-h-10 bg-gray-50">
      <HeroSection/>
      <HeaderPage/>
      <CalanderSection/>
      <EventsInSection/>
      <MostLoved/>    
      <PopularEvevts/>
      <InterestByEvent/>
      <ExploreTheEventsByDates/>
      <SubscriotionForEvents/>
      <FooterSection/>
    </main>
    
  ); 
}
