import { useState } from "react";
export default function Home(){

    const [ product, setProduct ] = useState([
        {
            id: 1,
            product_name: "T-Shirt",
            product_description: "A basic cotton t-shirt for casual wear.",
            product_image: "https://picsum.photos/200/300",
            product_price: "$15",
            category: "Clothing"
          },
          {
            id: 2,
            product_name: "Sneakers",
            product_description: "Comfortable sneakers perfect for daily activities.",
            product_image: "https://picsum.photos/201/300",
            product_price: "$60",
            category: "Footwear"
          },
          {
            id: 3,
            product_name: "Jeans",
            product_description: "Stylish denim jeans for all-day comfort.",
            product_image: "https://picsum.photos/202/300",
            product_price: "$40",
            category: "Clothing"
          },
          {
            id: 4,
            product_name: "Jacket",
            product_description: "A trendy jacket for cooler weather.",
            product_image: "https://picsum.photos/203/300",
            product_price: "$75",
            category: "Clothing"
          },
          {
            id: 5,
            product_name: "Watch",
            product_description: "A sleek, modern watch for daily use.",
            product_image: "https://picsum.photos/204/300",
            product_price: "$120",
            category: "Accessories"
          },
          {
            id: 6,
            product_name: "Boots",
            product_description: "Durable boots for outdoor adventures.",
            product_image: "https://picsum.photos/205/300",
            product_price: "$90",
            category: "Footwear"
          },
          {
            id: 7,
            product_name: "Hat",
            product_description: "A stylish hat for sun protection and fashion.",
            product_image: "https://picsum.photos/206/300",
            product_price: "$25",
            category: "Accessories"
          },
          {
            id: 8,
            product_name: "Shirt",
            product_description: "A formal shirt for office or special occasions.",
            product_image: "https://picsum.photos/207/300",
            product_price: "$45",
            category: "Clothing"
          },
          {
            id: 9,
            product_name: "Sunglasses",
            product_description: "Protective sunglasses with UV protection.",
            product_image: "https://picsum.photos/208/300",
            product_price: "$30",
            category: "Accessories"
          },
          {
            id: 10,
            product_name: "Scarf",
            product_description: "A warm scarf for chilly weather.",
            product_image: "https://picsum.photos/209/300",
            product_price: "$20",
            category: "Accessories"
          },
          {
            id: 11,
            product_name: "Belt",
            product_description: "A leather belt for formal and casual outfits.",
            product_image: "https://picsum.photos/210/300",
            product_price: "$35",
            category: "Accessories"
          }
    ]);

    return (
        <div className="mx-60 mt-5">

            <div className="h-full flex flex-col gap-9">
                <div className="h-96 w-full bg-blue-100 overflow-hidden">
                    <img src="/hero.jpg" className="h-full w-full object-cover" />
                </div>

                <div className="h-96 py-4 flex gap-7 overflow-x-auto overflow-y-hidden">
                    {
                        product.map((prod) => {
                            return (
                                <div className="h-full min-w-72 flex flex-col" key={prod.id}>
                                    <div className="border-1 h-[80%] w-full bg-pink-700 overflow-hidden">
                                        <img src={prod.product_image} alt="product sample" className="object-cover w-full"/>
                                    </div>
                                    <div className="border-1 py-2">
                                        <div>
                                            {prod.product_name}
                                        </div>

                                        <div>
                                            {prod.product_price}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
