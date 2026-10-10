import React, { useState } from 'react';
import { CHECKLIST_PRESETS, ChecklistItem } from '../data/visaData';
import { CheckSquare, Square, Download, ArrowRight, CheckCircle2, FileText, Info } from 'lucide-react';

interface DocumentChecklistProps {
  onContinueApplication: (presetName: string, completedCount: number, totalCount: number) => void;
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({
  onContinueApplication,
}) => {
  const [selectedPresetKey, setSelectedPresetKey] = useState<string>('canada-study');
  // Track checked item IDs
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    c1: true,
    c2: true,
    c3: true,
    c4: false,
    c5: true,
    c6: false,
  });
  const [downloadNotice, setDownloadNotice] = useState<boolean>(false);

  const presets = [
    { key: 'canada-study', label: '🇨🇦 Canada Student Visa (SDS)' },
    { key: 'australia-study', label: '🇦🇺 Australia Subclass 500' },
    { key: 'uk-study', label: '🇬🇧 UK Student Visa (CAS)' },
    { key: 'canada-work', label: '💼 Canada Skilled Work (FSW)' },
  ];

  const currentItems = CHECKLIST_PRESETS[selectedPresetKey] || CHECKLIST_PRESETS['canada-study'];

  const handleToggle = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = currentItems.filter((item) => checkedItems[item.id]).length;
  const totalCount = currentItems.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  const handleDownload = () => {
    setDownloadNotice(true);
    const presetLabel = presets.find((p) => p.key === selectedPresetKey)?.label || 'Visa Checklist';
    const lines = [
      `=========================================================`,
      `FRENZY OVERSEAS PVT LTD — OFFICIAL DOCUMENT CHECKLIST`,
      `Document Audit Track: ${presetLabel}`,
      `Completed: ${completedCount} / ${totalCount} (${percentage}%)`,
      `Generated on: ${new Date().toLocaleDateString()}`,
      `=========================================================`,
      ``,
      `MANDATORY CONSULAR DOCUMENTS:`,
      `---------------------------------------------------------`,
    ];

    currentItems.forEach((item) => {
      const isDone = !!checkedItems[item.id];
      lines.push(`[${isDone ? 'X' : ' '}] ${item.name}`);
      lines.push(`    Category: ${item.category} | Notes: ${item.notes}`);
    });

    lines.push(``);
    lines.push(`=========================================================`);
    lines.push(`Next Step: Schedule Document Certification with Frenzy Overseas.`);
    lines.push(`Head Office: Frenzy Overseas Pvt Ltd | contact@frenzyoverseas.com`);

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Frenzy_Overseas_Checklist_${selectedPresetKey}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadNotice(false), 3500);
  };

  return (
    <section id="checklist" className="py-16 lg:py-24 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Context & Presets */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4A72C]">
              IMMIGRATION UTILITY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#102A43] mt-2">
              Interactive Document Checklist Tool
            </h2>
            <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
              Visa applications fail most often due to incomplete paperwork or incorrect financial formats. Use our live verification tool to audit your files before lodgement.
            </p>

            {/* Stream Selector */}
            <div className="mt-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                Select Visa Stream:
              </span>
              <div className="space-y-2 pt-1">
                {presets.map((preset) => (
                  <button
                    key={preset.key}
                    onClick={() => setSelectedPresetKey(preset.key)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-between cursor-pointer ${
                      selectedPresetKey === preset.key
                        ? 'bg-[#FBF8F1] border-[#D4A72C] text-[#102A43] shadow-xs'
                        : 'bg-white border-[#E8E8E8] text-[#64748B] hover:border-[#D4A72C]/40 hover:text-[#102A43]'
                    }`}
                  >
                    <span>{preset.label}</span>
                    {selectedPresetKey === preset.key && (
                      <span className="w-2 h-2 rounded-full bg-[#D4A72C]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Legal Guarantee Callout */}
            <div className="mt-8 p-4 rounded-xl bg-[#FBF8F1] border border-[#E8E8E8] flex items-start gap-3 text-xs text-[#64748B]">
              <Info className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#102A43]">Frenzy Zero-Defect Policy:</strong> Every document submitted via Frenzy Overseas undergoes dual-tier verification by our documentation audit committee.
              </div>
            </div>
          </div>

          {/* Right Column: Live Checklist Card */}
          <div className="lg:col-span-7 bg-[#FBF8F1] rounded-2xl border border-[#E8E8E8] p-6 sm:p-8 shadow-sm">
            {/* Header with Live Progress */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E8E8] pb-5 mb-6">
              <div>
                <div className="text-xs font-semibold text-[#D4A72C] uppercase tracking-wider">
                  Required Documents
                </div>
                <h3 className="font-display text-xl font-bold text-[#102A43]">
                  {presets.find((p) => p.key === selectedPresetKey)?.label}
                </h3>
              </div>

              {/* Progress Tracker */}
              <div className="sm:text-right">
                <div className="font-mono text-sm font-bold text-[#102A43]">
                  {completedCount} / {totalCount} completed ({percentage}%)
                </div>
                <div className="w-40 bg-[#E8E8E8] h-2 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4A72C] to-[#E8C968] rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {currentItems.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggle(item.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isChecked
                        ? 'bg-white border-[#16835B]/40 shadow-2xs'
                        : 'bg-white/70 border-[#E8E8E8] hover:border-[#D4A72C]/40'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-[#16835B]" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300 hover:text-[#D4A72C]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-bold ${
                            isChecked ? 'text-[#102A43]' : 'text-[#171717]'
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#F4F6F8] text-[#64748B]">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">
                        {item.notes}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions Footer */}
            <div className="mt-6 pt-5 border-t border-[#E8E8E8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#102A43] bg-white border border-[#E8E8E8] hover:border-[#D4A72C] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>{downloadNotice ? 'Saved to Device' : 'Download Checklist File'}</span>
              </button>

              <button
                onClick={() =>
                  onContinueApplication(
                    presets.find((p) => p.key === selectedPresetKey)?.label || 'Visa Stream',
                    completedCount,
                    totalCount
                  )
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all shadow-sm cursor-pointer"
              >
                <span>Continue Application ({completedCount}/{totalCount})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
