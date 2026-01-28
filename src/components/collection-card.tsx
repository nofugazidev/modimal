import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/colors";

interface CollectionCardProps {
  image: string;
  text: string;
  top?: string | number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  height: number;
  width: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  text,
  top,
  right,
  left,
  bottom,
  height,
  width,
}) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: `${top}px`,
          bottom: `${bottom}px`,
          left: `${left}px`,
          right: `${right}px`,
          background: `${colors.white}`,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
          cursor: "default",
          textTransform: 'capitalize'
        }}
      >
        {text}
      </div>
    </Wrapper>
  );
};

export default CollectionCard;

const Wrapper = styled.div`
    position: relative;
`;
