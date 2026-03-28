import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import JobsTable from "@/components/dashboard/JobsTable";
import ApplicationHistory from "@/components/dashboard/ApplicationHistory";
import Button from "@/components/ui/Button";
import { MOCK_STATS, MOCK_JOBS, MOCK_APPLICATIONS } from "@/lib/mock-data";

export const metadata = {
  title: "Dashboard — JobFlow",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Quick actions */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button size="sm">Find Jobs</Button>
        <Button size="sm" variant="secondary">Check Email</Button>
        <div className="flex items-center gap-2 ml-auto text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-text2">Campaign running</span>
        </div>
      </div>

      <div className="space-y-6">
        <StatsCards
          totalJobs={MOCK_STATS.total_jobs}
          totalApplications={MOCK_STATS.total_applications}
          applicationsToday={MOCK_STATS.applications_today}
          responseRate={MOCK_STATS.response_rate}
        />

        <JobsTable jobs={MOCK_JOBS} />

        <ApplicationHistory applications={MOCK_APPLICATIONS} />
      </div>
    </DashboardLayout>
  );
}
