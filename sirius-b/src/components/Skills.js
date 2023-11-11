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
              <h2>About us</h2>
              <p>
                Sirius B was founded in 2021. and since then is operating as a
                company specialized in Salesforce solutions. Our purpose is to
                help mid and large organizations operationalize their digital
                transformation for every employee. Our dedicated team of
                professionals has already worked on projects including different
                business areas within Salesforce cloud applications on
                Salesforce.com platform. Specialized in Sales Cloud, Service
                Cloud and Marketing Cloud, we are covering a wide scope of work
                for our clients including automating sales, marketing and
                customer service processes and ensuring our customers get the
                best business solution aligning with their company business
                strategy. Our expertise include business professionals with 5+
                years of experience in working with different Cloud applications
                on the Salesforce.com platform.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Salesforce consulting</h5>
                  <p>
                    Our clients get the best expertise by involving our experts
                    in discovering their potential business improvements,
                    promoting new ideas, and driving innovation. We
                    differentiate organizations by enabling new ways of working,
                    connecting, and conducting business. By aligning with the
                    clients business needs, we aim to realize the business
                    operations and focus ourselves in providing optimal
                    solutions within the Salesforce.com platform. Our common
                    goal becomes increasing the productivity within clients'
                    business departments, and making their everyday work as
                    efficient as possible.
                  </p>
                </div>
                <div className="item">
                  <h5>Salesforce implementation and integration</h5>
                  <p>
                    With a hand of skilled professionals, and an insight into
                    our clients business needs, we offer tailor-made development
                    solutions. Our development solutions are a product of
                    bridges between consultants and development specialists. The
                    synergy between business consultants and tech team brings
                    the winning combination and as a result provides service
                    delivery that meets the clients objectives. Grounded in a
                    nuanced understanding of the operational, business, and
                    knowledge plans of the client and with a clear understanding
                    of the digital benefit we provide to our customers, our work
                    takes a holistic view. The cross-disciplinary integration
                    between Salesforce.com cloud solutions and external
                    applications raises the business on a completely another
                    level giving a client better business overview.
                  </p>
                </div>
                <div className="item">
                  <h5>Salesforce Administration and Support</h5>
                  <p>
                    To make your daily operational services more fluent, we are
                    powering your business with on-demand Salesforce admin staff
                    members. As a complement to the uniqueness of every
                    business, an admin constantly participates in tailoring your
                    Salesforce Cloud solutions to make an optimized daily scope
                    of work for your employees. In order to ensure optimal
                    performance of Salesforce systems and products, upgrade and
                    configure Salesforce systems for optimized integration, a
                    need for this business segment becomes a foundation for
                    stable business operations. By evaluating and installing new
                    Salesforce releases, as well as providing training and
                    support for client employees, a business performance becomes
                    even more elevated.
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
