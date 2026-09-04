import React from "react";
import styled from "styled-components";

interface CollectionCardProps {
  bg: string;
  btnText: string;
  position: "bottom-left" | "bottom-right";
  height: string; 
}

interface WrapperProps {
  $position: "bottom-left" | "bottom-right";
  $height: string; 
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  bg,
  btnText,
  position,
  height,
}) => {
  return (
    <Wrapper
      $position={position}
      $height={height} 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Tag>
        <p>{btnText}</p>
      </Tag>
    </Wrapper>
  );
};

export default CollectionCard;


const Wrapper = styled.div<WrapperProps>`
  padding: 30px;
  display: flex; 
  box-sizing: border-box; 
  align-items: flex-end; 
  width: 100%;
  

  height: ${({ $height }) => $height}; 

  justify-content: ${({ $position }) =>
    $position === "bottom-right" ? "flex-end" : "flex-start"};
`;

const Tag = styled.div`
  background: #ffffff;
  width: fit-content;
  text-transform: capitalize;
  font-size: 16px;
  padding: 8px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  p {
    margin: 0; 
  }
`;