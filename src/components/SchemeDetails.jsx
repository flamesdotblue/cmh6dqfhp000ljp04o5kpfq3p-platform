export default function SchemeDetails() {
  return (
    <section id="details" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Scheme Overview</h2>
          <p className="mt-3 text-slate-700">
            The Punjab Affordable Housing Scheme is a Punjab Government–approved initiative offering limited residential plots in a transparent, family-first development near the Chandigarh–Ambala Highway, Derabassi, District Mohali.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
            <li><strong>Prime location:</strong> Derabassi, Mohali – minutes from Chandigarh & Airport</li>
            <li><strong>Fully authorized</strong> by Punjab Government</li>
            <li><strong>Affordable, family-ready residential plots</strong> with modern infrastructure</li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-900">DETAILS OF OFFERED UNITS FOR ALLOTMENT UNDER SCHEME</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="p-3 text-left">Numbers of Plots</th>
                    <th className="p-3 text-left">Plot Size (Sq. Yards)</th>
                    <th className="p-3 text-left">Plot Dimension</th>
                    <th className="p-3 text-left">Rate / Sq. Yard</th>
                    <th className="p-3 text-left">Basic Sale Price</th>
                    <th className="p-3 text-left">12% Special Discount</th>
                    <th className="p-3 text-left">Net Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">10</td>
                    <td className="p-3">100</td>
                    <td className="p-3">20×45</td>
                    <td className="p-3">Rs. 29,990/-</td>
                    <td className="p-3">Rs. 29,99,000/-</td>
                    <td className="p-3">Rs. 3,59,900/-</td>
                    <td className="p-3 font-semibold text-[#006B3C]">Rs. 26,39,100/-</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">5</td>
                    <td className="p-3">110</td>
                    <td className="p-3">22×45</td>
                    <td className="p-3">Rs. 29,990/-</td>
                    <td className="p-3">Rs. 32,98,900/-</td>
                    <td className="p-3">Rs. 3,95,890/-</td>
                    <td className="p-3 font-semibold text-[#006B3C]">Rs. 29,03,010/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 text-xs text-slate-600 bg-slate-50 border-t border-slate-200">PLC and other charges extra as applicable.</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-900">Important Events and Dates</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="p-3 text-left">Event</th>
                    <th className="p-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">Scheme Starts</td>
                    <td className="p-3">10th October, 2025</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">Last Date of Submission of Application Form & Fees</td>
                    <td className="p-3">19th October, 2025</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">DRAW WILL BE HELD ON SITE</td>
                    <td className="p-3">23rd October, 2025</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">Last Date for 25% Completion</td>
                    <td className="p-3">31st October, 2025</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="p-3">Last Date of Full and Final Payment & Registration</td>
                    <td className="p-3">30th November, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
