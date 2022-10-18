import styled from "styled-components";

export const Navigation = styled.header`
  width: 100%;
  overflow: hidden;
  background-color: lightseagreen;
  z-index: 999;
  position: relative;
  @media (max-width: 800px) {
    overflow: visible;
  }
`;
export const Nav = styled.nav`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hamburger {
    cursor: pointer;
    max-width: 3rem;
    display: none;
  }
  @media (max-width: 800px) {
    button {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
  ul.active {
    display: block;
  }
`;
export const Ul = styled.ul`
  display: flex;
  width: 20%;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: absolute;
    top: 81px;
    right: 0;
    background: var(--DarkBlue);
    display: none;
    padding: 3rem 0;
    text-align: center;
  }
`;
export const Li = styled.li`
  padding: 1rem 0;
`;
export const Logo = styled.div``;
