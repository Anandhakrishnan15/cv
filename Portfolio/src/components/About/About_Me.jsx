import React from "react";
import "./Aboutme.css"
import { CARDS_DETAILS } from "../../constants";
const About_Me = () => {
  return (
    <div className="all-about-meCard">
      <div className="AboutMeCards-containers">
        <div className="AboutMeCardsHolders">
          {CARDS_DETAILS.map((CD, CDi) => (
            <div className="cards" key={CDi}>
              <h1>{CD.heading}</h1>
              <div className="cardsImg">
                <img src={CD.Image} alt={CD.Image} />
              </div>
              <div className="cardsInfo">{CD.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );   
};

export default About_Me;
