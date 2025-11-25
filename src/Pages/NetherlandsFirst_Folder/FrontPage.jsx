import "./FrontPage.css";
import OpenSource from "../../Components/OpenSource_Folder/OpenSource.jsx";
import BrainBuddyButton from "../../Components/BrainBuddyButton";
import EnforcerButton from "../../Components/EnforcerButton";
function App() {
  return (
    <div id="Wrapper" className="relative flex">
      <article>
        <h1>⚔️ First to Defend — From Rembrandt to Today ⚔️</h1>
        <h2>Night Watch: 1642 → 2025. Dutch vigilance never sleeps.</h2>

        <div className="RembrandtDiv relative">
          <img
            src="https://images.brainbuddys.com/Rembrandt/NightWatch_Image.webp"
            alt="Rembrandt's The Night Watch painting"
            style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
          />
          <EnforcerButton />
          <OpenSource />
          <BrainBuddyButton />
        </div>
        <p>
          Completed in <strong>1642</strong>, Rembrandt van Rijn`s masterpiece{" "}
          <em>The Night Watch</em>
          (officially titled{" "}
          <em>
            Militia Company of District II under the Command of Captain Frans
            Banninck Cocq
          </em>
          )
          <hr className="hrstyled" />
          Past: In 1642, Rembrandt captured Amsterdam`s citizen militia stepping
          forward — the first to defend their city.
        </p>
        <hr className="hrstyled" />
        <p>
          Present: In 2025, Dutch forces became the first in Europe to fire at
          Russian drones. Vigilance lives on.
        </p>
        <hr className="hrstyled" />
        <p>
          From oil paint to air defense, the Dutch spirit of readiness endures.
        </p>
        <hr className="hrstyled" />
        <p>
          For the Netherlands, <em>The Night Watch</em> is more than art: it is
          a symbol of being the
          <strong>&nbsp;first to defend</strong>. This project honors that
          legacy—blending Rembrandt`s vision to celebrate Dutch bravery,
          culture, and resilience.
        </p>
      </article>
      <a href="https://about.us.mybabb.com/AboutUsPage">
      <span className="absolute bottom-0 right-0 p-2 text-sm text-gray-400">Brett&apos;s Web Development</span>
      </a>
    </div>
  );
}

export default App;
