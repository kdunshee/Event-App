import React from "react";
import { Header } from "semantic-ui-react";
import Occasions from "./Occasions";


const Home = () => {
    
    return (
        <div>
        <Header as="h1">Events In Your Area!</Header>
        <hr />
        <br />
        <br/>
      <Occasions />
      <br/>
      <br />
    </div>
  );
};
export default Home;
