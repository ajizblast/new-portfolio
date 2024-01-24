import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Chahyo P. Aji",
  aboutMe:
    "Crafting Seamless Digital Experiences with a 360° Expertise! 🚀 Full-stack Developer proficient in ReactJS for dynamic front-end, Golang and Java Spring Boot for robust back-end solutions. Seasoned UI/UX Designer with 5 years of honed skills. Elevate your online presence with innovation and precision. #FullStackDeveloper #ReactJS #Golang #JavaSpringBoot #UIUXDesign",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/heroaji.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
