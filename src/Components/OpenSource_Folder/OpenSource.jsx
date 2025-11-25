import "./OpenSource.css";

const OpenSource = () => {
  return (
    <div>
      <section className="gateway relative flex flex-col items-end justify-end">
        <div className="secondary-links absolute">
          <a href="https://github.com/MyBaBB/NightWatch" className="badge">
            <img
              src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"
              alt="Open Source Love"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default OpenSource;
