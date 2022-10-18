import styled from "styled-components";

export const ArticleWrapper = styled.div`
  padding: 10rem 0 6rem 0;
  /* background: var(--VeryLightGray); */
  h2 {
    padding: 1rem 0 2rem auto;
  }
`;
export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;
export const ArticleCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h4 {
    padding: 1rem 0;
  }
  border-radius: 1rem;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
    cursor: pointer;
  }
  img {
    height: 250px;
  }
  @media (max-width: 800px) {
    img {
      height: 150px;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 200px;
    }
  }
`;
export const ArticleCardContent = styled.div`
  padding: 2rem 3rem;
`;
