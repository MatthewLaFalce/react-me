import React from "react";
import { FaRegStar } from "react-icons/fa";

function Stars({ stars }) {
  if (stars > 0) {
    return (
      <span className="badge badge-ghost">
        <FaRegStar /> {stars}
      </span>
    );
  }
}

export default Stars;
