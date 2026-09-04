import React from "react";
import bestone from "@/assets/images/best-one.png";
import besttwo from "@/assets/images/best-two.png";
import bestthree from "@/assets/images/best-three.png";
import ProductCard from "@/components/common/product-card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "@/constants/colors";

const BestSeller: React.FC = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "tailored stretch",
      detail: "turn it up pants",
      price: 180,
      image: bestone,
      colors: ["#E8DCC4", "#1C2434", "#FFFFFF"],
    },
    {
      id: 2,
      name: "technical silk",
      detail: "make a splash",
      price: 120,
      image: besttwo,
      colors: ["#8B0000", "#000000", "#1C2434"],
    },
    {
      id: 3,
      name: "cool weave",
      detail: "anywhere dress",
      price: 210,
      image: bestthree,
      colors: ["#F5F5DC", "#708090", "#333333"],
    },
  ];

  return (
    <Wrapper>
      <header>
        <h1>best seller</h1>
        <Link to="/" id="view-btn">
          view all
        </Link>
      </header>
      <ProductWrapper>
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            detail={product.detail}
            price={product.price}
            tag={product.tag}
            image={product.image}
            colors={product.colors}
          />
        ))}
      </ProductWrapper>
    </Wrapper>
  );
};

export default BestSeller;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 30px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${colors.black};
      font-weight: 500;
      text-transform: capitalize;
    }

    #view-btn {
      text-transform: capitalize;
      color: ${colors.deepGray};
      font-weight: 400;
      text-decoration: none;
    }
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
