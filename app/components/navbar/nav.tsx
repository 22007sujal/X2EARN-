"use client";

import { RefObject, useRef, useState } from "react";
import Image from "next/image";
import "@/app/components/navbar/nav.css";
import useTilt from "../tilt";
import Link from "next/link";

 

export default function Nav() {
  const [connected , set_connected] = useState(true);
  const allJobsRef = useRef<HTMLDivElement>(null!);

  useTilt(allJobsRef , 15);

  return (
    <div id="nav-bar-container">
      <div id="logo-box">
        <div id="image-box">
        <Link href={"/"}> <Image
            src="/x2earn.png"
            alt="X2EARN-LOGO"
            width={90}
            height={90}
            style={{ marginBottom: "13px" }}
          /></Link> 
        </div>
      </div>

      <div id="options">
       <div id="all-jobs" ref={allJobsRef}>
           <Link style={{ textDecoration: 'none', color: 'inherit' }} href={"/jobs"}><p>ALL JOBS</p></Link>
          <p>EARN</p>
        </div>

        <div id="leaderboard">
          <Link href={"/leaderboard"} style={{ textDecoration: 'none', color: 'inherit' }}><p>LEADERBOARD</p></Link>
        </div>

        <div id="box">
          <Link href={"/Box"} style={{ textDecoration: 'none', color: 'inherit' }}> <p>BOX</p> </Link>
        </div>
      </div>

      {connected === false?<div id="connect-button">
        <button>CONNECT</button>
      </div>:
         <div id="menu">
          <div className="dropdown">
  <div className="dropdown-btn"><img width={"100%"} src={"./shy.png"}/></div>
  <div className="dropdown-content">
    <Link href={"/job_status"} style={{ textDecoration: 'none', color: 'white' }}>Jobs status</Link>
    <Link href={"/profile"} style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
     <Link href={"/create_jobs"} style={{ textDecoration: 'none', color: 'white' }}>Create Jobs</Link>
  </div>
</div>
         </div>
      }
    </div>
  );
}
