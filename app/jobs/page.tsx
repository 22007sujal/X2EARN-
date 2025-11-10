"use client"

import { useState } from "react"
import CampaignCard from "../components/elements/card_of_jobs/req_job_card"
import "./jobs.css"
import Footer from "../components/footer/footer";



export  default function jobs() {
    const [pending , set_pending] = useState(true);

    return(
        <div id="JOBS" >
            <h1>ALL JOBS</h1>
<div id="filters">
  <button onClick={()=>{set_pending(true)}} className="filter-btn pending">Pending</button>
  <button onClick={()=>{set_pending(false)}}className="filter-btn completed">Completed</button>
</div>
            <div id="all-jobs-container">
                
               <CampaignCard
            font_color={pending === true ? "red" : "green"}
            bgcolor={pending === true ? "red" : "green"}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            currentProgress="125"
            JobType="RETWEET"
            status="PENDING"
          />

            <CampaignCard
            font_color={pending === true ? "red" : "green"}
            bgcolor={pending === true ? "red" : "green"}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            currentProgress="102"
            JobType="FOLLOW"
            status="PENDING"
          />
            <CampaignCard
            font_color={pending === true ? "red" : "green"}
            bgcolor={pending === true ? "red" : "green"}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            currentProgress="10%"
            JobType="RETWEET"
          />
            <CampaignCard
            font_color={pending === true ? "red" : "green"}
            bgcolor={pending === true ? "red" : "green"}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            currentProgress="10%"
            JobType="RETWEET"
          />
            <CampaignCard
            font_color={pending === true ? "red" : "green"}
            bgcolor={pending === true ? "red" : "green"}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            currentProgress="10%"
            JobType="RETWEET"
          />
            </div>
            <Footer/>
        </div>

    )
}