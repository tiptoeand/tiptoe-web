import React, { useContext } from "react";
import { TrashIcon } from "../helpers/icons";
import { CartContext } from "../contexts/CartContext";

import { formatNumber } from "../helpers/utils";

const CartItem = ({ product }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="row no-gutters py-2">
      <div className="col-6 p-2">
        <img
          alt={product.name}
          style={{ margin: "0 auto", minHeight: "50px", maxHeight: "200px" }}
          src={product.photo}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-6 p-2">
        <h5 className="mb-1">{product.name}</h5>
        <h6 className="mb-1">Price: {formatNumber(product.price)} </h6>
        <h6 className="mb-1">Qty: {product.quantity}</h6>
        <h6 className="mb-1">Color: {product.color}</h6>
        <h6 className="mb-1">Size: {product.size}</h6>
        <button
          onClick={() => removeProduct(product)}
          className="btn btn-danger btn-sm mb-1"
        >
          <TrashIcon width={"16px"} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
