import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();

  const [details, setDetails] = useState<any>({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <Header>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <p
          dangerouslySetInnerHTML={{ __html: details.summary }}
          className="about"
        ></p>
      </Header>

      <Info>
        <Buttons>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </Buttons>

        {activeTab === "instructions" && (
          <Instructions>
            <p
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              className="recipe"
            ></p>
          </Instructions>
        )}
        {activeTab === "ingredients" && (
          <Ingredients>
            <ul>
              {details.extendedIngredients.map((ingredient: any) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </Ingredients>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  padding: 1rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }

  .active {
    background-color: #ffdb63;
    color: white;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Header = styled.header`
  color: #2c2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
  }
  img,
  p {
    max-width: 30rem;
  }
  img {
    width: 100%;
  }
  p {
    margin: 2rem 0;
    line-height: 1.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
`;
const Button = styled.button`
  width: 10rem;
  padding: 1rem 2rem;
  color: #313131;
  border-radius: 3rem;
  background: white;
  border: none;
  font-weight: 600;

  @media screen and (min-width: 1024px) {
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      background: #bdbcbc;
    }
  }
`;

const Info = styled.div``;

const Instructions = styled.div`
  margin: 2rem 0;

  .about {
    margin-bottom: 2rem;
    line-height: 1.25rem;
  }
  .recipe {
    padding: 0 1.5rem;
  }
`;

const Ingredients = styled.div`
  padding: 0 2rem;
  color: #2c2b2b;
`;

export default Recipe;
