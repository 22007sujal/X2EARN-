'use client'
import { useState } from "react"
import CampaignCard from "../components/elements/card_of_jobs/req_job_card"
import "./job_status.css"
import CreatedJobCard from "../components/elements/created_job_cards/createdjobcards";

export default function Jobstatus() {
  const [onCreated, setOnCreated] = useState(true);

  return (
    <div id="jobstatus-container">
      <div id="jobs_stats">
        <button
          className={onCreated ? "active" : ""}
          onClick={() => setOnCreated(true)}
        >
          Created By You
        </button>
        <button
          className={!onCreated ? "active" : ""}
          onClick={() => setOnCreated(false)}
        >
          Done By You
        </button>
      </div>

      <div id="job_cards_area">
        {onCreated ? (
          <CampaignCard
            postedBy="Simple"
            status="PENDING"
            targetReposts={100}
            perRepostValue={0.5}
            toBoxValue={20}
            totalValueEquation="100 x 0.5"
            totalValueResult="50"
            completedIn="2d"
            targetPostLink="https://x.com/example"
            profileImageLink="/shy.png"
            bgcolor="#1e1e1e"
            font_color="#fff"
            JobType="RETWEET"
            currentProgress="40"
            userTaskStatus="VERIFIED_PAID"
          />
        ) : (
          <div className="empty-section">
            
<CreatedJobCard
  title="Boost My X Post 🚀"
  createdAt="Nov 10, 2025"
  status="COMPLETED"
  jobType="RETWEET"
  totalTarget={100}
  completedCount={45}
  perTaskValue={0.5}
  totalBudget={50}
  remainingBudget={27.5}
  postLink="https://x.com/example"
  creatorImage="/shy.png"
/>
          </div>
        )}
      </div>
    </div>
  );
}
