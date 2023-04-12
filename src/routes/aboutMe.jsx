import React, { Component } from "react";
import headshot from "../images/headshot.png";
import config from "../config.json";
import ExternalLink from "../components/common/externalLink";

class AboutMe extends Component {
  render() {
    return (
      <>
        <div className="bg-base-100 rounded-box shadow-xl m-4 xl:mx-0">
          <div className="grid place-items-center gap-4 py-4">
            <div className="avatar">
              <div className="mask mask-squircle bg-base-content w-32 bg-opacity-10 p-px">
                <img
                  src={headshot}
                  alt="headshot"
                  className="mask mask-squircle"
                />
              </div>
            </div>
            <div className="text-center w-3/4">
              <div className="text-base-content/70 my-3 text-sm">
                Software Engineer
              </div>
              <div>
                <p>
                  Hi there! I'm a software engineer with over 4 years of
                  professional experience in the field.
                </p>
                <br />
                <p>
                  I received my Bachelor's degree in Computer Science with a
                  Concentration in Applied Computing from Monmouth University
                  and have since been honing my skills in various industries,
                  including retail and e-commerce. My expertise lies in
                  full-stack development, with a focus on creating efficient and
                  scalable solutions for client, mobile, and web applications.
                </p>
                <br />
                <p>
                  Throughout my career, I have grown a strong familiarity with
                  start-up culture and a willingness to be flexible outside of a
                  typical job description when necessary to help complete a
                  team's objective. I've also had the opportunity to work on a
                  variety of projects, from small internal tools to large-scale
                  consumer-facing platforms. Some of my notable accomplishments
                  include leading a small team to deliver a high-performing,
                  highly-available web application that reduced the client's
                  operating costs by automating and optomizing invoice
                  processing workflows.
                </p>
                <br />
                <p>
                  I am proficient in a range of programming languages and
                  technologies, including Ruby on Rails, React, Java, Android,
                  Chef, and Jenkins. I am also familar with cloud technologies
                  such as AWS, Digital Ocean and Docker.
                </p>
                <br />
                <p>
                  In addition to my technical skills, I'm a strong collaborator
                  and enjoy working in cross-functional teams. I am passionate
                  about staying up-to-date with the latest developments in the
                  field and continuously learning new technologies and
                  techniques.
                </p>
                <br />
                <p>
                  If you have any question or project in mind, feel free to
                  connect with me on{" "}
                  <ExternalLink
                    path={config.linkedInProfileUrl}
                    text="LinkedIn"
                    classes="link link-primary"
                  />
                  . I'm always looking for new opportunities to collaborate and
                  learn!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
