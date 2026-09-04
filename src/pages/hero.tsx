import React from "react";
import hero from "@/assets/images/hero.png";
import styled from "styled-components";
import Button from "@/components/common/button";
import { colors } from "@/constants/colors";

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <p>elegance in simplicity</p>
      <p>earth's harmony</p>
      <Button value="new in" />
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
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  p {
    color: ${colors.black};
    font-size: 24px;
    text-transform: capitalize;
    font-weight: 600;
    font-style: italic;
  }
`;
