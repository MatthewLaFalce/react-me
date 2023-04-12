import React, { Component } from "react";
import { GoRepo } from "react-icons/go";
import Emoji from "react-emoji-render";
import Language from "./language";
import Forks from "./forks";
import Stars from "./stars";

class GithubProject extends Component {
  render() {
    const { html_url, name, language, description, forks, stargazers_count } =
      this.props.project;

    return (
      <div className="card w-7/8 bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">
            <GoRepo />
            <a href={html_url} className="text-primary">
              {name}
            </a>
          </h2>
          <p>
            <Emoji text={description === null ? "" : description} />
          </p>
          <div className="card-actions justify-left">
            <Language language={language} />
            <Stars stars={stargazers_count} />
            <Forks forks={forks} />
          </div>
        </div>
      </div>
    );
  }
}
export default GithubProject;
