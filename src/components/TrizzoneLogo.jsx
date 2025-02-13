import React from "react";

const TrizzoneLogo = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outlined Triangle */}
        <polygon
          points="100,300 200,80 300,300"
          fill="none"
          stroke="black"
          strokeWidth="10"
        />

        {/* Left Shaded Triangle */}
        <polygon points="120,300 175,180" fill="black" />

        {/* Right Open Triangle */}
        <polyline
          points="280,300 200 "
          stroke="black"
          strokeWidth="10"
          fill="none"
        />

        {/* Text "TRIZZONE" Cutting the Outline */}
        <rect x="90" y="180" width="220" height="50" fill="white" />
        <text
          x="200"
          y="220"
          fontSize="50"
          fontWeight="bold"
          fill="black"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          TRIZZONE
        </text>
      </svg>
    </div>
  );
};

export default TrizzoneLogo;
