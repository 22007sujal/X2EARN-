"use client"
import Image from "next/image";
import "./home.css";
import { useRef } from "react";
import useDollar from "./components/dollar";
import SuccessfulCampaigns from "./components/sections/open_jobs/open_jobs";
import Footer from "./components/footer/footer";

export default function Home() {
   const get_dollar = useRef<HTMLElement>(null!);
   useDollar(get_dollar);

    console.log("HOME IS RENDERED")
   

  return (
    <div>
    <section id="home_section">

      <div id="home_container">
        
          <div id="diagram">
            <Image src={"/diagram.png"} width={440} height={230} alt="diagram"/>
          </div>


          <div id="get_dollars"><h2 id="glitch-text"> GET <span ref={get_dollar} className="morph-text" id="morphText">$$$$$$$</span></h2></div>
            

          <div id="para_x2earn"><p id="real_para">X2EARN where every follow and repost turns into real rewards. Grow your earnings effortlessly while helping projects gain the spotlight they deserve. Whether you’re here to monetize your engagement or market your next crypto venture, we make every interaction count</p></div>


          <div id="button_for_home">
              <div id="button">
                  <div id="start_earning"><button>$ Start Earning</button></div>
                  <button> + Create Jobs</button>
              </div>
          </div>



      </div>

      </section>
       
       {/* ------------------------------------SECTION - 2------------------------------------------- */}

       <section id="sucessful_campaigns">

        <div id="sucessful_campaigns_container" >
         
         
         <SuccessfulCampaigns heading="Sucessful Campaigns" header_color="#2E7340" font_color="white"/>
       


        </div>

    </section>


       <section id="open_campaigns">

        <div id="open_campaigns_container" >
         
         
         <SuccessfulCampaigns heading="Open Jobs" header_color="#C44648" font_color="white"/>
       


        </div>

    </section>
     
     <footer>
       <Footer/>
     </footer>


      </div>


      

  );
}
