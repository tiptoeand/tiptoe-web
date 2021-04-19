import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../contexts/ProductsContext";
import "./store.css";

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div className="row" />
      <div class="flexbox-products-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
