import React from 'react'

const oursoulss = [
    "Professional and Non-Professional",
    "Therapy / Counseling",
    "Call Sessions",
    "Video Session",
    "Oursoulss Research Library",
    "Activities & Plans For Weaks/Month",
    "Easy Scheduling",
    "Access To Webinar & Workshops",
    "Connect Faster",
    "Progress Report",
    "Newsletter",
    "Group Therapy"
  ];
  
  const other = [
    "Only Professional Therapy / Counseling",
    "Call Sessions",
    "Video Session",
    "Easy Scheduling",
    "Connect Faster",
    "Activities & Plans For Weaks/Month"
  ];

const Comparison = () => {
  return (
    <div className='w-full bg-[#072B4C]'>

    <div className="container max-w-6xl mx-auto py-8">
    <h2 className='text-2xl sm:text-start text-neutral-50 sm:text-3xl ml-2 md:text-4xl max-w-xl my-5 text-center antialiased font-bold tracking-tight'>What makes OurSoulss unique?</h2>

    <table className="min-w-full text-neutral-100 border border-neutral-200/50 outline-none">
        <thead>
          <tr className="border border-neutral-200/50">
            <th className="py-2 px-4 border-b border-neutral-200/50">Service</th>
            <th className="py-2 px-4 border-b border-neutral-200/50">Oursoulss</th>
            <th className="py-2 px-4 border-b border-neutral-200/50">Other</th>
          </tr>
        </thead>
        <tbody>
          {oursoulss.map((service, index) => (
            <tr key={index} className="border border-neutral-200/50">
              <td className="py-2 px-4 border-b border-neutral-200/50">{service}</td>
              <td className="py-2 px-4 border-b border-neutral-200/50 text-center text-emerald-500">✔</td>
              <td className="py-2 px-4 border-b border-neutral-200/50 text-center text-emerald-500">
                {other.includes(service) ? "✔" : ""}
              </td>
            </tr>
          ))}
          {other.filter(service => !oursoulss.includes(service)).map((service, index) => (
            <tr key={index + oursoulss.length} className="border border-neutral-200/50">
              <td className="py-2 px-4 border-b border-neutral-200/50">{service}</td>
              <td className="py-2 px-4 border-b border-neutral-200/50 text-center"></td>
              <td className="py-2 px-4 border-b border-neutral-200/50 text-center text-emerald-500">✔</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Comparison