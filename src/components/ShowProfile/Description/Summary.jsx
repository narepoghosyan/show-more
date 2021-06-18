import { useState } from "react";

const Summary = ({ summary }) => {
  let [expanded, toggleExpanded] = useState(false);

  let handleClick = (e) => {
    e.preventDefault();
    toggleExpanded(!expanded);
  };

  return summary ? (
    <p>
      <b>Summary: </b>
      {expanded ? summary : summary.slice(0, 200)}
      <a href="" onClick={handleClick}>
        {expanded ? " Show less" : " Show more"}
      </a>
    </p>
  ) : (
    ""
  );
};

export default Summary;
