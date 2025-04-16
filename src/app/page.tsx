import HeroSection  from "@/app/herosection/page";
import HeaderPage  from "@/app/headerpage/page";
import CalanderEventSection from "@/app/calandereventsection/page";
import EventsInChennai from "@/app/eventsinchennai/page";
import ChennaiMostLoved from "@/app/chennaimostloved/page";
import PopularInChennai from "@/app/popularinchennai/page";
import ExploreTheEventsByDates from "@/app/exploretheeventsbydates/page";
import InterestByEvent from "@/app/interestbyevent/page";
import SubscriotionForEvents from "@/app/subscriptionforevent/page";
import FooterSection from "@/app/footersection/page";



export default function Home() {
  return (
    <main className="min-h-10 bg-gray-50">
      <HeroSection/>
      <HeaderPage/>
      <CalanderEventSection/>
      <EventsInChennai/>
      <ChennaiMostLoved/>    
      <PopularInChennai/>
      <InterestByEvent/>
      <ExploreTheEventsByDates/>
      <SubscriotionForEvents/>
      <FooterSection/>
    </main>
    
  ); 
}
