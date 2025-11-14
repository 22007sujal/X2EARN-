"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { JobData } from "../api/jobs/route";

export function useJobs() {
  const [pendingJobs, setPendingJobs] = useState<JobData[]>([]);
  const [completedJobs, setCompletedJobs] = useState<JobData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getJobs() {
      try {
        setLoading(true);
        const response = await axios.get<JobData[]>("http://localhost:3000/api/jobs");
        const jobs: JobData[] = response.data;

        // Split jobs into pending and completed
        setPendingJobs(jobs.filter((job) => job.status?.toLowerCase() === "pending"));
        setCompletedJobs(jobs.filter((job) => job.status?.toLowerCase() === "completed"));
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    }

    getJobs();
  }, []);

  return { pendingJobs, completedJobs, loading, error };
}
