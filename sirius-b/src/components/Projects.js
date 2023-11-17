import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import booking_app from "../assets/img/booking_app.png";
import ecommerce_website from "../assets/img/ecommerce_website.png";
import edi_implemenation from "../assets/img/edi_implementation.png";
import payment_app from "../assets/img/payment_app_integration.png";
import sales_cloud from "../assets/img/sales_cloud.png";
import stock_management from "../assets/img/stock_management.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Sales cloud implementation",
      description: "Implementing solution for retail sales activities, connecting opportunities with sales orders, automating solution for accounts follow up, customizing sales processes",
      imgUrl: sales_cloud,
    },
    {
      title: "Payment App integration",
      description: "Integrating payment app solution within Salesforce, customizing payment app to support different payment methods, implementing pay via link solution, managing Adyen payment portal",
      imgUrl: payment_app,
    },
    {
      title: "E-commerce website integration",
      description: "Creating API’s for Salesforce e-commerce website data interchange, customizing webforms to capture website data within Salesforce cases, customizing webforms to capture website data within Salesforce opportunities, exposing Salesforce user data and statistics within website user profile",
      imgUrl: ecommerce_website,
    },
    {
      title: "Stock Management",
      description: "Inventory management custom solution, stock management implementation, implementing stock reservations, stock transfers, stock adjustments and stock receipts, customizing stock movements and stock tracking history",
      imgUrl: stock_management,
    },
    {
      title: "EDI implementation",
      description: "Transportation and logistics, zenkraft integration within custom Salesforce solution, customizing fulfillment orders for transportation purposes, automating shipment EDI solution between carrier and salesforce, covering worldwide shipments",
      imgUrl: edi_implemenation,
    },
    {
      title: "Booking app",
      description: "Integration with Salesforce, implementing booking app for booking experiences, implementing APIs for data interchange between Salesforce and booking app, customizing salesforce for capturing experience orders, customizing salesforce for booking sessions management",
      imgUrl: booking_app,
    },
  ];

  const currentProject = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Sales Cloud",
      description: "Retail company",
      imgUrl: projImg1,
    },
    {
      title: "Payment App",
      description: "Managing payments with Adyen",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Finished</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Current</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Future</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {currentProject.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
