import React, { useState, useEffect } from "react";
import Product from "./models/product";
import BasketModel, { Rating } from "./models/basket";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [basketProducts, setBasketProducts] = useState<BasketModel[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [searchProduct, setSearchProduct] = useState<Product[]>([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const onAddBasketHandler = (
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rate: number,
    count: number
  ) => {
    const newRating = new Rating(rate, count);
    const newBasketProduct = new BasketModel(
      title,
      price,
      description,
      category,
      image,
      newRating
    );

    setBasketProducts((prevProds) => {
      return prevProds.concat(newBasketProduct);
    });
  };
  const onAddFavoriteHandler = (productId: number) => {
    const editProduct: Product[] = products.filter(
      (item) => item.id === productId
    );

    const value = favoriteProducts.includes(editProduct[0]);

    if (value === false) {
      setFavoriteProducts((prevProd) => {
        return [editProduct[0], ...prevProd];
      });
    } else {
      return;
    }
  };
  const onSubmitHandler = (enteredTitle: string) => {
    const editProduct: Product[] = products.filter(
      (item) => item.title === enteredTitle
    );

    setSearchProduct((prevProd) => {
      return [editProduct[0], ...prevProd];
    });
  };
  return (
    <div className="h-full">
      <Header />
      <div className=" flex justify-between">
        <Search
          onSubmitHandler={onSubmitHandler}
          searchProduct={searchProduct}
          onAddBasketHandler={onAddBasketHandler}
        />

        <Basket basketProducts={basketProducts} />
      </div>
      <div className=" flex justify-between">
        <Products
          onAddBasketHandler={onAddBasketHandler}
          products={products}
          onAddFavoriteHandler={onAddFavoriteHandler}
        />

        <Favorite favoriteProducts={favoriteProducts} />
      </div>
    </div>
  );
}

export default App;
