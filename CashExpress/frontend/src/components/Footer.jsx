function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} CashExpress. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 font-medium text-center sm:text-right uppercase tracking-wider">
          More projects coming soon...
        </p>
      </div>
    </footer>
  );
}
export default Footer;
