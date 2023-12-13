import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

type PicksProps = {
  type: string;
}

const Picks = (props: PicksProps) => {
  const [picks, setPicks] = useState<any>([]);

  useEffect(() => {
    getPicks();
  }, []);

  const getPicks = async () => {
    const check = localStorage.getItem(props.type);

    if (check) {
      setPicks(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await response.json();

      localStorage.setItem(props.type, JSON.stringify(data.recipes));
      setPicks(data.recipes);

      console.log(response);
    }
  };
  

  return (
    <Padding>
      <Wrapper>
        <h3>Our <span className="capitalized">{props.type}</span> Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            autoWidth: true
          }}
        >
          {picks.map((recipe: any) => {
            console.log(recipe);
            
            return(
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          } )}
        </Splide>
      </Wrapper>
    </Padding>
  );
};

const Padding = styled.div`
  padding: 1rem;
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem 4rem;
  }
`;

const Wrapper = styled.div`
  h3 {
    margin-top: 0;
    margin-bottom: 2rem;

    .capitalized {
      text-transform: capitalize;
    }
  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Picks;
