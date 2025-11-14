"use client";
import { useState } from "react";

interface VerifyPopupProps {
  wallet: string;
  nonce: string;
  onClose: () => void;
  onVerify: (tweetUrl: string) => Promise<void>;
  verifying?: boolean;
  verified?: boolean | null;
}

export default function VerifyPopup({
  wallet,
  nonce,
  onClose,
  onVerify,
  verifying,
  verified,
}: VerifyPopupProps) {
  const [tweetUrl, setTweetUrl] = useState("");

  const tweetContent = `Verifying my wallet ${wallet} with nonce ${nonce}`;

  const handleTweet = () => {
    const tweetText = encodeURIComponent(tweetContent);
    window.open(`https://x.com/intent/tweet?text=${tweetText}`, "_blank");
  };

  const handleVerify = async () => {
    if (!tweetUrl) {
      alert("Please enter your tweet link first!");
      return;
    }
    await onVerify(tweetUrl);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        height:"100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        border:"2px solid black"
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "24px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,1)",
          border:"6px solid",
          fontFamily:"Orbitron"
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>Verify Tweet</h2>
        <p style={{ fontSize: "10px", color: "#444" }}>
          Wallet: <b>{wallet}</b>
        </p>
        <p style={{ fontSize: "14px", color: "#444", marginBottom: "10px" }}>
          Nonce: <b>{nonce}</b>
        </p>

        <button
          onClick={handleTweet}
          style={{
            background: "#1DA1F2",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "12px",
              fontFamily:"Orbitron"
          }}
        >
          Tweet Verification Message
        </button>

        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Paste your tweet link here"
            value={tweetUrl}
            onChange={(e) => setTweetUrl(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
                fontFamily:"Orbitron"
            }}
          />
        </div>

        <button
          onClick={handleVerify}
          disabled={verifying}
          style={{
            background: verifying ? "gray" : "black",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: verifying ? "not-allowed" : "pointer",
            marginBottom: "12px",
              fontFamily:"Orbitron"
          }}
        >
          {verifying ? "Verifying..." : "Verify Tweet"}
        </button>

        {verified !== null && (
          <p
            style={{
              color: verified ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {verified
              ? "✅ Verification successful!"
              : "❌ Verification failed"}
          </p>
        )}

        <div style={{ marginTop: "10px" }}>
          <button
            onClick={onClose}
            style={{
                fontFamily:"Orbitron",
              background: "transparent",
              border: "1px solid #ccc",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
