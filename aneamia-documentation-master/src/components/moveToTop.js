import React from "react";

const MoveToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <button onClick={handleClick}>Move to Top</button>;
};

export default MoveToTopButton;
