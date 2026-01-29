export default function Footer() {
  return (
    <footer className="py-20 border-t border-accent-navy/10 bg-white/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center">

          {/* Main Title */}
          <h3 className="font-display font-bold text-[32px] lg:text-[42px] text-accent-navy tracking-tighter shrink-0 leading-none">
            Get in Touch
          </h3>

          {/* First Separator */}
          <div className="hidden lg:block w-px h-12 bg-accent-navy/10 mx-10 lg:mx-12" />

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-12 mt-8 lg:mt-0 grow">

            {/* Information sections */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-10 lg:gap-12">
              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent-navy/30 font-bold block">Collaborate</span>
                <p className="text-[20px] lg:text-[24px] font-display font-bold text-accent-navy tracking-tight leading-none">
                  Nicole C. Wang
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent-navy/30 font-bold block">Email</span>
                <a
                  href="mailto:cw3715@nyu.edu"
                  className="text-[17px] lg:text-[20px] text-accent-navy/60 hover:text-accent-orange transition-all duration-300 font-medium tracking-tight leading-none block pb-[1px]"
                >
                  cw3715@nyu.edu
                </a>
              </div>
            </div>

            {/* Second Separator - Between Email and Icons */}
            <div className="hidden lg:block w-px h-10 bg-accent-navy/10 ml-4 mr-0" />

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pb-[2px]">
              <a
                href="https://www.linkedin.com/in/nicole-c-wang-cfa-50a59b315/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white shadow-[0_2px_12px_-3px_rgba(27,27,58,0.06)] border border-accent-navy/5 flex items-center justify-center text-accent-navy/80 hover:text-accent-orange hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-currentColor group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/ninicwang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white shadow-[0_2px_12px_-3px_rgba(27,27,58,0.06)] border border-accent-navy/5 flex items-center justify-center text-accent-navy/80 hover:text-accent-orange hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-currentColor group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
