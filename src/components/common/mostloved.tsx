import Image from "next/image";



export default function Mostloved() {
  const events = [
    {
      image:"/businessevents.png",
      title:"Business Events",
      className :"px-22 py-10"
    },

    {
      image:"/musicalevent.png",
      title:"Music Events",
      className :"px-2"
    },

    {
      image:"/comedyevents.png",
      title:"Comedy Events",
      className :"px-2"
    },

    {
      image:"/speeddating.png",
      title:"Speed Dating",
      className :"px-2"
    },

    {
      image:"/party.png",
      title:"Partie Events",
      className :"px-2"
    },

    {
      image:"/more.png",
      title:"And More Events",
      className :"px-2"
    },

  ];
  return (
    <section className="relative bg-white from-primary to-primary/80 text-black py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-22 text-3xl font-bold mb-4">Chennai Most Loved In </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-22">
        {events.map((event, index) => (
          <div key={index} className={'container mx-auto  ${event.className}'}>
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative">
              <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(max-width: 150px) 100vw, 150vw"
              />
            </div>
            <div className="container mx-auto px-4 text-1xl font-bold mb-4">
              {event.title}
              </div>
            </div>
        ))}
      </div>
      </section>

  )
}
