"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

// Update the navLinks array to include separate calculator pages
const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/age-calculator", label: "Age Calculator" },
	{ href: "/emi-calculator", label: "EMI Calculator" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/terms", label: "Terms" },
	{ href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<span className='text-xl font-bold bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent'>
						CalcTools
					</span>
				</Link>
				<nav className='hidden md:flex gap-6'>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								pathname === link.href
									? "text-foreground"
									: "text-muted-foreground"
							}`}>
							{link.label}
						</Link>
					))}
				</nav>
				<div className='flex items-center gap-2'>
					<ModeToggle />
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild className='md:hidden'>
							<Button variant='outline' size='icon'>
								<Menu className='h-5 w-5' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='right'>
							<nav className='flex flex-col gap-4 mt-8'>
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setOpen(false)}
										className={`text-sm font-medium transition-colors hover:text-primary ${
											pathname === link.href
												? "text-foreground"
												: "text-muted-foreground"
										}`}>
										{link.label}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
