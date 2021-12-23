export class Rating {
  rate: number;
  count: number;
  constructor(rate: number, count: number) {
    this.rate = rate;
    this.count = count;
  }
}
class Basket {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;

  constructor(
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
  ) {
    this.id = Math.random();
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}
export default Basket;
