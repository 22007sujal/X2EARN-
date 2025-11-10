import React from "react";
import "./foo.css";

interface CreatedJobCardProps {
  title: string;
  createdAt: string;
  status: "ACTIVE" | "COMPLETED" | "CLOSED";
  jobType: "RETWEET" | "FOLLOW";
  totalTarget: number;
  completedCount: number;
  perTaskValue: number;
  totalBudget: number;
  remainingBudget: number;
  postLink: string;
  creatorImage: string;
}

const CreatedJobCard: React.FC<CreatedJobCardProps> = ({
  title,
  createdAt,
  status,
  jobType,
  totalTarget,
  completedCount,
  perTaskValue,
  totalBudget,
  remainingBudget,
  postLink,
  creatorImage,
}) => {
  return (
    <div className="created-job-card">
      {/* Header */}
      <div className="created-job-header">
        <div className="creator-info">
          <img src={creatorImage} alt="Creator" />
          <div>
            <h3>{title}</h3>
            <p className="created-date">Created on {createdAt}</p>
          </div>
        </div>
        <span
          className={`job-status ${
            status === "ACTIVE"
              ? "active"
              : status === "COMPLETED"
              ? "completed"
              : "closed"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="created-job-body">
        <p>
          <strong>Type:</strong> {jobType}
        </p>
        <p>
          <strong>Target:</strong> {completedCount}/{totalTarget} done
        </p>
        <p>
          <strong>Per Task:</strong> ${perTaskValue}
        </p>
        <p>
          <strong>Total Budget:</strong> ${totalBudget}
        </p>
        <p>
          <strong>Remaining:</strong> ${remainingBudget}
        </p>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(completedCount / totalTarget) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <div className="created-job-footer">
        <a href={postLink} target="_blank" rel="noopener noreferrer">
          View Post 🔗
        </a>
      </div>
    </div>
  );
};

export default CreatedJobCard;
