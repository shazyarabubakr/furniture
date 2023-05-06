import React, { useEffect } from "react";
import { total } from "../component/State/features/CartSlice";
import {
  increase,
  decrease,
  remove,
} from "../component/State/features/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, name, price, amount, image1 } = cartItem;
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <div
      className="flex justify-between items-center border border-solid border-gray-500 p-4 mb-6"
      key={id}
    >
      <div className="flex items-center gap-4">
        <img src={image1} alt="" className="w-20 h-20 object-cover" />
      </div>
      <div className="flex flex-col items-start max-w-[6.8rem]">
        <div>{name}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => dispatch(increase(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <i
          class="fi fi-br-cross-small"
          onClick={() => dispatch(remove(cartItem))}
        ></i>

        <div>${(price * amount).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CheckoutItems;
