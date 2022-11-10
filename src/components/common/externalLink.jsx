import React from "react";

const ExternalLink = ({ text, path, classes, icon }) => {
  return (
    <a
      className={classes}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon}
      {text}
    </a>
  );
};

export default ExternalLink;
