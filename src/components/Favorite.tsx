import React from "react";
import Product from "../models/product";
import FavoriteItem from "./FavoriteItem";

const Favorite: React.FC<{
  favoriteProducts: Product[];
}> = (props) => {
  return (
    <div className="container my-5  ">
      <h2 className="block text-black-900 font-bold mb-1 md:mb-0 pr-4">
        Favorite
      </h2>
      <hr />

      <ul>
        {props.favoriteProducts.map((i) => (
          <FavoriteItem
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
export default Favorite;
