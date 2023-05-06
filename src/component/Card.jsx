import React from "react";
import { add } from "./State/features/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { id, image1, image2, alt, name, price } = item;

  return (
    <div className="md:w-full w-full p-2 ">
      <Link to={`/ItemDetails/${id}`} className="group block overflow-hidden">
        <div className="relative h-[300px] sm:h-48">
          <img
            src={image1}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src={image2}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />

          {/* {productImage ? (
            <img
              src={image1}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              onMouseOver={() => setProductImage(true)}
          onMouseOut={() => setProductImage(false)}
            />
          ) : (
            <img
              src={image2}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          )} */}
        </div>
      </Link>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>

        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{price}</p>

          <p className="text-lg p-r-1 cursor-pointer">
            <i
              className="fi fi-rr-shopping-cart text-lg"
              onClick={() => dispatch(add(item))}
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
