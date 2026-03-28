"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepPersonalInfo from "./StepPersonalInfo";
import StepJobPreferences from "./StepJobPreferences";
import StepPlatforms from "./StepPlatforms";
import StepResume from "./StepResume";
import StepWritingStyle from "./StepWritingStyle";
import StepDone from "./StepDone";
import type { UserProfile } from "@/lib/types";

const STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Job Preferences" },
  { id: 3, title: "Platforms" },
  { id: 4, title: "Resume" },
  { id: 5, title: "Writing Style" },
  { id: 6, title: "Done" },
];

const initialProfile: UserProfile = {
  name: "",
  last_name: "",
  email: "",
  phone: "",
  keywords: [],
  location: "remote",
  job_type: "full-time",
  platforms: ["remoteok"],
  writing_style: "",
  resume_url: null,
  onboarding_completed: false,
};

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  function updateProfile(updates: Partial<UserProfile>) {
    setProfile((prev) => ({ ...prev, ...updates }));
  }

  function next() {
    if (step < STEPS.length) setStep(step + 1);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  function finish() {
    // TODO: Save profile to backend
    console.log("Profile:", profile);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-2xl font-bold text-text">
            <span className="text-accent">Job</span>Flow
          </span>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className="flex flex-col items-center flex-1"
              >
                <div
                  className={[
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition",
                    step > s.id
                      ? "bg-green text-white"
                      : step === s.id
                      ? "bg-accent text-white"
                      : "bg-surface2 text-text2",
                  ].join(" ")}
                >
                  {step > s.id ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s.id
                  )}
                </div>
                <span className="text-xs text-text2 mt-1.5 hidden sm:block">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-surface2 rounded-full h-1.5">
            <div
              className="bg-accent h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="bg-surface border border-border rounded-xl p-6 sm:p-8">
          {step === 1 && (
            <StepPersonalInfo profile={profile} updateProfile={updateProfile} onNext={next} />
          )}
          {step === 2 && (
            <StepJobPreferences profile={profile} updateProfile={updateProfile} onNext={next} onBack={back} />
          )}
          {step === 3 && (
            <StepPlatforms profile={profile} updateProfile={updateProfile} onNext={next} onBack={back} />
          )}
          {step === 4 && (
            <StepResume
              resumeFile={resumeFile}
              setResumeFile={setResumeFile}
              onNext={next}
              onBack={back}
            />
          )}
          {step === 5 && (
            <StepWritingStyle profile={profile} updateProfile={updateProfile} onNext={next} onBack={back} />
          )}
          {step === 6 && (
            <StepDone profile={profile} resumeFile={resumeFile} onBack={back} onFinish={finish} />
          )}
        </div>
      </div>
    </div>
  );
}
