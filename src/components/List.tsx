import React from "react";
import { IList } from "../common";
import "../css/List.css";

const List = ({ people }: IList) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <div className="list-item-container" key={person.name}>
          {person.name} - {person.age} - {person.bio}
        </div>
      );
    });
  };
  return (
    <div className="list-container">
      <h1>List</h1>
      {renderList()}
    </div>
  );
};

export default List;
