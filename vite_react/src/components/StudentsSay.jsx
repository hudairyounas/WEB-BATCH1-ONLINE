import React from "react";

const StudentsSay = ({name, desc}) => {
  return (
    <>
      <p>
        {desc}
      </p>
      <strong>{name}</strong>
    </>
  );
};

export default StudentsSay;
