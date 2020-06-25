import React from 'react';
import { Link, } from "react-router-dom";
import { Button, Header, } from "semantic-ui-react";

const NoMatch = () => (
  <div style={styles.container}>
    <Header as="h1" style={styles.header}>Mistake</Header>
    <Header as="h1" style={styles.header}>Workin on it.</Header>
    <Header as="h3">Sorry, link not working.</Header>
    <Link to="/">
      <Button color="blue">Home</Button>
    </Link>
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  header: {
    fontSize: "60px",
  },
};

export default NoMatch;