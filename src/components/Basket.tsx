import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import BasketModel from "../models/basket";
import BasketItem from "./BasketItem";

const Basket: React.FC<{ basketProducts: BasketModel[] }> = (props) => {
  const arrSum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
  let totalPriceArray = props.basketProducts.map((item) => item.price);
  let totalPrice = arrSum(totalPriceArray);
  return (
    <div className=" m-0 w-full h-[450px] overflow-auto hover:overflow-scroll ">
      <h2 className="flex justify-center items-center gap-x-2 text-white bg-orange-400 h-11">
        <BsFillBasketFill size={20} />
        Basket / Total Price: {totalPrice}
      </h2>
      <ul>
        {props.basketProducts.map((i) => (
          <BasketItem
            key={i.id}
            id={i.id}
            title={i.title}
            price={i.price}
            description={i.description}
            category={i.category}
            image={i.image}
            rate={i.rating.rate}
            count={i.rating.count}
          />
        ))}
      </ul>
    </div>
  );
};
export default Basket;
