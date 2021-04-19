import React, { useContext } from "react";
import { Base } from "../_base/Base";

import CartProducts from "./CartProducts";
import { CartContext } from "../contexts/CartContext";
import { formatNumber } from "../helpers/utils";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { total, cartItems, itemCount, checkout, handleCheckout } = useContext(
    CartContext
  );

  return (
    <div className="storecontainer">
      <h1>My Order</h1>
      <content>
        <div className="row">
          <div className="col-6">
            <h3>CONTACT & PAYMENT DETAILS</h3>
            <hr></hr>
            <h3>PICKUP DETAILS</h3>
            <hr></hr>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-dark mb-2"
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>
            </div>
          </div>

          <div className="col-6">
            <div className="card card-body text-left">
              <h3>SUMMARY</h3>
              <hr></hr>
              <div className="row">
                <div className="col-6 text-center">
                  <h4 className=" mb-3 txt-center">Item Total</h4>
                </div>
                <div className="col-6 text-center">
                  <h4 className=" mb-3 txt-center">{itemCount}</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-6 text-center">
                  <h4 className=" mb-3 txt-center">Total Payment</h4>
                </div>
                <div className="col-6 text-center">
                  <h4 className=" mb-3 txt-center">{formatNumber(total)}</h4>
                </div>
              </div>
            </div>

            {cartItems.length > 0 ? (
              <div className="py-3">
                <h3>MY BAG</h3>
                <CartProducts />
              </div>
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}

            {checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link to="/" className="btn btn-outline-success btn-sm">
                  BUY MORE
                </Link>
              </div>
            )}
          </div>
        </div>
      </content>
    </div>
  );
};

function Cart() {
  return <Base content={CartContent} />;
}
export { Cart };
