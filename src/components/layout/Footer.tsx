export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 lg:py-20 border-t border-accent-navy/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative inline-block">
              <h3 className="font-display font-bold text-3xl text-accent-navy">
                Yiwu Trip
              </h3>
              <span className="absolute -top-2 -right-4 text-accent-orange text-lg">
                ★
              </span>
            </div>
            <p className="
              text-[15px]
              lg:text-[16px]
              leading-[1.7]
              tracking-[0.01em]
              text-accent-navy/60
              max-w-md
            ">
              Creating stunning visual narratives that captivate and inspire.
              Where art meets storytelling.
            </p>
            <div className="flex space-x-4">
              {["Instagram", "Behance", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent-navy/5 hover:bg-accent-orange flex items-center justify-center text-accent-navy hover:text-white transition-all duration-200"
                  aria-label={social}
                >
                  <span className="text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] font-medium">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-accent-navy mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Work", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60 hover:text-accent-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-accent-navy mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60">
              <li>hello@yiwutrip.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                <span className="text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em]">Mon - Fri</span>
                <br />
                <span className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em]">9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-navy/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60">
            © {currentYear} Yiwu Trip. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60">
            <a href="#" className="hover:text-accent-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

