import React from "react";
import LanguageBadge from "./languageBadge";

function Language({ language }) {
  return (
    <h5 className="text-sm">
      {<LanguageBadge language={language} />}
      {language}
    </h5>
  );
}

export default Language;
