import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name: string | undefined) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await response.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item: any) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id} className="link">
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 1rem 4rem;
  }
`;

const Card = styled.div`
  border-radius: 2rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);

  .link {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }
  img {
    border-radius: inherit;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
