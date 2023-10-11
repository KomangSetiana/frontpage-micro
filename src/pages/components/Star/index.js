import React from "react";

// import IconStar from "../../../../public/images/icon-star.svg";

import propTypes from "prop-types";
export default function Star({ className, value, height, width }) {
  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }
  const starPlaceholder = [];
  for (let index = 0; index < 5 && index < value; index++) {
    starPlaceholder.push(
      <div
        className="starPlaceholder"
        key={`starPlaceholder-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }
  return (
    <div className={["stars", className].join(" ")} style={{ height: height }}>
      {starPlaceholder}
      {star}
    </div>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
};
