import React, { createContext, useState } from "react";
import { Products } from "../services/products";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(Products);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
