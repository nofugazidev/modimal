import React from "react";
import bestone from "@/assets/images/best-one.png";
import ProductCard from "@/components/common/product-card";

const BestSeller: React.FC = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Tailored Linen Blazer",
      detail: "100% Organic Linen",
      price: 189,
      tag: "New",
      image: bestone,
      colors: ["#E8DCC4", "#1C2434", "#FFFFFF"], // Sand, Navy, White
    },
    {
      id: 2,
      name: "Satin Slip Dress",
      detail: "Heavyweight Silk Blend",
      price: 145,
      image: bestone,
      colors: ["#8B0000", "#000000"], // Deep Red, Onyx
    },
    {
      id: 3,
      name: "Ribbed Knit Tank",
      detail: "Egyptian Cotton",
      price: 48,
      image: bestone,
      colors: ["#F5F5DC", "#708090", "#333333"], // Beige, Slate, Charcoal
    },
  ];

  return (
    <div style={{display: 'flex'}}>
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
    </div>
  );
};

export default BestSeller;
