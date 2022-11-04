import React from "react";

const ExternalLink = ({ text, path, classes }) => {
  return (
    <a
      className={classes}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
};

export default ExternalLink;
