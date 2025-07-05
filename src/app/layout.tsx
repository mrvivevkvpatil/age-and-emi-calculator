import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "CalcTools - Age & EMI Calculator",
		template: "%s | CalcTools",
	},
	description:
		"Free online tools for age calculation and EMI calculation with accurate results.",
	keywords: [
		"calculator",
		"age calculator",
		"EMI calculator",
		"loan calculator",
		"financial tools",
	],
	authors: [{ name: "CalcTools" }],
	creator: "CalcTools",
	publisher: "CalcTools",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://calctools.vercel.app",
		title: "CalcTools - Age & EMI Calculator",
		description:
			"Free online tools for age calculation and EMI calculation with accurate results.",
		siteName: "CalcTools",
	},
	twitter: {
		card: "summary_large_image",
		title: "CalcTools - Age & EMI Calculator",
		description:
			"Free online tools for age calculation and EMI calculation with accurate results.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<title>CalcTools - Age & EMI Calculator</title>
				<meta name='robots' content='index, follow' />
				<Script src='https://www.googletagmanager.com/gtag/js?id=G-18V1J1V111' />
				<Script id='google-tag-manager' strategy='lazyOnload'>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-18V1J1V111');
          `}
				</Script>
				{/* Google Adsense publisher code */}
				<Script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456'
					crossOrigin='anonymous'
					strategy='lazyOnload'></Script>
				{/* google Search Console verification */}
				<meta name='google-site-verification' content='G-18V1J1V111' />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<div className='flex min-h-screen flex-col'>
						<Navbar />
						<main className='flex-1'>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
