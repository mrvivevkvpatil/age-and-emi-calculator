import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	CalendarDays,
	Calculator,
	ChevronRight,
	Clock,
	CreditCard,
	DollarSign,
	LineChart,
	Percent,
	PiggyBank,
	Users,
} from "lucide-react";

export const metadata: Metadata = {
	title: "CalcTools - Free Online Calculators",
	description:
		"Free online tools for age calculation and EMI calculation with accurate results.",
};

export default function Home() {
	return (
		<div className='container mx-auto py-10 space-y-16'>
			{/* Hero Section */}
			<section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-purple-600 py-16 px-8 text-white'>
				<div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
				<div className='relative z-10 max-w-3xl mx-auto text-center space-y-6'>
					<h1 className='text-5xl font-bold tracking-tight'>
						Powerful Calculators for Your Financial Journey
					</h1>
					<p className='text-xl opacity-90'>
						Free, accurate, and easy-to-use calculators to help you
						make informed decisions.
					</p>
					<div className='flex flex-wrap justify-center gap-4 pt-4'>
						<Button
							asChild
							size='lg'
							className='bg-white text-purple-700 hover:bg-gray-100'>
							<Link href='/age-calculator'>
								Try Age Calculator{" "}
								<ChevronRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
						<Button
							asChild
							size='lg'
							variant='outline'
							className='border-white text-white hover:bg-white/20'>
							<Link href='/emi-calculator'>
								Try EMI Calculator{" "}
								<ChevronRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Featured Calculators */}
			<section className='space-y-8'>
				<div className='text-center space-y-3'>
					<h2 className='text-3xl font-bold'>Our Calculators</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Explore our range of free calculators designed to
						simplify your calculations.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<Card className='overflow-hidden border-2 hover:border-teal-500 transition-all duration-300'>
						<div className='absolute top-0 right-0 p-3 bg-teal-500 text-white rounded-bl-lg'>
							<Clock className='h-5 w-5' />
						</div>
						<CardHeader className='pb-4'>
							<CardTitle className='text-2xl flex items-center gap-2'>
								<CalendarDays className='h-6 w-6 text-teal-500' />
								Age Calculator
							</CardTitle>
							<CardDescription className='text-base'>
								Calculate your exact age in years, months, and
								days.
							</CardDescription>
						</CardHeader>
						<CardContent className='pb-4'>
							<div className='space-y-4'>
								<div className='flex items-center gap-3'>
									<div className='h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center'>
										<Users className='h-5 w-5 text-teal-700' />
									</div>
									<div>
										<h3 className='font-medium'>
											Precise Age Calculation
										</h3>
										<p className='text-sm text-muted-foreground'>
											Get your age down to the exact day
										</p>
									</div>
								</div>
								<div className='flex items-center gap-3'>
									<div className='h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center'>
										<CalendarDays className='h-5 w-5 text-teal-700' />
									</div>
									<div>
										<h3 className='font-medium'>
											Date Difference
										</h3>
										<p className='text-sm text-muted-foreground'>
											Calculate time between any two dates
										</p>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className='pt-0'>
							<Button
								asChild
								className='w-full bg-gradient-to-r from-teal-500 to-teal-700'>
								<Link href='/age-calculator'>
									Open Age Calculator{" "}
									<ChevronRight className='ml-2 h-4 w-4' />
								</Link>
							</Button>
						</CardFooter>
					</Card>

					<Card className='overflow-hidden border-2 hover:border-purple-500 transition-all duration-300'>
						<div className='absolute top-0 right-0 p-3 bg-purple-500 text-white rounded-bl-lg'>
							<Calculator className='h-5 w-5' />
						</div>
						<CardHeader className='pb-4'>
							<CardTitle className='text-2xl flex items-center gap-2'>
								<DollarSign className='h-6 w-6 text-purple-500' />
								EMI Calculator
							</CardTitle>
							<CardDescription className='text-base'>
								Plan your loan with accurate EMI calculations.
							</CardDescription>
						</CardHeader>
						<CardContent className='pb-4'>
							<div className='space-y-4'>
								<div className='flex items-center gap-3'>
									<div className='h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center'>
										<CreditCard className='h-5 w-5 text-purple-700' />
									</div>
									<div>
										<h3 className='font-medium'>
											Loan EMI Calculation
										</h3>
										<p className='text-sm text-muted-foreground'>
											Calculate monthly payments for any
											loan
										</p>
									</div>
								</div>
								<div className='flex items-center gap-3'>
									<div className='h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center'>
										<LineChart className='h-5 w-5 text-purple-700' />
									</div>
									<div>
										<h3 className='font-medium'>
											Amortization Schedule
										</h3>
										<p className='text-sm text-muted-foreground'>
											View year-by-year breakdown of your
											loan
										</p>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className='pt-0'>
							<Button
								asChild
								className='w-full bg-gradient-to-r from-purple-500 to-purple-700'>
								<Link href='/emi-calculator'>
									Open EMI Calculator{" "}
									<ChevronRight className='ml-2 h-4 w-4' />
								</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-10 bg-muted/50 rounded-3xl'>
				<div className='container space-y-10'>
					<div className='text-center space-y-3'>
						<h2 className='text-3xl font-bold'>
							Why Choose CalcTools?
						</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Our calculators are designed with you in mind.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='bg-background p-6 rounded-xl shadow-sm border'>
							<div className='h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4'>
								<Percent className='h-6 w-6 text-teal-700' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								100% Accurate
							</h3>
							<p className='text-muted-foreground'>
								Our calculators use precise algorithms to ensure
								accurate results every time.
							</p>
						</div>
						<div className='bg-background p-6 rounded-xl shadow-sm border'>
							<div className='h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4'>
								<PiggyBank className='h-6 w-6 text-purple-700' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								Always Free
							</h3>
							<p className='text-muted-foreground'>
								All our calculators are completely free to use
								with no hidden charges or limits.
							</p>
						</div>
						<div className='bg-background p-6 rounded-xl shadow-sm border'>
							<div className='h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4'>
								<Users className='h-6 w-6 text-blue-700' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								User-Friendly
							</h3>
							<p className='text-muted-foreground'>
								Simple, intuitive interfaces designed for
								everyone, regardless of technical expertise.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='text-center space-y-6 py-10'>
				<h2 className='text-3xl font-bold'>Ready to Get Started?</h2>
				<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
					Try our calculators today and make informed decisions about
					your finances.
				</p>
				<div className='flex flex-wrap justify-center gap-4 pt-4'>
					<Button
						asChild
						size='lg'
						className='bg-gradient-to-r from-teal-500 to-purple-600'>
						<Link href='/age-calculator'>
							Try Age Calculator{" "}
							<ChevronRight className='ml-2 h-4 w-4' />
						</Link>
					</Button>
					<Button asChild size='lg' variant='outline'>
						<Link href='/emi-calculator'>
							Try EMI Calculator{" "}
							<ChevronRight className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
