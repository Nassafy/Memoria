import React from "react";
import NameDisplay from "./PeopleCard/NameDisplay";
import NumDisplay from "./PeopleCard/NumDisplay";
import Card from "./Card.js";

const PeopleCard = props => {
  return (
    <Card
      img={props.face}
      body={
        <>
          <NameDisplay name={props.name} />
          <NumDisplay num={props.num} />
        </>
      }
    />
  );
};

export default props => PeopleCard(props);
