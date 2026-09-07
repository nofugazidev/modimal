import React from "react";
import styled from "styled-components";

import mon from "@/assets/images/week-one.png";
import tue from "@/assets/images/week-two.png";
import wed from "@/assets/images/week-three.png";
import thur from "@/assets/images/week-four.png";
import fri from "@/assets/images/week-five.png";
import ModiWeekCard from "@/components/common/modi-week-card";

import ScrollContainer from "react-indiana-drag-scroll";
import { colors } from "@/constants/colors";

const ModiWeek: React.FC = () => {
  const DayWears = [
    {
      day: "monday",
      pic: mon,
    },
    {
      day: "tuesday",
      pic: tue,
    },
    {
      day: "wednesday",
      pic: wed,
    },
    {
      day: "thursday",
      pic: thur,
    },
    {
      day: "friday",
      pic: fri,
    },
  ];
  return (
    <Wrapper>
      <h1>modiweek</h1>
      <Carousel nativeMobileScroll={true}>
        {DayWears.map((obj, index) => (
          <ModiWeekCard key={index} name={obj.day} image={obj.pic} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default ModiWeek;

const Wrapper = styled.div`
  padding: 40px;

  h1 {
    color: ${colors.black};
    font-weight: 500;
    text-transform: capitalize;
    // margin-bottom: 40px;
  }
`;
const Carousel = styled(ScrollContainer)`
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-snap-type: mandatory;
  //   justify-content: space-between;
  width: 100%;
  gap: 20px;

  &::-webkit-scrollbar {
    scrollbar-width: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
`;
