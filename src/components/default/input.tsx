import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/colors";

interface InputProps {
  placeholder: string;
  icon?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, icon, type }) => {
  return (
    <Wrapper>
      <input type={type} placeholder={placeholder} />
      {icon && <img src={icon} />}
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  border: 1px solid ${colors.deepGray};
  padding: 9px 16px;
  display: flex;
  aling-items: center;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 18px;
  }

  input::placeholder {
    text-transform: capitalize;
  }
`;
