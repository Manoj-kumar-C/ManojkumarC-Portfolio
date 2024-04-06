import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation from react-type-animation library

export default function Greeting(props) {
  const theme = props.theme;

  // Convert subTitle string to an array by splitting it at the comma
  const subTitleArray = greeting.subTitle.split(", ");

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {/* Use TypeAnimation component to animate through each subTitle */}
              <TypeAnimation
                sequence={subTitleArray} // Use the array of subTitle strings
                speed={10} // Typing speed (characters per second)
                style={{
                  color: theme.secondaryText,
                  fontSize: "2em",
                  fontWeight: "bold",
                }} // Styling for the animated text
                repeat={Infinity} // Repeat animation indefinitely
              />
              <br />
              <br />
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud />
          </div>
        </div>
      </div>
    </Fade>
  );
}
