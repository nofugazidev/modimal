import React from 'react'
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface ButtonProps {
    value: string;
}

const Button: React.FC<ButtonProps> = ({value}) => {
  return (
    <Wrapper>
      {value}
    </Wrapper>
  )
}

export default Button


const Wrapper = styled.button`
    background: ${colors.offWhite};
    color: ${colors.black};
    outline: none;
    border: none;
    padding: 8px 67px;
    text-transform: capitalize;
`