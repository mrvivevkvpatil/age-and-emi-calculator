"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format, differenceInYears, differenceInMonths, differenceInDays } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined)
  const [toDate, setToDate] = useState<Date | undefined>(new Date())
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const calculateAge = () => {
    if (!birthDate) {
      setError("Please select your birth date")
      return
    }

    setError(null)

    const targetDate = toDate || new Date()

    if (birthDate > targetDate) {
      setError("Birth date cannot be in the future")
      return
    }

    const years = differenceInYears(targetDate, birthDate)

    // Calculate remaining months after subtracting years
    const dateWithYearsSubtracted = new Date(birthDate)
    dateWithYearsSubtracted.setFullYear(dateWithYearsSubtracted.getFullYear() + years)
    const months = differenceInMonths(targetDate, dateWithYearsSubtracted)

    // Calculate remaining days after subtracting years and months
    const dateWithMonthsSubtracted = new Date(dateWithYearsSubtracted)
    dateWithMonthsSubtracted.setMonth(dateWithMonthsSubtracted.getMonth() + months)
    const days = differenceInDays(targetDate, dateWithMonthsSubtracted)

    setAge({ years, months, days })
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Age Calculator</h2>
            <p className="text-sm text-muted-foreground">Calculate your exact age in years, months, and days.</p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="birth-date">Birth Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !birthDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {birthDate ? format(birthDate, "PPP") : "Select birth date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={birthDate} onSelect={setBirthDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="to-date">To Date (Optional)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !toDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {toDate ? format(toDate, "PPP") : "Select date (defaults to today)"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={toDate} onSelect={setToDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}

            <Button
              onClick={calculateAge}
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700"
            >
              Calculate Age
            </Button>

            {age && (
              <div className="mt-6 p-4 border rounded-lg bg-muted">
                <h3 className="text-lg font-semibold mb-2">Your Age is:</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-background rounded-lg border">
                    <p className="text-3xl font-bold text-primary">{age.years}</p>
                    <p className="text-sm text-muted-foreground">Years</p>
                  </div>
                  <div className="p-3 bg-background rounded-lg border">
                    <p className="text-3xl font-bold text-primary">{age.months}</p>
                    <p className="text-sm text-muted-foreground">Months</p>
                  </div>
                  <div className="p-3 bg-background rounded-lg border">
                    <p className="text-3xl font-bold text-primary">{age.days}</p>
                    <p className="text-sm text-muted-foreground">Days</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
