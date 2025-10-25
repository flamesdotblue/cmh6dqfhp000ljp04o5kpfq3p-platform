export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-[#006B3C] flex items-center justify-center text-white font-bold">PA</div>
            <span className="font-semibold">Punjab Affordable Housing Scheme</span>
          </div>
          <p className="mt-3 text-sm text-slate-300">
            Government-approved residential plots on the Chandigarh–Ambala Highway, Derabassi, District Mohali. Transparent allotment. Family-first development.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 text-xs font-medium">
              Punjab Govt. Authorization Badge
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-100">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#details" className="hover:text-white">Scheme Details</a></li>
            <li><a href="#location" className="hover:text-white">Location Map</a></li>
            <li><a href="#apply" className="hover:text-white">Contact / Apply</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-100">Stay Updated</h4>
          <form className="mt-3 space-y-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email for newsletter"
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
            />
            <button
              type="submit"
              className="w-full bg-[#FF9933] hover:bg-[#e68c2e] text-slate-900 font-semibold px-3 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Punjab Affordable Housing Scheme. All rights reserved.</p>
          <p>Built with love in Punjab • Saffron • Emerald • Royal Blue</p>
        </div>
      </div>
    </footer>
  )
}
