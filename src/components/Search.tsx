import React, { FormEventHandler, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState<string>("");

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch className="icon" />
      <input
        type="text"
        value={input}
        placeholder="Pesquisar receita"
        onChange={(e) => setInput(e.target.value)}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: none;
  border-radius: 2rem;
  background-color: #f5f2f2;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: fit-content;
    max-width: 100%;
    flex-direction: row;
  }

  .icon {
    font-weight: 100;
    color: #858585;
    margin-right: 1rem;
  }
  input {
    color: #858585;
    border: none;
    font-size: 1rem;
    padding: 1rem 0;
    outline: none;
    background-color: inherit;
    border-radius: inherit;

    &::placeholder {
      color: #b3b3b3;
    }
  }
`;

export default Search;
