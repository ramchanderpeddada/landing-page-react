import React from "react";
import { FooterLinks, FooterWrapper } from "./Footer.styles";
import logo from "../../images/logo.svg";
import iconFb from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconYoutube from "../../images/icon-youtube.svg";
import iconPinterest from "../../images/icon-pinterest.svg";
import { Container } from "../../Styles/Commons.style";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <div className="footer_inner">
            <FooterLinks>
              <div className="footer-top">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <div className="social-icons">
                  <img src={iconFb} alt="iconFb" />
                  <img src={iconTwitter} alt="iconFb" />
                  <img src={iconYoutube} alt="iconFb" />
                  <img src={iconPinterest} alt="iconFb" />
                </div>
              </div>
              <div className="link">
                <Link to="/about">About</Link>
                <Link to="/">Business</Link>
                <Link to="/">Blog</Link>
              </div>
              <div className="link">
                <Link to="/">Support</Link>
                <Link to="/">Help</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </FooterLinks>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "end",
                fontSize: "18px",
                color: "white",
              }}
            >
              &#169; Easybank. All Rights Reserved
            </Typography>
          </div>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
