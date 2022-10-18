import React from "react";
import { NoRightPaddingContainer } from "../../Styles/Commons.style";
import { H1, Para } from "../../Styles/Typography.style";
import {
  HeroWrapper,
  HeroContent,
  HeroImage,
  HeroContentWrapper,
} from "./Hero.style";
import HeroImg from "../../images/image-mockups.png";

const Hero = () => {
  return (
    <div>
      <NoRightPaddingContainer>
        <HeroWrapper>
          <HeroContent>
            <HeroContentWrapper>
              <H1 style={{ lineHeight: "50px", fontWeight: "bold" }}>
                NextGen digital Banking
              </H1>
              <Para>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </Para>
            </HeroContentWrapper>
          </HeroContent>
          <HeroImage>
            <img src={HeroImg} alt="hero" />
          </HeroImage>
        </HeroWrapper>
      </NoRightPaddingContainer>
    </div>
  );
};

export default Hero;
