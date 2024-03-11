export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gundars</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am taking on an exciting transition into the tech industry. My
            background has equipped me with valuable skills in teamwork and
            problem-solving. I am now looking to use these skills and further my
            knowledge by joining a team as a junior.
            {/* in order for me to advance
            in the tech industry. */}
          </p>
        </div>
        <button className="btn btn-primary"> Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
