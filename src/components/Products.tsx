import React from "react";
import Product from "../models/product";
import ProductItem from "./ProductItem";

const Products: React.FC<{
  products: Product[];
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
    <ul className="container mx-20 my-5  grid max-w-5xl">
      <h1 className="block text-black-900 font-bold mb-1 md:mb-0 pr-4 ">
        Products
      </h1>
      <hr />

      {props.products.map((i) => (
        <ProductItem
          key={i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          description={i.description}
          category={i.category}
          image={i.image}
          rate={i.rating.rate}
          count={i.rating.count}
          onAddBasketHandler={props.onAddBasketHandler}
          onAddFavoriteHandler={props.onAddFavoriteHandler}
        />
      ))}
    </ul>
  );
};
export default Products;
