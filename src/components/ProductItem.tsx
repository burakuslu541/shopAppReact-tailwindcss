import React from "react";
import { GrFavorite } from "react-icons/gr";
import { BsFillBasketFill } from "react-icons/bs";

const ProductItem: React.FC<{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
  onAddBasketHandler: (
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rate: number,
    count: number
  ) => void;
  onAddFavoriteHandler: (productId: number) => void;
}> = (props) => {
  return (
    <li className="mb-10">
      <div className="flex items-center justify-center gap-x-2 mb-2 ">
        <h3 className="flex justify-center items-center text-xl font-semibold tracking-tight text-gray-900 bg-gray-300 dark:text-white">
          {props.title}
        </h3>
        <h5 className="mx-11 flex items-center gap-x-2 text-3xl font-bold text-gray-900 dark:text-white">
          {props.price}
        </h5>
      </div>
      <div className="flex items-center justify-center gap-x-2 mb-2">
        <p className="mb-5 w-25 text-base text-gray-500 sm:text-xs dark:text-gray-400">
          {props.description}
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-2 mb-2 ">
        <img className="object-cover w-40 h-40" src={props.image} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 bg-orange-500
          flex-shrink-0  border-6  py-1 px-2 rounded mx-3
          "
          onClick={() => {
            props.onAddBasketHandler(
              props.title,
              props.price,
              props.description,
              props.category,
              props.image,
              props.rate,
              props.count
            );
          }}
        >
          <BsFillBasketFill size={20} />
          Add Basket
        </button>
        <button
          className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 bg-orange-300
          flex-shrink-0  border-6  py-1 px-2 rounded mx-3
          "
          onClick={() => {
            props.onAddFavoriteHandler(props.id);
          }}
        >
          <GrFavorite size={20} />
          Add Favorites
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
