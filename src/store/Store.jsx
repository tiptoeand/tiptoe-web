import React from "react";
import { Base } from "../_base/Base";
import MainImage from "../image/MainImage.jpeg";
import "./store.css";

const StoreContent = () => {
  return (
    <div className="storecontainer">
      <img src={MainImage} className="titleImage pb-3" alt="Tiptoe Store" />
      <h2>Tiptoe& Store</h2>
      <content>
        <p>Coming Soon...</p>
      </content>
    </div>
  );
};

function Store() {
  return <Base content={StoreContent} />;
}
export { Store };
