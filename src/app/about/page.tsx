import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about CalcTools and our mission to provide free, accurate calculators for everyone.",
};

export default function AboutPage() {
	return (
		<div className='container max-w-3xl mx-auto py-10 space-y-10'>
			<section className='space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight text-center'>
					<span className='bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent'>
						About CalcTools
					</span>
				</h1>
				<p className='text-xl text-muted-foreground text-center'>
					Providing free, accurate calculators for everyone.
				</p>
			</section>

			<section className='space-y-6'>
				<h2 className='text-2xl font-bold'>Our Mission</h2>
				<p className='text-muted-foreground'>
					At CalcTools, our mission is to provide free, accurate, and
					easy-to-use calculators for everyone. We believe that
					financial planning and age calculation tools should be
					accessible to all, regardless of technical expertise or
					financial background.
				</p>
				<p className='text-muted-foreground'>
					We started this journey in 2023 with a simple age calculator
					and have since expanded to include various financial tools
					that help people make informed decisions about their
					finances.
				</p>
			</section>

			<section className='max-w-3xl mx-auto space-y-6'>
				<h2 className='text-2xl font-bold'>Our Values</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-xl font-semibold mb-2'>Accuracy</h3>
						<p className='text-muted-foreground'>
							We prioritize precision in all our calculators to
							ensure reliable results.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-xl font-semibold mb-2'>
							Accessibility
						</h3>
						<p className='text-muted-foreground'>
							Our tools are designed to be user-friendly and
							accessible to everyone.
						</p>
					</div>
					<div className='p-6 border rounded-lg bg-card text-card-foreground shadow-sm'>
						<h3 className='text-xl font-semibold mb-2'>
							Transparency
						</h3>
						<p className='text-muted-foreground'>
							We believe in clear, honest information with no
							hidden agendas.
						</p>
					</div>
				</div>
			</section>

			<section className='max-w-3xl mx-auto space-y-6'>
				<h2 className='text-2xl font-bold'>Our Team</h2>
				<p className='text-muted-foreground'>
					CalcTools is maintained by a small team of developers and
					financial experts who are passionate about creating useful
					tools that make a difference in people&apos;s lives.
				</p>
				<p className='text-muted-foreground'>
					We&apos;re constantly working to improve our existing
					calculators and develop new ones based on user feedback and
					needs.
				</p>
			</section>

			<section className='max-w-3xl mx-auto space-y-6 text-center'>
				<h2 className='text-2xl font-bold'>Get in Touch</h2>
				<p className='text-muted-foreground'>
					Have questions, suggestions, or feedback? We&apos;d love to
					hear from you!
				</p>
				<Button
					asChild
					className='bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700'>
					<Link href='/contact'>Contact Us</Link>
				</Button>
			</section>
		</div>
	);
}
