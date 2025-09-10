import axios from "axios";

const API_BASE_URL = "https://ec2-54-198-204-9.compute-1.amazonaws.com/:8081/api/products";  // Backend API URL

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;  // Return products array
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `https://ec2-54-198-204-9.compute-1.amazonaws.com/:8080/api/products/images/${imagePath}`;
};
