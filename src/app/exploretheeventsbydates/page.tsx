import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Explorepage() {
  return (
    <section className="relative bg-white from-primary to-primary/80 text-black py-4 sm:py-6 lg:py-4">
      <div className=" container mx-auto px-22 text-3xl font-bold mb-4">
        <h1 className="text-3xl font-bold mb-8">Explore Events by Dates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Today</CardTitle>
          <CardContent className="text-sm text-gray-500">Sun, 13th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Tomorrow</CardTitle>
          <CardContent className="text-sm text-gray-600">Mon, 14th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">This Weekend</CardTitle>
          <CardContent className="text-sm text-gray-600">19th - 20th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">This Week</CardTitle>
          <CardContent className="text-sm text-gray-600">7th - 13th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Next Weekend</CardTitle>
          <CardContent className="text-sm text-gray-600">26th - 27th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Next Week</CardTitle>
          <CardContent className="text-sm text-gray-600">14th - 20th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">This Month</CardTitle>
          <CardContent className="text-sm text-gray-600">1st - 30th Apr</CardContent>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Custom Date</CardTitle>
          <CardContent className="text-sm text-gray-600">Pick Range</CardContent>
        </CardHeader>
      </Card>
    </div>
        
        </div>
        </section>
  )
}

