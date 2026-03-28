"use client";

import Button from "@/components/ui/Button";
import { PLATFORMS, LOCATIONS, JOB_TYPES } from "@/lib/constants";
import type { UserProfile } from "@/lib/types";

interface Props {
  profile: UserProfile;
  resumeFile: File | null;
  onBack: () => void;
  onFinish: () => void;
}

export default function StepDone({ profile, resumeFile, onBack, onFinish }: Props) {
  const locationLabel = LOCATIONS.find((l) => l.value === profile.location)?.label || profile.location;
  const jobTypeLabel = JOB_TYPES.find((j) => j.value === profile.job_type)?.label || profile.job_type;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-text">You&apos;re all set!</h2>
        <p className="text-sm text-text2 mt-1">Review your profile below, then head to the dashboard.</p>
      </div>

      {/* Summary */}
      <div className="space-y-4 text-sm">
        <SummaryRow label="Name" value={`${profile.name} ${profile.last_name}`} />
        <SummaryRow label="Email" value={profile.email} />
        <SummaryRow label="Phone" value={profile.phone} />
        <SummaryRow label="Keywords" value={profile.keywords.join(", ") || "—"} />
        <SummaryRow label="Location" value={locationLabel} />
        <SummaryRow label="Job type" value={jobTypeLabel} />
        <SummaryRow
          label="Platforms"
          value={
            profile.platforms
              .map((id) => PLATFORMS.find((p) => p.id === id)?.name || id)
              .join(", ")
          }
        />
        <SummaryRow label="Resume" value={resumeFile ? resumeFile.name : "Not uploaded"} />
        <SummaryRow
          label="Writing style"
          value={profile.writing_style ? `${profile.writing_style.slice(0, 80)}...` : "Not provided"}
        />
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="ghost" onClick={onBack}>Back</Button>
        <div className="flex gap-3">
          <Button variant="secondary" href="/extension">
            Install Extension
          </Button>
          <Button onClick={onFinish}>
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-border">
      <span className="text-text2">{label}</span>
      <span className="text-text font-medium text-right max-w-[60%]">{value}</span>
    </div>
  );
}
