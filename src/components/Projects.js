import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const jsprojets = [
    {
      title: "News Portal",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Netflix UI",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Dictionary App",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Rayban",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Web",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Product Landing Page",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Documentation",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Paper Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    }
  ];

  const reactprojects = [
    {
      title: "Social Media",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Netflix",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Animated Portfolio",
      description: "Design & Development",
      imgUrl: projImg3,
    }
  ];

  const fullstackprojets = [
    {
      title: "Pinterest",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Facebook",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML,CSS,JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          jsprojets.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          reactprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          fullstackprojets.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}