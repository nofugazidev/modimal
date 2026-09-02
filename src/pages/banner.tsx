import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/colors";

const Banner: React.FC = () => {
  return (
    <Wrapper>
      <p>enjoy free shipping on all orders</p>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  p {
    color: #ffffff;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
  }
`;
