import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/colors";

interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <Wrapper>
      <p>{value}</p>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  background: ${colors.white};
  padding: 0.5rem 3.75rem;
  cursor: pointer;
  border: none;
  font-size: 1.25rem;
  color: ${colors.black};
  text-transform: capitalize;
`;
