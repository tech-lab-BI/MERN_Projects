function Footer() {
  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} CashExpress. All rights reserved.
          [Bikram✍️]
        </p>
        <p className="text-xs text-slate-400 font-semibold text-center">
          Project under process, accessible by authorized Meta users only.
        </p>
        <p className="text-xs text-slate-400 font-semibold text-center sm:text-right uppercase tracking-wider">
          More projects coming soon.......
        </p>
      </div>
    </footer>
  );
}
export default Footer;
