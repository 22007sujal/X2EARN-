"use client";

import { useRef } from "react";
import "./open_jobs.css";
import CampaignCard from "../../elements/card_of_jobs/req_job_card";


interface Campaigns  {
    heading:string
    header_color:string
    font_color:string
}

export default function SuccessfulCampaigns(Campaigns:Campaigns) {
  const card_scroller = useRef<HTMLDivElement | null>(null);

  const handleScrollRight = () => {
    card_scroller.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    card_scroller.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  return (
    <div id="sucessful-comp">
      <div id="title_of_sucess">
        <h1 id="heading_of_sucessful">{Campaigns.heading}</h1>
      </div>

      <div id="card_holder">
        <div id="overflow_cards_container" ref={card_scroller}>

               <CampaignCard
            font_color={Campaigns.font_color}
            bgcolor={Campaigns.header_color}
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
            font_color={Campaigns.font_color}
            bgcolor={Campaigns.header_color}
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
            font_color={Campaigns.font_color}
            bgcolor={Campaigns.header_color}
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
            font_color={Campaigns.font_color}
            bgcolor={Campaigns.header_color}
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
            font_color={Campaigns.font_color}
            bgcolor={Campaigns.header_color}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            currentProgress="50"
            JobType="RETWEET"
          />




             <CampaignCard
            font_color={Campaigns.font_color}
            bgcolor={Campaigns.header_color}
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
             font_color={Campaigns.font_color}
             bgcolor={Campaigns.header_color}
            postedBy="0XSUJAL"
            targetReposts={250}
            perRepostValue={0.02}
            toBoxValue={0.23}
            totalValueEquation="250 X 0.02"
            totalValueResult={"2.5"}
            completedIn="2H 4 MIN"
            targetPostLink="https://x.com/0xNairolf/status...23"
            profileImageLink="./shy.png"
            status="PENDING"
               currentProgress="50"
            JobType="FOLLOW"
            
          />

        </div>

        {/* Navigation buttons */}
        <div id="navigation">
          <button id="left_button" onClick={handleScrollLeft}>
            <img src="./arrows.png" alt="Scroll Left" />
          </button>
          <button id="right_button" onClick={handleScrollRight}>
            <img src="./arrows.png" alt="Scroll Right" />
          </button>
        </div>
      </div>
    </div>
  );
}
