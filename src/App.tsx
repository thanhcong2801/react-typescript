import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import { IList } from "./common";

const App = () => {
  const [people, setPeople] = useState<IList["people"]>([
    {
      name: "Thanh Cong",
      age: 25,
      bio: "developer",
    },
  ]);

  return (
    <div className="container">
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
    </div>
  );
};

export default App;
