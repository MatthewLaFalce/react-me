import React from "react";
import { GoRepoForked } from "react-icons/go";

function Forks({ forks }) {
  if (forks > 0) {
    return (
      <span className="badge badge-ghost">
        <GoRepoForked />
        {forks}
      </span>
    );
  }
}

export default Forks;
