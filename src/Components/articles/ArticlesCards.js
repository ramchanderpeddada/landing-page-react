import React from "react";
import {
  ArticleCard,
  ArticleCardContent,
  ArticleGrid,
  ArticleWrapper,
} from "./Articles.style";
import MoneyImg from "../../images/image-currency.jpg";
import ConfettiImg from "../../images/image-confetti.jpg";
import PlaneImg from "../../images/image-plane.jpg";
import RestaurantImg from "../../images/image-restaurant.jpg";
import { H2, H4, H5, Para } from "../../Styles/Typography.style";
const ArticleCards = () => {
  return (
    <ArticleWrapper>
      <H2 style={{ paddingBottom: "40px", textAlign: "center" }}>
        Latest articles
      </H2>
      <ArticleGrid>
        <ArticleCard>
          <img src={MoneyImg} />
          <ArticleCardContent>
            <H5>Author Name</H5>
            <H4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit Nonalias.
            </H4>
            <Para>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              alias reprehenderit ut temporibus facilis dignissimos, voluptate
              autem voluptates.
            </Para>
          </ArticleCardContent>
        </ArticleCard>

        <ArticleCard>
          <img src={ConfettiImg} />
          <ArticleCardContent>
            <H5>Author Name</H5>
            <H4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit Nonalias.
            </H4>
            <Para>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              alias reprehenderit ut temporibus facilis dignissimos, voluptate
              autem voluptates.
            </Para>
          </ArticleCardContent>
        </ArticleCard>

        <ArticleCard>
          <img src={RestaurantImg} />
          <ArticleCardContent>
            <H5>Author Name</H5>
            <H4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit Nonalias.
            </H4>
            <Para>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              alias reprehenderit ut temporibus facilis dignissimos, voluptate
              autem voluptates.
            </Para>
          </ArticleCardContent>
        </ArticleCard>

        <ArticleCard>
          <img src={PlaneImg} />
          <ArticleCardContent>
            <H5>Author Name</H5>
            <H4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit Nonalias.
            </H4>
            <Para>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              alias reprehenderit ut temporibus facilis dignissimos, voluptate
              autem voluptates.
            </Para>
          </ArticleCardContent>
        </ArticleCard>
      </ArticleGrid>
    </ArticleWrapper>
  );
};
export default ArticleCards;
