import type { Platform, Location, JobType, JobStatus } from "./types";

export const PLATFORMS: Platform[] = [
  { id: "remoteok", name: "RemoteOK", status: "active", requiresLogin: false, description: "Remote jobs aggregator. No login needed." },
  { id: "indeed", name: "Indeed", status: "active", requiresLogin: true, description: "Largest job board. Supports auto-apply." },
  { id: "wellfound", name: "Wellfound", status: "active", requiresLogin: true, description: "Startup & tech jobs." },
  { id: "glassdoor", name: "Glassdoor", status: "coming_soon", requiresLogin: true, description: "Jobs + company reviews." },
  { id: "ziprecruiter", name: "ZipRecruiter", status: "coming_soon", requiresLogin: true, description: "AI-powered job matching." },
  { id: "google_jobs", name: "Google Jobs", status: "coming_soon", requiresLogin: false, description: "Google job search aggregator." },
  { id: "dice", name: "Dice", status: "coming_soon", requiresLogin: true, description: "Tech-focused job board." },
  { id: "toptal", name: "Toptal", status: "coming_soon", requiresLogin: true, description: "Top freelance talent." },
  { id: "hired", name: "Hired", status: "coming_soon", requiresLogin: true, description: "Tech job marketplace." },
  { id: "flexjobs", name: "FlexJobs", status: "coming_soon", requiresLogin: true, description: "Remote & flexible jobs." },
];

export const LOCATIONS: Location[] = [
  { value: "remote", label: "Remote" },
  { value: "usa", label: "United States" },
  { value: "europe", label: "Europe" },
];

export const JOB_TYPES: JobType[] = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
];

export const JOB_STATUSES: JobStatus[] = [
  { value: "new", label: "New", color: "blue" },
  { value: "applied", label: "Applied", color: "yellow" },
  { value: "interview", label: "Interview", color: "green" },
  { value: "rejected", label: "Rejected", color: "red" },
];
