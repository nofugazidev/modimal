import React from "react";
import styled from "styled-components";
import CollectionCard from "@/components/common/collection-card";

import collone from "@/assets/images/coll-one.png";
import colltwo from "@/assets/images/coll-two.png";
import collthree from "@/assets/images/coll-three.png";
import collfour from "@/assets/images/coll-four.png";

import { colors } from "@/constants/colors";

const Collection: React.FC = () => {
  return (
    <MainWrapper>
      <h1>Collection</h1>

      <GridContainer>
        <div className="column">
          <CollectionCard
            bg={collone}
            btnText="Blouses"
            position="bottom-right"
            height="518px"
          />
          <CollectionCard
            bg={colltwo}
            btnText="Dresses"
            position="bottom-right"
            height="837px"
          />
        </div>

        <div className="column">
          <CollectionCard
            bg={collthree}
            btnText="Pants"
            position="bottom-left"
            height="920px"
          />
          <CollectionCard
            bg={collfour}
            btnText="Outerwear"
            position="bottom-right"
            height="435px"
          />
        </div>
      </GridContainer>
    </MainWrapper>
  );
};

export default Collection;

const MainWrapper = styled.div`
  padding: 40px;
  margin: 0 auto;

  h1 {
    color: ${colors.black};
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  gap: 24px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 50%;
  }
`;
