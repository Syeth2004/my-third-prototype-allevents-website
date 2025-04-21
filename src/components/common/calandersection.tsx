"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col items-center justify-center mt-8">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md horizantal border shadow"
    />
    </div>
  )
}
