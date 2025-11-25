// src/components/OGProtocol.jsx

import "./BrainBuddyButton.css";

export default function BrainBuddyButton() {
  return (
    <>
      <div className="BrainBuddy-Button-container">
        <button
          className="brain-buddy-button font-Rye-Regular"
          onClick={() => window.open("https://www.youtube.com/@EnforcerOfficial", "_blank")}
        >
          Official                     
        </button>
      </div>
    </>
  );
}
