import React from "react";
import "./LoginScreenMId_Style/LoginScreenMId.css";

function LoginScreenMId() {
  return (
    <div className="LoginScreenMId">
      <div className="LoginScreenMId__section">
        <div className="LoginScreenMId__Text">
          <h1>Enjoy On Your TV.</h1>
          <h3>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
        <div className="LoginScreenMId__tv">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="LoginScreenMId__section LoginScreenMId__sectionOffline ">
        <div className="LoginScreenMId__Text">
          <h1>Download your shows to watch offline.</h1>
          <h3>
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
        <div className="LoginScreenMId__offline">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
          <div className="LoginScreenMId__downloadBar">
            {/* <div className="LoginScreenMId__downloadThumbnail"> */}
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            />
            <div className="LoginScreenMId__downloadBarText">
              <h4>Stranger Things</h4>
              <h5>Downloading...</h5>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="LoginScreenMId__section">
        {/* <div className="LoginScreenMId__everywhere"> */}
        <div className="LoginScreenMId__Text">
          <h1>Watch everywhere.</h1>
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
        <div className="LoginScreenMId__global">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default LoginScreenMId;
