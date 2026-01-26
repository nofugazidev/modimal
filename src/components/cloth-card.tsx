import React from "react";
import styled from "styled-components";
import heart from "@/assets/icons/heart.png";
import heartFilled from "@/assets/icons/heart-red.png";

interface ClothCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  liked: boolean;
  onToggleLike: () => void;
}

const ClothCard: React.FC<ClothCardProps> = ({
  title,
  description,
  price,
  image,
  liked,
  onToggleLike,
}) => {
  return (
    <Wrapper>
      <div
        className="top"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          src={liked ? heartFilled : heart}
          alt="heart-image"
          onClick={onToggleLike}
        />
      </div>
      <div className="details">
        <p>{title}</p>
        <div className="inner-detail">
          <p>{description}</p>
          <h5>${price}</h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClothCard;

const Wrapper = styled.div`
  height: 100%;
  width: 24.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .top {
    height: 27.38rem;
    position: relative;

    img {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > p {
      font-weight: 700;
      font-size: 1.125rem;
      text-transform: capitalize;
    }

    .inner-detail {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-weight: 400;
        font-size: 1rem;
        text-transform: capitalize;
      }

      h5 {
        font-size: 1.05rem;
      }
    }
  }
`;
