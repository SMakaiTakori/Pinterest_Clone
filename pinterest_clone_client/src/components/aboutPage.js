import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Col>
          <h1> How to Use this App </h1>
          <br />
          <p>
            This app is a Pinterest clone, created using a Rails backend and the
            Pixabay external API. You can search for anything your heart
            desires, then press the <em>Search</em> button and your images will
            appear. If you are having trouble deciding what to search for, just
            select one of the popular categories below the search option and
            voila! Click on the images that you want to pin as your favorites!
            You can then view your pins by clicking the 'My Pins' link in the
            navigation bar. You can also click a word in the 'Search History'
            section and it will bring up images that you previously searched
            for. Happy Searching!
          </p>
        </Col>
      </Container>
    </div>
  );
};

export default AboutPage;
