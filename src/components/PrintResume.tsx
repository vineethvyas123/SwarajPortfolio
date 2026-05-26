import { profileData, competencies, experienceData, education, achievements } from "../data";

export default function PrintResume() {
  return (
    <div id="print-resume-target" className="hidden print:block bg-white text-slate-900 font-sans p-8 max-w-[8.5in] mx-auto text-[11px] leading-relaxed select-text">
      {/* Top Header Card */}
      <div className="border-b-2 border-slate-950 pb-4 flex justify-between items-start">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-slate-900 mb-1">{profileData.name}</h1>
          <p className="text-sm font-semibold tracking-wide text-slate-700 uppercase">
            {profileData.currentTitle} &middot; {profileData.company}
          </p>
          <p className="text-xs italic text-slate-500 mt-1">
            "Leadership with AI" &mdash; Indian School of Business (ISB) Certified
          </p>
        </div>
        <div className="text-right text-[10px] space-y-1">
          <p className="font-mono"><strong>Email:</strong> {profileData.email}</p>
          <p className="font-mono"><strong>Phone:</strong> {profileData.phone}</p>
          <p className="font-mono"><strong>Location:</strong> {profileData.location}</p>
          <p className="font-mono"><strong>LinkedIn:</strong> {profileData.linkedinLabel}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-12 gap-6 mt-5 items-start">
        
        {/* Left main column: Professional summary & job histories */}
        <div className="col-span-8 space-y-5">
          
          {/* Executive Summary */}
          <div>
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-[10px] text-justify text-slate-800 leading-relaxed font-light">
              Weave of 19+ years across real estate, fintech, and digital health. Expertly directs multi-million dollar portfolios ($13M+ direct JLL remit) and orchestrates high-performing engineers across four separate geographies under a unified culture of psychological safety, value-delivery, and AI-led platform transformations. Proven track record of demonstrating immediate bottom-line and automation payouts ($12M+ in annualized savings) that C-suites confidently defend.
            </p>
          </div>

          {/* Work experience */}
          <div>
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Careers
            </h2>
            <div className="space-y-4">
              {experienceData.map((job) => (
                <div key={job.id} className="page-break-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-slate-900 text-[11px] font-serif">{job.role}</h3>
                    <span className="text-[9px] font-mono font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-[2px]">
                      {job.startDate} &mdash; {job.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px] italic text-slate-700 mb-1.5">
                    <span>{job.company}</span>
                    <span>{job.location}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-[9.5px] text-slate-800">
                    {job.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right smaller column: Core skills, Certs, Achievements */}
        <div className="col-span-4 space-y-5">
          
          {/* Competency pillars block */}
          <div>
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Core Expertise
            </h2>
            <div className="flex flex-wrap gap-1">
              {competencies.map((c, i) => (
                <span key={i} className="text-[9px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded-[2px] border border-slate-200">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Primary Accolades
            </h2>
            <div className="space-y-3">
              {achievements.map((ach) => (
                <div key={ach.id} className="text-[10px]">
                  <p className="font-semibold text-slate-900 font-serif flex items-center gap-1.5">
                    <span>{ach.icon}</span>
                    <span>{ach.title}</span>
                  </p>
                  <p className="text-slate-600 text-[9px] mt-0.5 leading-normal italic">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic qualifications */}
          <div>
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Credentials
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-[10px]">
                  <p className="font-bold text-slate-900 font-serif leading-tight">{edu.degree}</p>
                  <p className="text-slate-700 text-[9px] leading-tight font-medium mt-0.5">{edu.institution}</p>
                  <p className="text-slate-500 text-[9px] italic mt-0.5 leading-snug">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Embedded Print Styling */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-resume-target, #print-resume-target * {
            visibility: visible;
          }
          #print-resume-target {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: #0b1329 !important;
          }
          @page {
            size: letter;
            margin: 0.5in;
          }
          .page-break-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
