import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">CalcTools</h3>
            <p className="text-sm text-muted-foreground">
              Free online calculators for all your financial and age calculation needs.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/age-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/emi-calculator"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="text-sm text-muted-foreground">Follow us on social media for updates and tips.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {currentYear} CalcTools. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
