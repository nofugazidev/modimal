import React, { useState } from "react";
import styled from "styled-components";
import liked from "@/assets/icons/heart-red.png";
import notliked from "@/assets/icons/heart.png";
import { colors } from "@/constants/colors";

interface ModiWeekCardProps {
  name: string;
  image: string;
}

const ModiWeekCard: React.FC<ModiWeekCardProps> = ({ name, image }) => {
  const [like, setLike] = useState<boolean>(false);

  const clickedLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <Wrapper>
      <div
        className="image-part"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "3 / 4",
        }}
      >
        <img src={like ? liked : notliked} alt="heart" onClick={clickedLike} />
      </div>
      <div className="dets">
        <p>{name}</p>
      </div>
    </Wrapper>
  );
};

export default ModiWeekCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 450px; 
  flex-shrink: 0; 
  

  .image-part {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    width: 100%;

    & > div {
      background: ${colors.offWhite};
      color: ${colors.black};
      outline: none;
      border: none;
      padding: 8px 20px;
      font-size: 12px;
      text-transform: capitalize;
      cursor: pointer;
    }
    & > img {
      margin-left: auto;
      cursor: pointer;
    }
  }

  .dets {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-weight: 600;
      text-transform: capitalize;
    }

    .det-text {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
