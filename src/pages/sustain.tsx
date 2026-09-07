import React from "react";
import sustain from "@/assets/images/sustain.png";
import styled from "styled-components";
import Button from "@/components/common/button";
import { colors } from "@/constants/colors";

const Sustain: React.FC = () => {
  return (
    <Wrapper>
      <p>
        Stylish sustainability in clothing promotes eco-friendly choices for a
        greater future
      </p>
      <Button value="sustain" />
    </Wrapper>
  );
};

export default Sustain;

const Wrapper = styled.div`
  background: url(${sustain});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 700px;
  padding: 140px 40px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    color: ${colors.secondary};
    font-size: 20px;
    width: 600px;
    text-transform: capitalize;
    text-align: right;
  }
`;
