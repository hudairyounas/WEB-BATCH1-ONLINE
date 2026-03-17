import React from "react";

const CourseCard = ({ name, desc }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>
    </>
  );
};

export default CourseCard;
