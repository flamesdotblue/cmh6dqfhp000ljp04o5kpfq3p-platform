export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#FF9933]/10 via-white to-[#0D47A1]/10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#FF9933]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#0D47A1]/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pb-24">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-[#006B3C] flex items-center justify-center text-white font-bold">PA</div>
            <span className="font-semibold tracking-tight">Punjab Affordable Housing Scheme</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#details" className="text-sm font-medium text-slate-700 hover:text-[#0D47A1]">Scheme Details</a>
            <a href="#location" className="text-sm font-medium text-slate-700 hover:text-[#0D47A1]">Location</a>
            <a href="#apply" className="text-sm font-medium text-slate-700 hover:text-[#0D47A1]">Apply</a>
          </div>
        </nav>
        <div className="grid lg:grid-cols-2 gap-10 mt-14 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Punjab Affordable Housing Scheme 2025 – Govt. Approved Plots in Mohali
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Inviting applications for the allotment of 15 residential plots near Chandigarh–Ambala Highway, Derabassi, District Mohali.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center justify-center bg-[#006B3C] hover:bg-[#005c34] text-white font-semibold px-6 py-3 rounded-xl shadow-sm">
                Apply Now
              </a>
              <a href="#details" className="inline-flex items-center justify-center border border-[#0D47A1] text-[#0D47A1] hover:bg-[#0D47A1]/10 font-semibold px-6 py-3 rounded-xl">
                View Scheme Details
              </a>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#006B3C]"></span> Fully authorized by Punjab Government</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0D47A1]"></span> Prime location near Chandigarh Airport</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
              alt="Modern homes and family-friendly community"
              className="rounded-2xl shadow-xl ring-1 ring-black/5"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl p-4 shadow-md">
              <p className="text-sm font-semibold">Chandigarh–Ambala Highway, Derabassi</p>
              <p className="text-xs text-slate-600">Minutes from Mohali Airport • Excellent connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
