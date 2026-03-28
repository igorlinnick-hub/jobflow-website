"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { PLATFORMS, JOB_STATUSES } from "@/lib/constants";
import type { Job } from "@/lib/types";

const statusColor: Record<string, "blue" | "yellow" | "green" | "red"> = {
  new: "blue",
  applied: "yellow",
  interview: "green",
  rejected: "red",
};

interface JobsTableProps {
  jobs: Job[];
}

export default function JobsTable({ jobs }: JobsTableProps) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className="bg-surface border border-border rounded-xl">
      <div className="p-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="font-semibold text-text">Job Listings</h3>
        <div className="flex gap-1">
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All ({jobs.length})
          </FilterButton>
          {JOB_STATUSES.map((s) => {
            const count = jobs.filter((j) => j.status === s.value).length;
            return (
              <FilterButton key={s.value} active={filter === s.value} onClick={() => setFilter(s.value)}>
                {s.label} ({count})
              </FilterButton>
            );
          })}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-text2">
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Company</th>
              <th className="px-5 py-3 font-medium">Platform</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((job) => {
              const platform = PLATFORMS.find((p) => p.id === job.platform);
              return (
                <tr key={job.id} className="border-b border-border last:border-0 hover:bg-surface2/50 transition">
                  <td className="px-5 py-3.5 text-text font-medium">{job.title}</td>
                  <td className="px-5 py-3.5 text-text2">{job.company}</td>
                  <td className="px-5 py-3.5 text-text2">{platform?.name || job.platform}</td>
                  <td className="px-5 py-3.5">
                    <Badge color={statusColor[job.status] || "gray"}>
                      {JOB_STATUSES.find((s) => s.value === job.status)?.label || job.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5 text-text2">{job.date_found}</td>
                  <td className="px-5 py-3.5">
                    <a href={job.link} className="text-accent hover:text-accent2 text-xs font-medium">
                      View
                    </a>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-text2">
                  No jobs match this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-3 py-1 text-xs rounded-full transition",
        active ? "bg-accent text-white" : "text-text2 hover:bg-surface2",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
