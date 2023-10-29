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
      <header>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </header>
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
            <p dangerouslySetInnerHTML={{ __html: details.summary }} className="about"></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }} className="recipe"></p>
          </Instructions>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient: any) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    color: #2c2b2b;
    h2 {
      margin-bottom: 1rem;
    }
    img {
      width: 100%;
    }
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
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

`
const Button = styled.button`
  width: 10rem;
  padding: 1rem 2rem;
  color: #313131;
  border-radius: 3rem;
  background: white;
  border: none;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  
`;

const Instructions = styled.div`
  margin: 1rem 0;

  .recipe {
    padding: 0 1.5rem;
  }
`

export default Recipe;
