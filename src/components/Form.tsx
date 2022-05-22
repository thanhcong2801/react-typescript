import React, { useRef, useState } from "react";
import { IList } from "../common";
import "../css/Form.css";

interface IForm {
  people: IList["people"];
  setPeople: React.Dispatch<React.SetStateAction<IList["people"]>>;
}

const Form = ({ people, setPeople }: IForm) => {
  // const nameRef = useRef<React.InputHTMLAttributes<HTMLInputElement>>(null);
  // const ageRef = useRef<React.InputHTMLAttributes<HTMLInputElement>>(null);
  // const bioRef =
  //   useRef<React.TextareaHTMLAttributes<HTMLTextAreaElement>>(null);
  const [inputData, setInputData] = useState({ name: "", age: "", bio: "" });

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({ name: "", age: "", bio: "" });
  };

  return (
    <div className="form-container">
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={inputData.name}
          onChange={onChange}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          value={inputData.age}
          onChange={onChange}
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio Description"
          value={inputData.bio}
          onChange={onChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
