import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <div className="bg-events">
        <div className="gallery">
          <img src="src/assets/Images/Summit_Images/BG1.JPG" />
          <img src="src/assets/Images/Summit_Images/BG5.JPG" />
          <img src="src/assets/Images/Summit_Images/BG2.JPG" />
          <img src="src/assets/Images/Summit_Images/BG3.JPG" />
        </div>
      </div>
      <div className="E-Summit-Photo" />
      <div className="section">
        <h1 className="event-heading">"Pinnacle Moments: Recalling Past Entrepreneurial Feats"</h1>
      </div>
      <div className="card-container ">
        {/* Card 1 */}
        <video className="video-background2" autoPlay loop muted>
          <source src="src/assets/Videos/Network.mp4" type="video/mp4" />
        </video>
        <article className="card">
          <header className="card__thumb">
            <a href="#">
              <img src="src/assets/Images/Summit_Images/Ideathon.png" />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="#">IDEATHON</a>
            </h2>
            <div className="card__subtitle">Ideas Unleashed, Futures Changed</div>
            <p className="card__description">IdeaThon is an major event during E-Summit'23. A competition in which entrepreneurs submit their ideas to a panel of judges. The MII Foundation funded the top five concepts, and the winner idea received a cash award of Rs 5,000.</p>
          </div>
        </article>
        <article className="card">
          <header className="card__thumb">
            <a href="#">
              <img src="src/assets/Images/Summit_Images/Zenith Shark Tank.png" />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="#">ZENITH SHARK TANK</a>
            </h2>
            <div className="card__subtitle">In the Tank, On Top</div>
            <p className="card__description">The Zenith shark tank was the most appealing competition at E-Summit'23. It is a recreation of the popular show Shark Tank. Young firms pitched their products and services in front of sharks(judges)for fundings.</p>
          </div>
        </article>
        <article className="card">
          <header className="card__thumb">
            <a href="#">
              <img src="src/assets/Images/Summit_Images/Start-Up Showcase.png" />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="#">START-UP SHOWCASE</a>
            </h2>
            <div className="card__subtitle">Trailblazing Talents</div>
            <p className="card__description">A platform where budding enterprises showcased their concepts, products, and services to,customers, and investors.The event provides networking chances with some of the area's most creative businesses.</p>
          </div>
        </article>
        <article className="card">
          <header className="card__thumb">
            <a href="#">
              <img src="src/assets/Images/Summit_Images/Speaker-Session.png" />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="#">Inspirational Voices</a>
            </h2>
            <div className="card__subtitle">Influence through Ideas</div>
            <p className="card__description">This talk sessions's goal is to expose students to top-tier business thinkers who offered their experiences and advice throughout the day.</p>
          </div>
        </article>
        <article className="card">
          <header className="card__thumb">
            <a href="#">
              <img src="src/assets/Images/Summit_Images/Open Mic .png" />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="#">Speak, Spark, Succeed</a>
            </h2>
            <div className="card__subtitle">Your Stage, Your Story</div>
            <p className="card__description">Share your thoughts, ideas, and talents with the world. Whether it's a song, poem, or message, step up to the mic and let your voice be heard.Celebrating Creativity and self-expression!.</p>
          </div>
        </article>
        <article className="card">
          <header className="card__thumb">
            <a href="#">
              <img src="src/assets/Images/Summit_Images/Food Fest.png" />
            </a>
          </header>
          <div className="card__body">
            <h2 className="card__title">
              <a href="#">FOOD FEST</a>
            </h2>
            <div className="card__subtitle">Eats and Treats Fiesta</div>
            <p className="card__description">The most mouth-wateringly delicious event is the food festival.In this young food market, businesses present their delicacies in front of food enthusiasts.The motto of conducting food festivals is good food,good mood.</p>
          </div>
        </article>
      </div>
      <div className="responsive-container-block container_speaker">
        <p className="text-blk team-head-text">Inspirational Voices</p>
        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets/Images/Summit_Images/1.jpg" />
              </div>
              <p className="text-blk name">Chirag Kulkarni</p>
              <p className="text-blk position">CMO - Medly</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets/Images/Summit_Images/2-new.jpg" />
              </div>
              <p className="text-blk name">Himeesh Madaan</p>
              <p className="text-blk position">Entrepreneur | Youtuber</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets//Images/Summit_Images/3.jpg" />
              </div>
              <p className="text-blk name">Aditya Vyas</p>
              <p className="text-blk position">CEO-IITI Dirshti CPS</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets/Images/Summit_Images/4.jpg" />
              </div>
              <p className="text-blk name">Rajat Jain</p>
              <p className="text-blk position">Co-Founder of Kimirica & Pataa App</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets/Images/Summit_Images/5.jpg" />
              </div>
              <p className="text-blk name">Narendra Sen</p>
              <p className="text-blk position">Founder & CEO | RackBank</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets/Images/Summit_Images/6.jpg" />
              </div>
              <p className="text-blk name">Ekagra Sharma</p>
              <p className="text-blk position">Writer-Kapil Sharma | Super Dancer</p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container_speaker">
            <div className="card_speaker">
              <div className="team-image-wrapper">
                <img className="team-member-image" src="src/assets/Images/Summit_Images/7.png" />
              </div>
              <p className="text-blk name">Shubham Chouhan</p>
              <p className="text-blk position">CEO & Founder- IEEN India|Etimes Group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
