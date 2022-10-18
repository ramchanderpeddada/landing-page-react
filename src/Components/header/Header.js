import React, { useState } from "react";
import { Navigation, Nav, Ul, Li, Logo } from "./Header.style";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Container } from "../../Styles/Commons.style";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <>
        <Navigation>
          <Container>
            <Nav>
              <Logo>
                <img src={logo} alt="logo" />
              </Logo>
              <Ul className={open ? `active` : `navlinks`}>
                <Li>
                  <Link to="/">Home</Link>
                </Li>
                <Li>
                  <Link to="/about">About</Link>
                </Li>
                <Li>
                  <Link to="/contact">Contact</Link>
                </Li>
              </Ul>
              <img
                src={open ? close : hamburger}
                className="hamburger"
                onClick={handleClick}
              />
            </Nav>
          </Container>
        </Navigation>
      </>
    </div>
  );
};

export default Header;
