import React from "react";
import { Base } from "../_base/Base";
import MainImage from "../image/store.jpg";
import ProductsGrid from "./ProductsGrid";
import "./store.css";

// Store page content
const StoreContent = () => {
  return (
    <div className="storecontainer">
      <img src={MainImage} className="titleImage pb-3" alt="Tiptoe Store" />
      <h2>Online Store</h2>
      <content>
        <div>
          <ProductsGrid />
        </div>
      </content>
    </div>
  );
};

function Store() {
  return <Base content={StoreContent} />;
}

export { Store };
