import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Chrome Extension — JobFlow",
};

const STEPS = [
  {
    step: 1,
    title: "Download the extension",
    description: 'Click the button below to download the extension as a ZIP file.',
  },
  {
    step: 2,
    title: "Open Chrome Extensions",
    description: 'Navigate to chrome://extensions in your browser, or go to Menu → Extensions → Manage Extensions.',
  },
  {
    step: 3,
    title: "Enable Developer Mode",
    description: 'Toggle the "Developer mode" switch in the top right corner of the extensions page.',
  },
  {
    step: 4,
    title: 'Load the extension',
    description: 'Click "Load unpacked" and select the extracted extension folder. The JobFlow icon will appear in your toolbar.',
  },
];

export default function ExtensionPage() {
  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-text">Chrome Extension</h2>
          <p className="text-sm text-text2 mt-1">
            Auto-apply to jobs on Indeed with one click. The extension fills out forms, uploads your resume, and submits applications automatically.
          </p>
        </div>

        {/* What it does */}
        <div className="bg-surface border border-border rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-text mb-4">What the extension does</h3>
          <ul className="space-y-3 text-sm text-text2">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Automatically fills out Indeed application forms (name, email, phone, work experience)
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Uploads your resume PDF to each application
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Pastes AI-generated cover letters tailored to each job
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Mimics human behavior (random delays, mouse movements) to avoid detection
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Up to 50 applications per day on Indeed
            </li>
          </ul>
        </div>

        {/* Installation steps */}
        <div className="bg-surface border border-border rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-text mb-4">Installation</h3>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-medium text-text text-sm">{s.title}</p>
                  <p className="text-sm text-text2 mt-0.5">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button size="lg">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Extension
        </Button>

        <p className="text-xs text-text2 mt-3">
          Requires Google Chrome. The extension is not yet published to the Chrome Web Store — install manually using the steps above.
        </p>
      </div>
    </DashboardLayout>
  );
}
