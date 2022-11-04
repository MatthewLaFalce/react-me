import React, { Component } from "react";

class GithubLanguageBadge extends Component {
  getBadgeClasses(language) {
    let classes = "badge badge-sm ";
    if (language === undefined || language === null || language === "") {
      return;
    }
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
    const { language } = this.props;

    return <div className={this.getBadgeClasses(language)}>{language}</div>;
  }
}
export default GithubLanguageBadge;
