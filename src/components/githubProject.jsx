import React, { Component } from "react";

class GithubProject extends Component {
  getBadgeClasses(language) {
    let classes = "badge badge-sm ";
    switch (language) {
      case "Ruby":
        classes += "badge-error";
        break;
      case "JavaScript":
        classes += "badge-warning";
        break;
      case "Shell":
        classes += "badge-success";
        break;
      case "HTML":
        classes += "badge-info";
        break;
      default:
        classes += "";
        break;
    }
    return classes;
  }

  render() {
    const { id, html_url, name, language, description, topics } =
      this.props.project;

    return (
      <div className="card w-96 bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">
            <i className="fa-brands fa-github"></i>
            <a href={html_url}>{name}</a>
            <div className={this.getBadgeClasses(language)}>{language}</div>
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
