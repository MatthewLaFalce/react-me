import React from "react";
import Colors from "./colors.json";

function getColor(language) {
  return Colors[language]["color"];
}

function LanguageBadge({ language }) {
  if (language !== undefined && language !== null) {
    return (
      <span
        className="badge badge-xs mr-2"
        style={{ backgroundColor: getColor(language) }}
      ></span>
    );
  }
}

export default LanguageBadge;
