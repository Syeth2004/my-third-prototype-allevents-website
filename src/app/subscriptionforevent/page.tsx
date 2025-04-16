import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function page() {
  return (
  <section className="relative bg-white from-primary to-primary/80 text-black py-4 sm:py-40 lg:py-20">
    <div className="relative bg-gray-800 text-white py-12 px-8">
      <div className="container mx-auto px-14 sm:px-14">
        <div className="flex flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Best of Chennai Events in Your Inbox</h2>
            <p className="text-lg mb-8">Don't miss your favorite concert again. We deliver the best of the city happenings and handpicked content for you every week. Subscribe to our weekly email newsletter for Chennai.</p>
          </div>
          <div className="flex-1 flex justify-end">
                <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-12">
                  <div className="flex items-center gap-2 mb-2">
                    <Input 
                      type="email" placeholder="Enter your email here" 
                      className="bg-gray-700 text-white w-full sm:w-1xl rounded-l-md py-2 px-4 focus:outline-none"/>
                    <Button className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 focus:outline-none">Subscribe</Button>
                  </div>
                  <p className="text-sm">Join over a million newsletter subscribers.</p>
                </div>
              </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
    </div>
  </section>
  );
}