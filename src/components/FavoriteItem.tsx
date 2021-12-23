import React from "react";
const FavoriteItem: React.FC<{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
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
    </li>
  );
};

export default FavoriteItem;
