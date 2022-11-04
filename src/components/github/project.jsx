import React, { Component } from "react";
import { GoMarkGithub } from "react-icons/go";
import GithubLanguageBadge from "./languageBadge";

class GithubProject extends Component {
  render() {
    const { id, html_url, name, language, description, topics } =
      this.props.project;

    return (
      <div className="card w-96 bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">
            <GoMarkGithub />
            <a href={html_url}>{name}</a>
            <GithubLanguageBadge language={language} />
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            {topics.map((topic) => (
              <div key={id + topic} className="badge badge-outline">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default GithubProject;
