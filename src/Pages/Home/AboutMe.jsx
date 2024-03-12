export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            I am taking on an exciting transition into the tech industry. My
            background has equipped me with valuable skills in teamwork and
            problem-solving. I am now looking to use these skills and further my
            knowledge by joining a team as a junior.
            {/* in order for me to advance
            in the tech industry. */}
          </p>
        </div>
      </div>
    </section>
  );
}
