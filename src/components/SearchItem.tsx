import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Product from "../models/product";
const SearchItem: React.FC<{
  searchProduct: Product[];
  onAddBasketHandler: (
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rate: number,
    count: number
  ) => void;
}> = (props) => {
  return (
    <div>
      <ul className=" bg-white rounded-lg shadow-2xl dark:bg-gray-1000 dark:border-gray-1000 p-8">
        {props.searchProduct.length === 0 ? (
          <h6 className="flex items-center justify-center gap-x-2 mb-2 ">
            Please search!
          </h6>
        ) : (
          <li>
            <div className="flex items-center justify-center gap-x-2 mb-2 ">
              <img
                className="object-cover w-40 h-40"
                src={props.searchProduct[0].image}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-x-2 mb-2 ">
              <h3 className="flex justify-center items-center text-xl font-semibold tracking-tight text-gray-900 bg-gray-300 dark:text-white">
                {props.searchProduct[0].title}
              </h3>
              <h5 className="mx-11 flex items-center gap-x-2 text-3xl font-bold text-gray-900 dark:text-white">
                {props.searchProduct[0].price}
                <RiMoneyDollarCircleLine size={20} />
              </h5>
            </div>
            <div className="flex items-center justify-center gap-x-2 mb-2">
              <p className="mb-5 w-25 text-base text-gray-500 sm:text-xs dark:text-gray-400">
                {props.searchProduct[0].description}
              </p>
            </div>

            <button
              className="w-full h-11 flex items-center justify-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 bg-orange-500"
              onClick={() => {
                props.onAddBasketHandler(
                  props.searchProduct[0].title,
                  props.searchProduct[0].price,
                  props.searchProduct[0].description,
                  props.searchProduct[0].category,
                  props.searchProduct[0].image,
                  props.searchProduct[0].rating.rate,
                  props.searchProduct[0].rating.count
                );
              }}
            >
              <BsFillBasketFill size={20} />
              Add Basket
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchItem;
