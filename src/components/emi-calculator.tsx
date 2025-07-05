"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AmortizationItem {
  payment: number
  year: number
  emi: number
  principalPayment: number
  interestPayment: number
  balance: number
}

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(1000000)
  const [interestRate, setInterestRate] = useState<number>(8.5)
  const [loanTenure, setLoanTenure] = useState<number>(20)
  const [emi, setEmi] = useState<number>(0)
  const [totalInterest, setTotalInterest] = useState<number>(0)
  const [totalPayment, setTotalPayment] = useState<number>(0)
  const [showAmortization, setShowAmortization] = useState<boolean>(false)
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationItem[]>([])

  useEffect(() => {
    calculateEMI()
  }, [loanAmount, interestRate, loanTenure])

  const calculateEMI = () => {
    const principal = loanAmount
    const rate = interestRate / 12 / 100
    const time = loanTenure * 12

    const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1)
    const totalPaymentValue = emiValue * time
    const totalInterestValue = totalPaymentValue - principal

    setEmi(emiValue)
    setTotalInterest(totalInterestValue)
    setTotalPayment(totalPaymentValue)

    // Generate amortization schedule
    generateAmortizationSchedule(principal, rate, time, emiValue)
  }

  const generateAmortizationSchedule = (principal: number, rate: number, time: number, emiValue: number) => {
    let balance = principal
    const schedule = []

    for (let i = 1; i <= Math.min(time, 360); i++) {
      const interestPayment = balance * rate
      const principalPayment = emiValue - interestPayment
      balance -= principalPayment

      // Only add yearly entries to keep the table manageable
      if (i % 12 === 0 || i === 1 || i === time) {
        schedule.push({
          payment: i,
          year: Math.ceil(i / 12),
          emi: emiValue,
          principalPayment,
          interestPayment,
          balance: Math.max(0, balance),
        })
      }
    }

    setAmortizationSchedule(schedule)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value.replace(/,/g, ""))
    if (!isNaN(value)) {
      setLoanAmount(value)
    } else {
      setLoanAmount(0)
    }
  }

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value)) {
      setInterestRate(value)
    } else {
      setInterestRate(0)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">EMI Calculator</h2>
            <p className="text-sm text-muted-foreground">
              Calculate your loan EMI, total interest payable, and total payment.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="loan-amount">Loan Amount</Label>
                <span className="text-sm font-medium">{formatCurrency(loanAmount)}</span>
              </div>
              <Input
                id="loan-amount"
                type="text"
                value={loanAmount.toLocaleString()}
                onChange={handleLoanAmountChange}
                className="col-span-2"
              />
              <Slider
                value={[loanAmount]}
                min={100000}
                max={10000000}
                step={10000}
                onValueChange={(value) => setLoanAmount(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹1 Lakh</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="interest-rate">Interest Rate (% p.a.)</Label>
                <span className="text-sm font-medium">{interestRate}%</span>
              </div>
              <Input
                id="interest-rate"
                type="number"
                value={interestRate}
                onChange={handleInterestRateChange}
                step={0.1}
                min={1}
                max={30}
                className="col-span-2"
              />
              <Slider
                value={[interestRate]}
                min={1}
                max={30}
                step={0.1}
                onValueChange={(value) => setInterestRate(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="loan-tenure">Loan Tenure (Years)</Label>
                <span className="text-sm font-medium">{loanTenure} Years</span>
              </div>
              <Slider
                value={[loanTenure]}
                min={1}
                max={30}
                step={1}
                onValueChange={(value) => setLoanTenure(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 border rounded-lg bg-muted text-center">
                <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
                <p className="text-xl font-bold text-primary">{formatCurrency(emi)}</p>
              </div>
              <div className="p-4 border rounded-lg bg-muted text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                <p className="text-xl font-bold text-primary">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="p-4 border rounded-lg bg-muted text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
                <p className="text-xl font-bold text-primary">{formatCurrency(totalPayment)}</p>
              </div>
            </div>

            <Button onClick={() => setShowAmortization(!showAmortization)} variant="outline">
              {showAmortization ? "Hide" : "Show"} Amortization Schedule
            </Button>

            {showAmortization && (
              <div className="border rounded-lg overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>EMI</TableHead>
                      <TableHead>Principal</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Balance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {amortizationSchedule.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.year}</TableCell>
                        <TableCell>{formatCurrency(row.emi)}</TableCell>
                        <TableCell>{formatCurrency(row.principalPayment)}</TableCell>
                        <TableCell>{formatCurrency(row.interestPayment)}</TableCell>
                        <TableCell>{formatCurrency(row.balance)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
