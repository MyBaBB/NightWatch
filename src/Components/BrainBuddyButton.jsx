// src/components/OGProtocol.jsx

import "./BrainBuddyButton.css";

export default function BrainBuddyButton() {
  return (
    <>
      <div className="BrainBuddy-Button-container">
        <button
          className="brain-buddy-button font-Rye-Regular"
          onClick={() => window.open("https://youtu.be/DJA96XwH_qk", "_blank")}
        >
          👉 Video                        
        </button>
      </div>
    </>
  );
}
