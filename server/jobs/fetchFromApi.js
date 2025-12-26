import axios from "axios";

const fetchFromApi = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products"
  );

  return response.data.map((item) => ({
    title: item.title,
    image: item.image,
    price: Math.round(item.price * 80), // USD → INR approx
    originalPrice: Math.round(item.price * 100),
    category: item.category,
    affiliateLink: "https://amzn.to/45eWBom",
    platform: "Amazon",
  }));
};

export default fetchFromApi;
