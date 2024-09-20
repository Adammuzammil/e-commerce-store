import React from "react";
import Heading from "./Heading";
import ProductsItem from "./ProductsItem";

export const products = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Wireless Headphones",
    price: 99.99,
    bestseller: true,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Smartwatch",
    price: 199.99,
    bestseller: true,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bluetooth Speaker",
    price: 49.99,
    bestseller: true,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Gaming Mouse",
    price: 29.99,
    bestseller: true,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Mechanical Keyboard",
    price: 89.99,
    bestseller: true,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "4K Monitor",
    price: 349.99,
    bestseller: true,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Laptop Stand",
    price: 24.99,
    bestseller: false,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/914915/pexels-photo-914915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "USB-C Hub",
    price: 39.99,
    bestseller: false,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/845239/pexels-photo-845239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Portable Charger",
    price: 59.99,
    bestseller: false,
    category: "Electronics",
    subCategory: "Wireless",
  },
  {
    id: 10,
    image:
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Noise Cancelling Earbuds",
    price: 129.99,
    bestseller: false,
    category: "Electronics",
    subCategory: "Wireless",
  },
  // Men's Apparel
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Men's Denim Jacket",
    price: 149.99,
    bestseller: true,
    category: "Men",
    subCategory: "Summerwear",
  },
  {
    id: 12,
    image:
      "https://images.pexels.com/photos/2873041/pexels-photo-2873041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Men's Casual Shirt",
    price: 39.99,
    bestseller: false,
    category: "Men",
    subCategory: "Summerwear",
  },
  {
    id: 13,
    image:
      "https://images.pexels.com/photos/1804075/pexels-photo-1804075.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Men's Denim Jeans",
    price: 59.99,
    bestseller: true,
    category: "Men",
    subCategory: "Winterwear",
  },
  // Women's Apparel
  {
    id: 14,
    image:
      "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Women's Summer Dress",
    price: 79.99,
    bestseller: true,
    category: "Women",
    subCategory: "Summerwear",
  },
  {
    id: 15,
    image:
      "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Women's Handbag",
    price: 89.99,
    bestseller: false,
    category: "Women",
    subCategory: "Winterwear",
  },
  {
    id: 16,
    image:
      "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Women's Sportswear",
    price: 59.99,
    bestseller: true,
    category: "Women",
    subCategory: "Athleisure",
  },
  // Kids' Apparel
  {
    id: 17,
    image:
      "https://images.pexels.com/photos/5560492/pexels-photo-5560492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kids' T-Shirt",
    price: 19.99,
    bestseller: false,
    category: "Kids",
    subCategory: "Summerwear",
  },
  {
    id: 18,
    image:
      "https://images.pexels.com/photos/5560014/pexels-photo-5560014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kids' Jeans",
    price: 29.99,
    bestseller: true,
    category: "Kids",
    subCategory: "Summerwear",
  },
  {
    id: 19,
    image:
      "https://images.pexels.com/photos/3933876/pexels-photo-3933876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kids' Hoodie",
    price: 34.99,
    bestseller: true,
    category: "Kids",
    subCategory: "Winterwear",
  },
];

const LatestCollection = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Heading text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quis quaerat doloribus rem quam molestiae.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((item, i) => (
          <ProductsItem
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
