import React, { useRef } from "react";
import Product from "../models/product";
import SearchItem from "./SearchItem";

const Search: React.FC<{
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
  onSubmitHandler: (enteredTitle: string) => void;
}> = (props) => {
  const productTitleInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTitle = productTitleInputRef.current!.value;

    if (enteredTitle.trim().length === 0) {
      return;
    }
    props.onSubmitHandler(enteredTitle);
  };
  return (
    <div className="container my-5 mx-auto grid h-[450px]  ">
      <div className="flex  justify-center item-center">
        <form className="w-full max-w-sm mb-4" onSubmit={submitHandler}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <label
              className="block text-gray-500 font-normal md:text-right mb-1 md:mb-0 pr-4 "
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="text"
              ref={productTitleInputRef}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <SearchItem
        onAddBasketHandler={props.onAddBasketHandler}
        searchProduct={props.searchProduct}
      />
    </div>
  );
};
export default Search;
