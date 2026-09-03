import React from "react";
import Navbar from "@/components/default/navbar";
import Footer from "@/components/default/footer";
import { Outlet } from "react-router-dom";
import Banner from "@/pages/banner";

import styled from "styled-components";

const RootLayout: React.FC = () => {
  return (
    <Wrapper>
      <Banner />
      <Navbar />
      <div 
      // style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default RootLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
