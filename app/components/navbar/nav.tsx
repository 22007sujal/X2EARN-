"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/components/navbar/nav.css";
import useTilt from "../tilt";
import { useAccount, useConnect } from "wagmi";

export default function Nav() {
  const allJobsRef = useRef<HTMLDivElement>(null!);
  useTilt(allJobsRef, 15);

  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  // Connect wallet function
  const connect_to_wallet = () => {
    if (connectors.length > 0) {
      connect({ connector: connectors[0] }); // Use the first available connector
    } else {
      console.error("No wallet connectors found");
    }
  };

  console.log("NAV IS RENDERED")

  return (
    <div id="nav-bar-container">
      {/* Logo */}
      <div id="logo-box">
        <div id="image-box">
          <Link href="/">
            <Image
              src="/x2earn.png"
              alt="X2EARN-LOGO"
              width={90}
              height={90}
              style={{ marginBottom: "13px" }}
            />
          </Link>
        </div>
      </div>

      {/* Navigation options */}
      <div id="options">
        <div id="all-jobs" ref={allJobsRef}>
          <Link href="/jobs" style={{ textDecoration: "none", color: "inherit" }}>
            <p>ALL JOBS</p>
          </Link>
          <p>EARN</p>
        </div>

        <div id="leaderboard">
          <Link
            href="/leaderboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p>LEADERBOARD</p>
          </Link>
        </div>

        <div id="box">
          <Link href="/Box" style={{ textDecoration: "none", color: "inherit" }}>
            <p>BOX</p>
          </Link>
        </div>
      </div>

      {/* Wallet connect / menu */}
      {!isConnected ? (
        <div id="connect-button">
          <button onClick={connect_to_wallet}>CONNECT</button>
        </div>
      ) : (
        <div id="menu">
          <div className="dropdown">
            <div className="dropdown-btn">
              <img width="100%" src="./shy.png" />
            </div>
            <div className="dropdown-content">
              <Link
                href="/job_status"
                style={{ textDecoration: "none", color: "white" }}
              >
                Jobs status
              </Link>
              <Link
                href="/profile"
                style={{ textDecoration: "none", color: "white" }}
              >
                Profile
              </Link>
              <Link
                href="/create_jobs"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create Jobs
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
