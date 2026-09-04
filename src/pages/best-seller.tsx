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
      colors: ["#000000", "#7DC3EB", "#748c70"],
    },
    {
      id: 2,
      name: "technical silk",
      detail: "make a splash",
      price: 120,
      image: besttwo,
      colors: ["#909225", "#19418E", "#000000"],
    },
    {
      id: 3,
      name: "cool weave",
      detail: "anywhere dress",
      price: 210,
      image: bestthree,
      colors: ["#D0A5EA", "#909225", "#748c70"],
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
