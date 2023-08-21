import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" id="skills">
              <h2>About Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Salesforce Integration</h5>
                  <p>
                    Salesforce integration involves connecting Salesforce with
                    other external systems, applications, or data sources to
                    enable seamless data exchange and process automation.
                    Developing expertise in integration techniques, such as
                    RESTful APIs, SOAP APIs, and middleware platforms like
                    MuleSoft, empowers you to create unified and synchronized
                    experiences across various systems. This skill is essential
                    for building comprehensive solutions that leverage data from
                    diverse sources within the Salesforce ecosystem.
                  </p>
                </div>
                <div className="item">
                  <h5>Apex Development</h5>
                  <p>
                    Apex is a programming language specifically designed for the
                    Salesforce platform. It allows developers to create custom
                    business logic, triggers, and controllers for automating
                    processes and extending the functionality of Salesforce
                    applications. Mastering Apex enables you to build powerful
                    and tailored solutions that meet unique business
                    requirements within the Salesforce ecosystem.
                  </p>
                </div>
                <div className="item">
                  <h5>Lightning Web Components</h5>
                  <p>
                    Lightning Web Components (LWC) is a modern approach to
                    building user interfaces on the Salesforce platform. LWC
                    leverages web standards like HTML, JavaScript, and CSS to
                    create responsive and efficient UI components. By mastering
                    LWC development, you can create lightning-fast,
                    customizable, and reusable components that enhance user
                    experience and streamline workflows in Salesforce
                    applications.
                  </p>
                </div>
                <div className="item">
                  <h5>Sales Cloud</h5>
                  <p>
                    Sales Cloud is a core Salesforce product focused on managing
                    sales processes, leads, opportunities, and customer
                    interactions. Developing skills in Sales Cloud configuration
                    and customization involves tailoring the platform to fit
                    your organization's specific sales workflows. This includes
                    setting up custom fields, workflows, validation rules, and
                    reports to optimize sales operations and provide valuable
                    insights into your sales pipeline. Mastering this skill
                    enhances sales efficiency and helps drive revenue growth
                    through the effective use of Salesforce's sales management
                    tools.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
