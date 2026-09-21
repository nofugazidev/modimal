import Input from "@/components/default/input";
import React from "react";
import eye from "@/assets/icons/eye.svg";
import styled from "styled-components";

const Register: React.FC = () => {
  return (
    <Wrapper>
      <Input placeholder="enter name" type="text" icon={eye} />
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  padding: 40px;
`;
