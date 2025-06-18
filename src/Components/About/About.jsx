import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="" alt="profile"></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              About me desc I'm looking for a new opportunity because I feel my
              learning has plateaued in my current role. I'm eager to take on
              more challenging and growth-oriented work. I want to be in an
              environment that pushes me technically and helps me grow faster.
            </p>
            <p>Desc line 2</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>
                Skill 1 <hr style={{ width: "50%" }}></hr>
              </p>
            </div>
            <div className="about-skill">
              <p>
                Skill2 <hr style={{ width: "70%" }}></hr>
              </p>
            </div>
            <div className="about-skill">
              <p>
                Skill3 <hr style={{ width: "40%" }}></hr>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of exp</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of exp</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of exp</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
