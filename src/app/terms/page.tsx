import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Terms and conditions for using CalcTools calculators and services.",
};

export default function TermsPage() {
	return (
		<div className='container max-w-3xl mx-auto py-10 space-y-10'>
			<section className='space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight text-center'>
					<span className='bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent'>
						Terms of Service
					</span>
				</h1>
				<p className='text-xl text-muted-foreground text-center'>
					Last updated: April 26, 2024
				</p>
			</section>

			<div className='prose dark:prose-invert'>
				<h2>1. Acceptance of Terms</h2>
				<p>
					By accessing or using CalcTools, you agree to be bound by
					these Terms of Service. If you do not agree to these terms,
					please do not use our services.
				</p>

				<h2>2. Description of Service</h2>
				<p>
					CalcTools provides online calculators for age calculation
					and financial planning. Our services are provided &quot;as
					is&quot; and may change without notice.
				</p>

				<h2>3. User Conduct</h2>
				<p>
					You agree to use our services only for lawful purposes and
					in a way that does not infringe upon the rights of others or
					restrict their use of the service.
				</p>

				<h2>4. Intellectual Property</h2>
				<p>
					All content, features, and functionality on CalcTools,
					including but not limited to text, graphics, logos, and
					code, are owned by CalcTools and are protected by copyright,
					trademark, and other intellectual property laws.
				</p>

				<h2>5. Disclaimer of Warranties</h2>
				<p>
					CalcTools provides its services on an &quot;as is&quot; and
					&quot;as available&quot; basis. We make no warranties,
					expressed or implied, regarding the reliability, accuracy,
					or availability of our services.
				</p>

				<h2>6. Limitation of Liability</h2>
				<p>
					CalcTools shall not be liable for any indirect, incidental,
					special, consequential, or punitive damages resulting from
					your use of or inability to use our services.
				</p>

				<h2>7. Financial Calculations</h2>
				<p>
					The financial calculators provided by CalcTools are for
					informational purposes only and should not be considered
					financial advice. We recommend consulting with a qualified
					financial professional before making any financial
					decisions.
				</p>

				<h2>8. Changes to Terms</h2>
				<p>
					We reserve the right to modify these Terms of Service at any
					time. We will provide notice of significant changes by
					updating the &quot;Last Updated&quot; date at the top of
					this page.
				</p>

				<h2>9. Governing Law</h2>
				<p>
					These Terms shall be governed by and construed in accordance
					with the laws of the United States, without regard to its
					conflict of law provisions.
				</p>

				<h2>10. Contact Information</h2>
				<p>
					If you have any questions about these Terms, please contact
					us at legal@example.com.
				</p>
			</div>
		</div>
	);
}
