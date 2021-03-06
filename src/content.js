import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
} from 'reactstrap';
import './styles/content.scss';

const ContentComponent = () => (
  <div>
    <Container className="p-2 bg-splash" fluid="true">
      <Row>
        <Col className="text-center" id="splash">
          <a href>
            <img src={require('./assets/myPhoto.jpg')} className="border bg-white rounded-circle p-1" alt="" />
          </a>
          <h1 className="mt-2"><strong>Victor Lee</strong></h1>
          <p className="lead">Software Engineer</p>
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
            since 2012. I got my BS at Georgia Institute of Technology.
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
              <img src={require('./assets/github.svg')} alt="GitHub" />GitHub
            </a>
            <a href="https://www.linkedin.com/in/victor-lee-b1b00846/">
              <img src={require('./assets/linkedin.svg')} alt="LinkedIn" />LinkedIn
            </a>
            <a href="https://www.instagram.com/aohonu/">
              <img src={require('./assets/instagram.svg')} alt="Instagram" />Instagram
            </a>
            <a href="mailto:victorlee228@gmail.com">
              <img src={require('./assets/gmail.svg')} alt="Gmail" />Email
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="p-2" id="portfolio">
          <h3 className="mb-2">Portfolio</h3>
          <p>Here is some stuff that I have been working on.</p>
          <ul className="list-unstyled">
            <li>
              <strong>This website!</strong> This website was created from scratch using React.js, Bootstrap 4, Webpack,
              and an Node.js backend using the Express.js framework.
            </li>
            <li>
              Other projects will go here
            </li>
            <li>
              
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContentComponent;