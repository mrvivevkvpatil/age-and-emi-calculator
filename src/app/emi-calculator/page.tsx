import type { Metadata } from "next";
import EmiCalculator from "@/components/emi-calculator";
import { DollarSign } from "lucide-react";

export const metadata: Metadata = {
	title: "EMI Calculator",
	description:
		"Calculate your loan EMI, total interest payable, and total payment with our free EMI calculator.",
};

export default function EmiCalculatorPage() {
	return (
		<div className='container mx-auto py-10 space-y-10'>
			<section className='text-center space-y-4 max-w-3xl mx-auto'>
				<div className='mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full'>
					<DollarSign className='h-8 w-8 text-purple-700' />
				</div>
				<h1 className='text-4xl font-bold tracking-tight'>
					<span className='bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent'>
						EMI Calculator
					</span>
				</h1>
				<p className='text-xl text-muted-foreground'>
					Calculate your loan EMI, total interest payable, and total
					payment with precision.
				</p>
			</section>

			<div className='max-w-3xl mx-auto'>
				<EmiCalculator />
			</div>

			<section className='max-w-3xl mx-auto space-y-6'>
				<h2 className='text-2xl font-bold text-center'>
					How to Use the EMI Calculator
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<div className='bg-purple-100 w-10 h-10 flex items-center justify-center rounded-full mb-4'>
							<span className='font-bold text-purple-700'>1</span>
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Enter Loan Amount
						</h3>
						<p className='text-muted-foreground'>
							Input the principal loan amount you wish to borrow.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<div className='bg-purple-100 w-10 h-10 flex items-center justify-center rounded-full mb-4'>
							<span className='font-bold text-purple-700'>2</span>
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Set Interest Rate
						</h3>
						<p className='text-muted-foreground'>
							Enter the annual interest rate offered by your
							lender.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<div className='bg-purple-100 w-10 h-10 flex items-center justify-center rounded-full mb-4'>
							<span className='font-bold text-purple-700'>3</span>
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Choose Loan Tenure
						</h3>
						<p className='text-muted-foreground'>
							Select the loan repayment period in years.
						</p>
					</div>
				</div>
			</section>

			<section className='max-w-3xl mx-auto space-y-6'>
				<h2 className='text-2xl font-bold text-center'>
					Understanding Your EMI Calculation
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Monthly EMI
						</h3>
						<p className='text-muted-foreground'>
							The fixed amount you need to pay every month until
							the loan is fully repaid.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Total Interest Payable
						</h3>
						<p className='text-muted-foreground'>
							The total interest amount you will pay over the
							entire loan tenure.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Total Payment
						</h3>
						<p className='text-muted-foreground'>
							The sum of the principal amount and the total
							interest amount.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-lg font-semibold mb-2'>
							Amortization Schedule
						</h3>
						<p className='text-muted-foreground'>
							A year-by-year breakdown of your loan repayment
							showing principal and interest components.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
