import Animation from "../components/Animation";
import "../index.css"; // import CSS file that contains the animation code

const Home = () => {
  return (
    <div className="animation-container"> {/* add class to parent div */}
      <div className="welcome-text"> {/* add class to "WELCOME" text */}
        <h1>WELCOME</h1>
      </div>
      <Animation />
    </div>
  );
};

export default Home;
