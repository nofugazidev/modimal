import React from "react";
import one from "@/assets/images/show-one.png";
import two from "@/assets/images/show-two.png";
import three from "@/assets/images/show-three.png";
import four from "@/assets/images/show-four.png";
import five from "@/assets/images/show-five.png";

import styled from "styled-components";

const Showcase: React.FC = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={one} alt="show-image" />
      </div>
      <div className="right">
        <div className="top">
          <img src={two} alt="show-image" />
          <img src={three} alt="show-image" />
        </div>
        <div className="btm">
          <img src={four} alt="show-image" />
          <img src={five} alt="show-image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Showcase;

const Wrapper = styled.div`
  margin: 0;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;

  .left {
    flex: 0.5;

    img {
      width: 100%;
    }
  }

  .right {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top,
    .btm {
      display: flex;
      line-height: 0;

      img {
        width: 50%;
        height: auto;
        display: block;
      }
    }
  }
`;
