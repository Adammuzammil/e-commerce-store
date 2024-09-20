import React from "react";
import { Link } from "react-router-dom";

const ProductsItem = ({ id, image, name, price }) => {
  return (
    <Link to={`/product/${id}`} className="text-white cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="hover:scale-110 transition ease-in-out h-[200px] object-cover rounded"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">$ {price}</p>
    </Link>
  );
};

export default ProductsItem;
