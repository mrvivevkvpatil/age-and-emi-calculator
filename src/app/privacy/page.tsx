import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Learn how CalcTools collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
	return (
		<div className='container max-w-3xl mx-auto py-10 space-y-10'>
			<section className='space-y-4'>
				<h1 className='text-4xl font-bold tracking-tight text-center'>
					<span className='bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent'>
						Privacy Policy
					</span>
				</h1>
				<p className='text-xl text-muted-foreground text-center'>
					Last updated: April 26, 2024
				</p>
			</section>

			<div className='prose dark:prose-invert'>
				<h2>1. Introduction</h2>
				<p>
					At CalcTools, we respect your privacy and are committed to
					protecting your personal data. This Privacy Policy explains
					how we collect, use, and safeguard your information when you
					use our website and services.
				</p>

				<h2>2. Information We Collect</h2>
				<p>We may collect the following types of information:</p>
				<ul>
					<li>
						<strong>Personal Information:</strong> When you contact
						us or subscribe to our newsletter, we may collect your
						name and email address.
					</li>
					<li>
						<strong>Usage Data:</strong> We collect information
						about how you interact with our website, including pages
						visited, time spent on pages, and other usage
						statistics.
					</li>
					<li>
						<strong>Cookies and Tracking Technologies:</strong> We
						use cookies and similar tracking technologies to track
						activity on our website and hold certain information.
					</li>
				</ul>

				<h2>3. How We Use Your Information</h2>
				<p>
					We use the information we collect for various purposes,
					including:
				</p>
				<ul>
					<li>Providing and maintaining our services</li>
					<li>Improving our website and user experience</li>
					<li>
						Communicating with you, including responding to your
						inquiries
					</li>
					<li>Analyzing usage patterns to enhance our services</li>
					<li>
						Sending periodic emails if you subscribe to our
						newsletter
					</li>
				</ul>

				<h2>4. Data Security</h2>
				<p>
					We implement appropriate security measures to protect your
					personal information from unauthorized access, alteration,
					disclosure, or destruction. However, no method of
					transmission over the Internet or electronic storage is 100%
					secure, and we cannot guarantee absolute security.
				</p>

				<h2>5. Third-Party Services</h2>
				<p>
					We may use third-party services that collect, monitor, and
					analyze data to improve our service. These third parties
					have their own privacy policies addressing how they use such
					information.
				</p>

				<h2>6. Your Data Protection Rights</h2>
				<p>
					Depending on your location, you may have certain rights
					regarding your personal data, including:
				</p>
				<ul>
					<li>The right to access your personal data</li>
					<li>The right to rectify inaccurate personal data</li>
					<li>The right to request deletion of your personal data</li>
					<li>
						The right to restrict processing of your personal data
					</li>
					<li>The right to data portability</li>
					<li>
						The right to object to processing of your personal data
					</li>
				</ul>

				<h2>7. Children&apos;s Privacy</h2>
				<p>
					Our services are not intended for use by children under the
					age of 13. We do not knowingly collect personal information
					from children under 13. If you are a parent or guardian and
					believe your child has provided us with personal
					information, please contact us.
				</p>

				<h2>8. Changes to This Privacy Policy</h2>
				<p>
					We may update our Privacy Policy from time to time. We will
					notify you of any changes by posting the new Privacy Policy
					on this page and updating the &quot;Last Updated&quot; date.
				</p>

				<h2>9. Contact Us</h2>
				<p>
					If you have any questions about this Privacy Policy, please
					contact us at privacy@calctools.com.
				</p>
			</div>
		</div>
	);
}
