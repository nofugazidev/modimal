import React from "react";
import styled from "styled-components";

interface CollectionCardProps {
  image: string;
  text: string;
  top?: string | number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  text,
  top,
  right,
  left,
  bottom,
}) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: `${top}px`,
          bottom: `${bottom}px`,
          left: `${left}px`,
          right: `${right}px`,
        }}
      >
        {text}
      </div>
    </Wrapper>
  );
};

export default CollectionCard;

const Wrapper = styled.div`
    height: 100px;
    width: 100px;
    position: relative;
`;
