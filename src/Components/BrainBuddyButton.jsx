// src/components/OGProtocol.jsx

import "./BrainBuddyButton.css";

export default function BrainBuddyButton() {
  return (
    <>
      <div className="BrainBuddy-Button-container">
        <button
          className="brain-buddy-button font-Rye-Regular"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=UmzSnxM_Y1w", "_blank")
          }
        >
          About
        </button>
      </div>
    </>
  );
}
