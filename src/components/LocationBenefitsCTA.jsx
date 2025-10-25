import { CheckCircle, MapPin, Home, Users } from 'lucide-react'

export default function LocationBenefitsCTA() {
  return (
    <section id="location" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Location & Connectivity</h2>
            <p className="mt-3 text-slate-700">
              Located on the rapidly developing corridor near Mohali Airport, with direct access to Chandigarh and Ambala.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-slate-700"><MapPin className="h-5 w-5 text-[#0D47A1] mt-0.5" /> Chandigarh–Ambala Highway, Derabassi, District Mohali</li>
              <li className="flex items-start gap-3 text-slate-700"><Home className="h-5 w-5 text-[#006B3C] mt-0.5" /> Family-friendly, safe, and future-ready neighborhood</li>
              <li className="flex items-start gap-3 text-slate-700"><CheckCircle className="h-5 w-5 text-[#FF9933] mt-0.5" /> Government-approved, transparent allotment process</li>
              <li className="flex items-start gap-3 text-slate-700"><Users className="h-5 w-5 text-slate-900 mt-0.5" /> Ideal for first-time buyers and smart investors</li>
            </ul>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
            <iframe
              title="Google Map - Derabassi Chandigarh Ambala Highway"
              src="https://www.google.com/maps?q=Derabassi%2C%20Punjab&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div id="benefits" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Why Choose Punjab Affordable Housing Scheme</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-5 bg-slate-50 border border-slate-200">
              <div className="h-10 w-10 rounded-lg bg-[#006B3C] text-white flex items-center justify-center mb-3">
                <CheckCircle className="h-5 w-5" />
              </div>
              <p className="font-semibold">Government-Approved & Transparent Process</p>
            </div>
            <div className="rounded-xl p-5 bg-slate-50 border border-slate-200">
              <div className="h-10 w-10 rounded-lg bg-[#0D47A1] text-white flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="font-semibold">Prime Location & Excellent Connectivity</p>
            </div>
            <div className="rounded-xl p-5 bg-slate-50 border border-slate-200">
              <div className="h-10 w-10 rounded-lg bg-[#FF9933] text-white flex items-center justify-center mb-3">
                <Home className="h-5 w-5" />
              </div>
              <p className="font-semibold">Modern Infrastructure & Safe Environment</p>
            </div>
            <div className="rounded-xl p-5 bg-slate-50 border border-slate-200">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-3">
                <Users className="h-5 w-5" />
              </div>
              <p className="font-semibold">Perfect for Families & Smart Investors</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519533910536-3af77c0c3f59?q=80&w=1600&auto=format&fit=crop"
              alt="Happy family celebrating new home ownership in Punjab"
              className="rounded-2xl shadow-xl ring-1 ring-black/5"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-sm shadow">
              “A home where your story begins.”
            </div>
          </div>
          <div id="apply">
            <h3 className="text-2xl font-bold text-slate-900">Ready to Own Your Dream Home?</h3>
            <p className="mt-3 text-slate-700">Apply now for Punjab’s most trusted affordable housing opportunity.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#006B3C] hover:bg-[#005c34] text-white font-medium px-6 py-3 rounded-xl shadow-sm"
                aria-label="Apply Online Now"
              >
                Apply Online Now
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center border border-[#0D47A1] text-[#0D47A1] hover:bg-[#0D47A1]/10 font-medium px-6 py-3 rounded-xl"
                aria-label="View Scheme Details"
              >
                View Scheme Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
