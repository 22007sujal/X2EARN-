"use client";

import { useState } from "react";
import CampaignCard from "../components/elements/card_of_jobs/req_job_card";
import "./jobs.css";
import Footer from "../components/footer/footer";
import { useJobs } from "../hooks/useJobs";

export default function Jobs() {
  const [pending, setPending] = useState(true);
  const { pendingJobs } = useJobs();



 

  console.log(pendingJobs);

  return (
    <div id="JOBS">
      <h1>ALL JOBS</h1>

      {/* Filter buttons */}
      <div id="filters">
        <button
          onClick={() => setPending(true)}
          className={`filter-btn pending ${pending ? "active" : ""}`}
        >
          Pending
        </button>

        <button
          onClick={() => setPending(false)}
          className={`filter-btn completed ${!pending ? "active" : ""}`}
        >
          Completed
        </button>
      </div>

      {/* Jobs container */}
      <div id="all-jobs-container">
        {pendingJobs.length === 0 ? (
          <p>No {pending ? "pending" : "completed"} jobs found.</p>
        ) : (
          pendingJobs.map((job, index) => (
            <CampaignCard
              key={index}
              font_color="white"
              bgcolor="red"
              postedBy={job.createdBy}
              targetPostLink={job.tweetLink || "#"}
              targetReposts={job.jobTarget}
              perRepostValue={job.perJob}
              toBoxValue={job.perJob}
              totalValueEquation={job.totalValue}
              totalValueResult={job.totalValue}
            
              
              JobType={job.jobType}
              currentProgress={"70"}
              status={"PENDING"}
            />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}
