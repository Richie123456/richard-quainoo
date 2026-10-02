import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <div className="bento-card w-full">
      <div className="bento-label">Education & Certifications</div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-4 h-4 text-[var(--color-accent)]" />
            <div className="font-semibold text-sm">Academic Background</div>
          </div>
          <div className="text-xs text-[var(--color-text-secondary)] pl-6 space-y-1">
            <div>MSc. Computer Science - University of Ghana</div>
            <div>BA. Economics & Information Studies - University of Ghana</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-[var(--color-accent)]" />
            <div className="font-semibold text-sm">Certifications</div>
          </div>
          <ul className="text-xs text-[var(--color-text-secondary)] pl-6 list-disc list-inside space-y-1">
            <li>AWS Solutions Architect</li>
            <li>AWS Data Engineering Associate</li>
            <li>AWS Cloud Practitioner</li>
            <li>AWS AI Practitioner</li>
            <li>Microsoft Certified PowerBI Data Analyst</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
