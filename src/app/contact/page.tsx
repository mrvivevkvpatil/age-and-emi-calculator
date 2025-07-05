import type { Metadata } from "next";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with the CalcTools team for questions, feedback, or suggestions.",
};

export default function ContactPage() {
	return (
		<div className='container max-w-3xl mx-auto py-10 space-y-10'>
			<section className='space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight text-center'>
					<span className='bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent'>
						Contact Us
					</span>
				</h1>
				<p className='text-xl text-muted-foreground text-center'>
					We&apos;d love to hear from you. Get in touch with our team.
				</p>
			</section>

			<div className='prose dark:prose-invert max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
				<div className='col-span-1 md:col-span-2'>
					<Card>
						<CardHeader>
							<CardTitle>Send us a message</CardTitle>
							<CardDescription>
								Fill out the form below and we&apos;ll get back
								to you as soon as possible.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div className='space-y-2'>
										<Label htmlFor='first-name'>
											First name
										</Label>
										<Input
											id='first-name'
											placeholder='Enter your first name'
										/>
									</div>
									<div className='space-y-2'>
										<Label htmlFor='last-name'>
											Last name
										</Label>
										<Input
											id='last-name'
											placeholder='Enter your last name'
										/>
									</div>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='email'
										type='email'
										placeholder='Enter your email'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='subject'>Subject</Label>
									<Input
										id='subject'
										placeholder='Enter the subject'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='message'>Message</Label>
									<Textarea
										id='message'
										placeholder='Enter your message'
										rows={5}
									/>
								</div>
								<Button
									type='submit'
									className='w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700'>
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>

				<div className='col-span-1'>
					<Card>
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>
								Other ways to get in touch with us.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-6'>
							<div className='flex items-start space-x-3'>
								<Mail className='h-5 w-5 text-muted-foreground mt-0.5' />
								<div>
									<h3 className='font-medium'>Email</h3>
									<p className='text-sm text-muted-foreground'>
										support@calctools.com
									</p>
									<p className='text-sm text-muted-foreground'>
										info@calctools.com
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<Phone className='h-5 w-5 text-muted-foreground mt-0.5' />
								<div>
									<h3 className='font-medium'>Phone</h3>
									<p className='text-sm text-muted-foreground'>
										+1 (555) 123-4567
									</p>
									<p className='text-sm text-muted-foreground'>
										Mon-Fri, 9AM-5PM EST
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<MapPin className='h-5 w-5 text-muted-foreground mt-0.5' />
								<div>
									<h3 className='font-medium'>Address</h3>
									<p className='text-sm text-muted-foreground'>
										123 Calculator Street
										<br />
										Suite 456
										<br />
										New York, NY 10001
										<br />
										United States
									</p>
								</div>
							</div>

							<div className='pt-4 border-t'>
								<h3 className='font-medium mb-2'>Follow Us</h3>
								<div className='flex space-x-4'>
									<a
										href='#'
										className='text-muted-foreground hover:text-foreground transition-colors'>
										Twitter
									</a>
									<a
										href='#'
										className='text-muted-foreground hover:text-foreground transition-colors'>
										Facebook
									</a>
									<a
										href='#'
										className='text-muted-foreground hover:text-foreground transition-colors'>
										Instagram
									</a>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
