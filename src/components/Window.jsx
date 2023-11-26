import React, { useEffect, useRef, useState } from "react";

export default function Window() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={`window ${isOpen ? "open" : ""}`}>
      <div className="window__toggle"></div>
      <div className="window__inner"></div>
      <div className="window__blinds" onClick={handleToggle}>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
        <div className="window__blinds__blind"></div>
      </div>
    </div>
  );
}
