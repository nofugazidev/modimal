import React from "react";
import styled from "styled-components";
import heart from "@/assets/icons/heart.png";
import heartFilled from "@/assets/icons/heart-red.png";

interface ModiWeekProps {
  day: string;
  image: string;
  liked: boolean;
  toggleLike: () => void;
}

const ModiWeek: React.FC<ModiWeekProps> = ({
  day,
  image,
  liked,
  toggleLike,
}) => {
  return (
    <Container>
      <Wrapper
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          src={liked ? heartFilled : heart}
          alt="icon"
          onClick={toggleLike}
        />
      </Wrapper>
      <h4>{day}</h4>
    </Container>
  );
};

export default ModiWeek;

const Container = styled.div`
  width: 18rem;

  h4 {
    margin-top: 0.5rem;
    text-transform: capitalize;
  }
`;
const Wrapper = styled.div`
  height: 26.62rem;
  position: relative;

  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
