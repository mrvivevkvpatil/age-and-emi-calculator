import type { Metadata } from "next";
import AgeCalculator from "@/components/age-calculator";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
	title: "Age Calculator",
	description:
		"Calculate your exact age in years, months, and days with our free age calculator.",
};

export default function AgeCalculatorPage() {
	return (
		<div className='container max-w-3xl mx-auto py-10 space-y-10'>
			<section className='text-center space-y-4 max-w-3xl mx-auto'>
				<div className='mx-auto bg-teal-100 w-16 h-16 flex items-center justify-center rounded-full'>
					<CalendarDays className='h-8 w-8 text-teal-700' />
				</div>
				<h1 className='text-4xl font-bold tracking-tight'>
					<span className='bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent'>
						Age Calculator
					</span>
				</h1>
				<p className='text-xl text-muted-foreground'>
					Calculate your exact age in years, months, and days with
					precision.
				</p>
			</section>

			<div className='prose dark:prose-invert max-w-2xl mx-auto'>
				<AgeCalculator />
			</div>

			<section className='prose dark:prose-invert max-w-3xl mx-auto space-y-6'>
				<h2 className='text-2xl font-bold text-center'>
					How to Use the Age Calculator
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<div className='bg-teal-100 w-10 h-10 flex items-center justify-center rounded-full mb-4'>
							<span className='font-bold text-teal-700'>1</span>
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Enter Birth Date
						</h3>
						<p className='text-muted-foreground'>
							Select your date of birth from the calendar.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<div className='bg-teal-100 w-10 h-10 flex items-center justify-center rounded-full mb-4'>
							<span className='font-bold text-teal-700'>2</span>
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Select End Date
						</h3>
						<p className='text-muted-foreground'>
							Choose the end date or leave it as today&apos;s
							date.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<div className='bg-teal-100 w-10 h-10 flex items-center justify-center rounded-full mb-4'>
							<span className='font-bold text-teal-700'>3</span>
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Get Results
						</h3>
						<p className='text-muted-foreground'>
							View your exact age in years, months, and days.
						</p>
					</div>
				</div>
			</section>

			<section className='prose dark:prose-invert max-w-3xl mx-auto space-y-6'>
				<h2 className='text-2xl font-bold text-center'>
					Common Uses for Age Calculator
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Personal Age
						</h3>
						<p className='text-muted-foreground'>
							Calculate your exact age for personal knowledge or
							celebration planning.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Retirement Planning
						</h3>
						<p className='text-muted-foreground'>
							Determine your age at retirement or years until
							retirement.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Child Development
						</h3>
						<p className='text-muted-foreground'>
							Track a child&apos;s exact age for developmental
							milestones.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Event Planning
						</h3>
						<p className='text-muted-foreground'>
							Calculate time between dates for event planning and
							anniversaries.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
