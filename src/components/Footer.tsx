export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">
              TDK<span className="text-accent">.</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted">
            <a
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
            <a
              href="#why-us"
              className="hover:text-foreground transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="text-sm text-muted">
            &copy; {currentYear} TDK Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
