import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap';
import './home.scss';

const Home = () => (
  <div>
    <Container className="p-2 bg-splash" fluid={true}>
      <Row>
        <Col className="text-center" id="splash">
          <img src={require('./myPhoto.jpg')} className="border bg-white rounded-circle p-1" alt="" />
          <h1 className="mt-2"><strong>Victor Lee</strong></h1>
          <p className="lead mb-0">Software Engineer</p>
        </Col>
      </Row>
    </Container>
    <Container className="d-flex flex-row flex-wrap justify-content-between" id="content">
      <Row>
        <Col className="p-2" md="9" id="about">
          <h3 className="mb-2">About Me</h3>
          <div>
            <p>
            Hello, my name is Victor Lee. I have been working as a software engineer in the RTP area of North Carolina
            since 2012. I got my BS at Georgia Institute of Technology. While I am a proficient full-stack web developer,
            my area of expertise is in designing high-performance, scalable backend APIs. I am also very interested in
            AI and machine learning. See my portfolio for some of my personal work in that area.
            </p>
            <p>
            I'm a foodie! When I'm not programming, I enjoy cooking and traveling, and discovering new cuisines. I am
            also interested in crafting things.
            </p>
          </div>
        </Col>
        <Col className="p-2" md="3" id="social">
          <h3 className="mb-2">Contact</h3>
          <div className="d-flex flex-md-column justify-content-around">
            <a href="https://github.com/soofm">
              <img src={require('./github.svg')} alt="GitHub" />GitHub
            </a>
            <a href="https://www.linkedin.com/in/victor-lee-b1b00846/">
              <img src={require('./linkedin.svg')} alt="LinkedIn" />LinkedIn
            </a>
            <a href="https://www.instagram.com/aohonu/">
              <img src={require('./instagram.svg')} alt="Instagram" />Instagram
            </a>
            <a href="mailto:victorlee228@gmail.com">
              <img src={require('./gmail.svg')} alt="Gmail" />Email
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="p-2" id="portfolio">
          <h3 className="mb-2">Projects</h3>
          <p>Here is some stuff that I have been working on.</p>
          <ListGroup>
            <ListGroupItem>
              <strong>Connect 4</strong> - Play <Link to="/connect4">Connect 4</Link> against an AI here.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Machine learning WIP</strong> - A ML project will go here.
            </ListGroupItem>
            <ListGroupItem>
              <strong>This website!</strong> This website was created from scratch using React, Bootstrap 4, Webpack,
              and an Node.js backend using the Express framework.
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
