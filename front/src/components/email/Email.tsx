/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import "./email.scss";
import axios from "axios";

const Email = () => {
  const [inputValue, setInputValue] = useState("");
  function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/email`, {
        userEmail: inputValue,
      })
      .then(() => {
        alert("Your feedback request has been submitted successfully!");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
  return (
    <sectionclassName="email">
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <p>
          If you have a questions or proposals -<br></br>write your email and we
          will answer it.
        </p>
        <input
          value={inputValue}
          onChange={(event) => handleChangeInputValue(event)}
          type="text"
          name="email"
          placeholder="email..."
        />
      </form>
    </sectionclassName=>
  );
};

export default Email;
