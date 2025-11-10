import React from "react";
import "./card.css";

interface CampaignCardProps {
  postedBy: string;
  status?: "COMPLETED" | "PENDING" | "FAILED";
  targetReposts: number;
  perRepostValue: number;
  toBoxValue: number;
  totalValueEquation: string;
  totalValueResult: string;
  completedIn: string;
  targetPostLink: string;
  profileImageLink: string;
  bgcolor: string;
  font_color: string;
  JobType: "RETWEET" | "FOLLOW";
  currentProgress: string;
  userTaskStatus?: "PENDING_VERIFICATION" | "VERIFIED_PAID" | "REJECTED"; // 👈 new optional prop
}

const CampaignCard: React.FC<CampaignCardProps> = React.memo(
  ({
    postedBy,
    status = "COMPLETED",
    targetReposts,
    perRepostValue,
    toBoxValue,
    totalValueEquation,
    totalValueResult,
    completedIn,
    targetPostLink,
    profileImageLink,
    bgcolor,
    font_color,
    JobType,
    currentProgress,
    userTaskStatus,
  }) => {
    return (
      <div
        data-augmented-ui="tl-2-clip-x rect border"
        id="campaign-card-container"
      >
        {/* Header */}
        <div
          className="card-header"
          style={{ backgroundColor: bgcolor, color: font_color }}
        >
          <div className="profile-icon">
            <img src={profileImageLink} alt="Profile" />
          </div>
          <span className="posted-by-text">POSTED BY {postedBy}</span>
          <span
            className="status-badge"
            style={{ backgroundColor: "black", border: "1px solid white" }}
          >
            {status}
          </span>
        </div>

        {/* Body */}
        <div className="card-body">
          <div className="vertical-line"></div>
          <p>
            TARGET : {targetReposts}{" "}
            {JobType === "RETWEET" ? "REPOSTS" : "FOLLOW"}
          </p>
          <p>
            PER {JobType} : {perRepostValue}$
          </p>
          <p>TO BOX : {toBoxValue}$</p>
          <p>
            TOTAL VALUE : {totalValueEquation} : {totalValueResult}$
          </p>
        </div>

        {/* Progress or Completed Info */}
        {status === "PENDING" ? (
          <>
            <div id="loading_bar">
              <div
                id="bar"
                style={{
                  width: `${
                    (parseInt(currentProgress) /
                      parseInt(targetReposts.toString())) *
                    100
                  }%`,
                  backgroundColor: "skyblue",
                  height: "100%",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontFamily: "Orbitron",
                  fontSize: 10,
                }}
              >
                <p
                  style={{
                    margin: "0px",
                    paddingTop: "3px",
                    fontWeight: "bold",
                  }}
                >
                  {`${currentProgress} / ${targetReposts}`}
                </p>
              </div>
            </div>

            {/* Job action buttons */}
            <div className="action-buttons">
              {JobType === "RETWEET" ? (
                <button
                  className="x2e-btn repost-btn"
                  onClick={() => window.open(targetPostLink, "_blank")}
                >
                  🔁 REPOST
                </button>
              ) : (
                <button
                  className="x2e-btn follow-btn"
                  onClick={() => window.open(targetPostLink, "_blank")}
                >
                  👤 FOLLOW
                </button>
              )}
            </div>

            {/* User task verification status */}
            {userTaskStatus && (
              <div className="user-task-status">
                {userTaskStatus === "VERIFIED_PAID" && (
                  <p className="paid-status">✅ Task Verified & Paid</p>
                )}
                {userTaskStatus === "PENDING_VERIFICATION" && (
                  <p className="pending-status">⌛ Verification Pending</p>
                )}
                {userTaskStatus === "REJECTED" && (
                  <p className="rejected-status">❌ Task Rejected</p>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="completed-in-text">COMPLETED IN {completedIn}</p>
        )}

        {/* Footer */}
        <div className="card-footer">
          <div className="link-icon">X</div>
          <span className="link-label">
            {JobType === "RETWEET"
              ? "TARGET POST LINK"
              : "TARGET ACCOUNT LINK"}
          </span>
          <a
            href={targetPostLink}
            target="_blank"
            rel="noopener noreferrer"
            className="target-link"
          >
            {targetPostLink}
          </a>
        </div>
      </div>
    );
  }
);

CampaignCard.displayName = "CampaignCard";

export default CampaignCard;
