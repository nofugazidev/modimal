import React from "react";
import hero from "@/assets/images/hero.png";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <p>elegance in simplicity</p>
      <p>earth's harmony</p>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 700px;
  padding: 140px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
