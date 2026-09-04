import React, { useState } from "react";
import styled from "styled-components";
import liked from "@/assets/icons/heart-red.png";
import notliked from "@/assets/icons/heart.png";
import { colors } from "@/constants/colors";

interface ProductCardProps {
  name: string;
  detail: string;
  price: number;
  tag?: string;
  image: string;
  colors: string[];
}

interface ColorCircleProps {
  $bgColor: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  detail,
  price,
  tag,
  image,
  colors,
}) => {
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
          minHeight: "500px",
          minWidth: "400px",
        }}
      >
        {tag && <div>{tag}</div>}
        <img src={like ? liked : notliked} alt="heart" onClick={clickedLike} />
      </div>
      <div className="dets">
        <p>{name}</p>
        <div className="det-text">
          <small>{detail}</small>
          <h4>${price}</h4>
        </div>
        <div className="colors">
          {colors?.map((color, index) => (
            <ColorCircle key={index} $bgColor={color} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .image-part {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;

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

      small {
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
      }
    }

    .colors {
      display: flex;
      gap: 8px;
    }
  }
`;

const ColorCircle = styled.div<ColorCircleProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 50%;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
