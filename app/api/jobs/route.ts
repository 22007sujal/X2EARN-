import { db } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

// TS Interface (camelCase)
export interface JobData {
  id?: number;
  jobType: "RETWEET" | "FOLLOW";
  jobTarget: number;
  perJob: number;
  totalValue: number;
  tweetLink?: string | null;
  currentProgress?: number;
  status?: "PENDING" | "COMPLETED" | "FAILED";
  createdBy: string;
}

// ----------------------------------------
// POST — Insert Job
// ----------------------------------------
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: JobData = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: "Missing body" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!data.jobType || !data.jobTarget || !data.perJob || !data.totalValue || !data.createdBy) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const Sql_Query = `
      INSERT INTO job_data 
      (job_type, job_target, per_job, total_value, tweet_link, current_progress, status, created_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const response = await db.execute(Sql_Query, [
      data.jobType,
      data.jobTarget,
      data.perJob,
      data.totalValue,
      data.tweetLink ?? null,
      data.currentProgress ?? 0,
      data.status ?? "PENDING",
      data.createdBy,
    ]);

    return NextResponse.json({ success: true, insertId: response[0] });
  } catch (err: any) {
    console.error("POST /jobs error:", err);
    return NextResponse.json(
      { error: "Failed to insert job", details: err.message },
      { status: 500 }
    );
  }
}

// ----------------------------------------
// GET — Fetch pending jobs (convert snake_case → camelCase)
// ----------------------------------------
export async function GET() {
  try {
    const Sql_Query = `
      SELECT * FROM job_data WHERE status = 'PENDING';
    `;

    const [rows] = await db.execute(Sql_Query);

    // Convert SQL snake_case → camelCase
    const jobs: JobData[] = (rows as any[]).map((job) => ({
      id: job.id,
      jobType: job.job_type,
      jobTarget: job.job_target,
      perJob: job.per_job,
      totalValue: job.total_value,
      tweetLink: job.tweet_link,
      currentProgress: job.current_progress,
      status: job.status,
      createdBy: job.created_by,
    }));

    return NextResponse.json(jobs);
  } catch (err: any) {
    console.error("GET /jobs error:", err);
    return NextResponse.json(
      { error: "Failed to fetch jobs", details: err.message },
      { status: 500 }
    );
  }
}
