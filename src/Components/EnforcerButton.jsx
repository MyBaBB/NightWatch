// src/components/OGProtocol.jsx
 import "./EnforcerButton.css";


export default function EnforcerButton() {
  return (
     <>
    <div className="Enforcer-Button-container ">
      <button 
        className="enforcer-button font-Rye-Regular"
        onClick={() => window.open('https://youtu.be/UmzSnxM_Y1w', '_blank')}
      >
       Enforcer
      </button>
    </div>
     </>
  );
}
