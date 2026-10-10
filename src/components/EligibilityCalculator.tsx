import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, ArrowRight, Download, Calendar, RefreshCw, FileText, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/visaData';

interface EligibilityCalculatorProps {
  onOpenConsultation: (profileData?: {
    country: string;
    purpose: string;
    score: number;
    education: string;
  }) => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({
  onOpenConsultation,
}) => {
  // Form State
  const [country, setCountry] = useState<string>('canada');
  const [purpose, setPurpose] = useState<string>('study');
  const [ageGroup, setAgeGroup] = useState<string>('22-26');
  const [education, setEducation] = useState<string>('bachelor');
  const [englishScore, setEnglishScore] = useState<string>('ielts_7');
  const [experience, setExperience] = useState<string>('1-3');

  // Evaluation Result State
  const [evaluated, setEvaluated] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Scoring Logic based on country and inputs
  const calculateResult = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setEvaluated(true);
    }, 450);
  };

  const getScoreData = () => {
    let score = 50;

    // Age scoring
    if (ageGroup === '18-21' || ageGroup === '22-26') score += 18;
    else if (ageGroup === '27-32') score += 15;
    else if (ageGroup === '33-39') score += 10;
    else score += 5;

    // Education scoring
    if (education === 'master' || education === 'phd') score += 20;
    else if (education === 'bachelor') score += 18;
    else if (education === 'diploma') score += 12;
    else score += 8;

    // Language proficiency scoring
    if (englishScore === 'ielts_75') score += 15;
    else if (englishScore === 'ielts_7') score += 12;
    else if (englishScore === 'ielts_6') score += 8;
    else score += 2;

    // Experience scoring
    if (experience === '5+') score += 10;
    else if (experience === '3-5') score += 8;
    else if (experience === '1-3') score += 6;
    else score += 4;

    // Clamp score
    score = Math.min(score, 98);

    const selectedDest = DESTINATIONS.find((d) => d.id === country) || DESTINATIONS[0];

    let category = 'Exceptional';
    let statusClass = 'text-[#16835B] bg-[#16835B]/10 border-[#16835B]/30';
    let verdict = 'Direct Fast-Track Eligible';
    let advice = `Your profile demonstrates high alignment with ${selectedDest.name}'s strict immigration criteria. You qualify for direct-stream priority processing with strong university and visa grant prospects.`;

    if (score < 75 && score >= 60) {
      category = 'Good';
      statusClass = 'text-[#D4A72C] bg-[#D4A72C]/10 border-[#D4A72C]/30';
      verdict = 'Standard Stream Eligible';
      advice = `Your profile meets the foundational prerequisites for ${selectedDest.name}. With strategic Statement of Purpose (SOP) refinement and financial dossier structuring, your approval probability is very favorable.`;
    } else if (score < 60) {
      category = 'Conditional';
      statusClass = 'text-[#102A43] bg-[#102A43]/10 border-[#102A43]/30';
      verdict = 'Requires Profile Enhancement';
      advice = `We recommend a brief profile strengthening strategy—such as retaking your language test or considering pre-master/pathway institutions—to maximize visa approval confidence.`;
    }

    return { score, category, statusClass, verdict, advice, selectedDest };
  };

  const result = getScoreData();

  const handleDownloadChecklist = () => {
    setDownloadSuccess(true);
    // Generate clean text-based file download
    const destName = result.selectedDest.name;
    const content = `=====================================================
FRENZY OVERSEAS PVT LTD — OFFICIAL VISA DOSSIER
Preliminary Assessment Report & Pre-Filing Checklist
=====================================================

Applicant Assessment Summary:
----------------------------------------
Target Destination : ${destName} (${result.selectedDest.flag})
Intended Category  : ${purpose.toUpperCase()}
Eligibility Score  : ${result.score} / 100 (${result.category})
Status Feasibility : ${result.verdict}
Highest Education  : ${education.toUpperCase()}
English Benchmark  : ${englishScore}
Avg Processing Time: ${result.selectedDest.avgProcessingTime}
Work Rights Notice : ${result.selectedDest.postStudyWork}

Next Steps & Mandatory Documentation:
----------------------------------------
[ ] Valid International Passport (Bio data & address pages)
[ ] Certified Academic Transcripts & Degrees
[ ] Standardized Language Proficiency Report (IELTS / PTE)
[ ] Proof of Financial Solvency (GIC / Blocked Account / Bank Proof)
[ ] Official Acceptance Letter / Confirmation of Enrolment
[ ] Customized Statement of Purpose (SOP) vetted by Frenzy Overseas
[ ] Panel Physician Medical Clearance & Police Clearance Certificate

Consultation Reference: FO-EVAL-${Date.now().toString().slice(-6)}
Headquarters: Frenzy Overseas Pvt Ltd
Contact: admissions@frenzyoverseas.com | +91 98765 43210
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Frenzy_Overseas_${destName}_Checklist.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="eligibility" className="py-16 lg:py-24 bg-[#FBF8F1] border-b border-[#E8E8E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4A72C]/40 text-[#D4A72C] text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Assessment Tool</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#102A43]">
            Check Your Visa Eligibility in 60 Seconds
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            Answer a few transparent questions to calculate your instant points score and receive an actionable roadmap tailored to your dream destination.
          </p>
        </div>

        {/* Main Utility Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E8E8E8] shadow-[0_8px_30px_rgba(16,42,67,0.06)] overflow-hidden">
          {/* Top Bar of Tool */}
          <div className="bg-[#102A43] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#E8C968]">
                Smart Consular Assessment Engine
              </span>
            </div>
            <div className="text-xs text-slate-300">
              Updated for 2025/2026 Regulations
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            {!evaluated ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Field 1: Destination */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                      Where do you want to go?
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="canada">🇨🇦 Canada (Study & PR Express)</option>
                      <option value="australia">🇦🇺 Australia (Subclass 500 & Skilled)</option>
                      <option value="uk">🇬🇧 United Kingdom (Graduate Route)</option>
                      <option value="usa">🇺🇸 United States (F-1 & STEM OPT)</option>
                      <option value="germany">🇩🇪 Germany (Tuition-Free & Opportunity)</option>
                      <option value="newzealand">🇳🇿 New Zealand (Green List Fast-Track)</option>
                    </select>
                  </div>

                  {/* Field 2: Purpose */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                      What is your purpose?
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="study">🎓 Higher Education / Study Abroad</option>
                      <option value="work">💼 Skilled Work / Employment Visa</option>
                      <option value="pr">🏠 Permanent Residency (PR Points)</option>
                      <option value="visitor">✈️ Visitor & Tourist Visa</option>
                      <option value="business">🏢 Business & Investor Expansion</option>
                    </select>
                  </div>

                  {/* Field 3: Age */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                      Your Age Group
                    </label>
                    <select
                      value={ageGroup}
                      onChange={(e) => setAgeGroup(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="18-21">18 - 21 Years (Prime Undergraduate)</option>
                      <option value="22-26">22 - 26 Years (Prime Graduate / Early Career)</option>
                      <option value="27-32">27 - 32 Years (Experienced Professional)</option>
                      <option value="33-39">33 - 39 Years (Senior Professional)</option>
                      <option value="40+">40+ Years (Executive / Investor)</option>
                    </select>
                  </div>

                  {/* Field 4: Education */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                      Highest Completed Education
                    </label>
                    <select
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="bachelor">Bachelor's Degree (3 or 4 Years)</option>
                      <option value="master">Master's Degree / Post-Grad Diploma</option>
                      <option value="diploma">Associate Degree / 2-Year Diploma</option>
                      <option value="highschool">High School (12th Standard Completed)</option>
                      <option value="phd">Doctorate / PhD</option>
                    </select>
                  </div>

                  {/* Field 5: English Proficiency */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                      English Test Score (IELTS / PTE / TOEFL)
                    </label>
                    <select
                      value={englishScore}
                      onChange={(e) => setEnglishScore(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="ielts_75">IELTS 7.5+ / PTE 76+ (High Band)</option>
                      <option value="ielts_7">IELTS 6.5 - 7.0 / PTE 65 - 75 (Standard High)</option>
                      <option value="ielts_6">IELTS 6.0 / PTE 58 - 64 (Minimum Entry)</option>
                      <option value="not_yet">Not Appeared Yet / Medium of Instruction</option>
                    </select>
                  </div>

                  {/* Field 6: Experience */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                      Relevant Work Experience
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-sm font-semibold text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="1-3">1 - 3 Years Work Experience</option>
                      <option value="3-5">3 - 5 Years Work Experience</option>
                      <option value="5+">5+ Years Senior Work Experience</option>
                      <option value="fresh">Fresh Graduate / Student (&lt; 1 Year)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Calculation Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8E8E8]">
                  <div className="flex items-center gap-2 text-xs text-[#64748B]">
                    <Sparkles className="w-4 h-4 text-[#D4A72C]" />
                    <span>Instant algorithmic estimation based on real embassy criteria</span>
                  </div>

                  <button
                    onClick={calculateResult}
                    disabled={isCalculating}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all shadow-[0_4px_14px_rgba(212,167,44,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isCalculating ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Evaluating Profile...</span>
                      </>
                    ) : (
                      <>
                        <span>Check Preliminary Eligibility</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Results Dashboard */
              <div className="space-y-6 animate-fadeIn">
                <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#E8E8E8]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E8E8E8] pb-4 mb-5">
                    <div>
                      <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                        Preliminary Assessment for {result.selectedDest.name} {result.selectedDest.flag}
                      </div>
                      <h3 className="text-xl font-bold text-[#102A43] mt-0.5">
                        Your Preliminary Eligibility: <span className="text-[#B88A18]">{result.category}</span>
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                          Calculated Score
                        </div>
                        <div className="font-display text-3xl font-bold text-[#102A43] tabular-nums">
                          {result.score}<span className="text-base text-[#64748B] font-normal">/100</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${result.statusClass}`}>
                        {result.verdict}
                      </div>
                    </div>
                  </div>

                  {/* Summary & Strategy */}
                  <p className="text-sm text-[#171717] leading-relaxed mb-6">
                    {result.advice}
                  </p>

                  {/* Country Key Metric Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-white rounded-xl border border-[#E8E8E8]">
                      <div className="text-[11px] text-[#64748B]">Processing Window</div>
                      <div className="text-xs font-bold text-[#102A43] mt-0.5">
                        {result.selectedDest.avgProcessingTime}
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E8E8E8]">
                      <div className="text-[11px] text-[#64748B]">Post-Study Work Permit</div>
                      <div className="text-xs font-bold text-[#102A43] mt-0.5">
                        {result.selectedDest.postStudyWork}
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E8E8E8]">
                      <div className="text-[11px] text-[#64748B]">Language Benchmark</div>
                      <div className="text-xs font-bold text-[#102A43] mt-0.5">
                        {result.selectedDest.minIelts}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setEvaluated(false)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#64748B] hover:text-[#102A43] hover:bg-[#F4F6F8] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Recalculate with New Parameters</span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={handleDownloadChecklist}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-[#102A43] bg-white border border-[#D4A72C] hover:bg-[#FBF8F1] transition-colors shadow-xs"
                    >
                      <Download className="w-4 h-4 text-[#D4A72C]" />
                      <span>{downloadSuccess ? 'Checklist Downloaded!' : 'Download Dossier Checklist'}</span>
                    </button>

                    <button
                      onClick={() =>
                        onOpenConsultation({
                          country: result.selectedDest.name,
                          purpose,
                          score: result.score,
                          education,
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Free 1-on-1 Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
