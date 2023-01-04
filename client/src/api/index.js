import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
//BEDDING
export const fetchProduct = (id) => API.get(`/bedding/${id}`);
export const fetchProducts = (page) => API.get(`/bedding?page=${page}`);
// export const fetchProductsBySearch = (searchQuery) => API.get(`/bedding/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createProduct = (newProduct) => API.post("/bedding", newProduct);
export const updateProduct = (id, updatedProduct) =>
  API.patch(`/bedding/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/bedding/${id}`);

// AUTH
export const login = (formdata) => API.post("/auth/login", formdata);
export const register = (formdata) => API.post("/auth/register", formdata);

// USER
export const fetchUser = (id) => API.get(`/user/${id}`);
export const fetchUsers = (id) => API.get(`/user`);
export const fetchStatsUser = (id) => API.get(`/user/stats`);
export const updateUser = (id, updatedUser) =>
  API.put(`/user/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/user/${id}`);

// CART
export const fetchAllCart = () => API.get(`/cart`);
export const fetchCart = (id) => API.get(`/cart/find/${id}`);
export const createCart = (newCart) => API.post("/cart", newCart);
export const updateCart = (id, updatedCart) =>
  API.put(`/cart/${id}`, updatedCart);
export const deleteCart = (id) => API.delete(`/cart/${id}`);

// ORDER
export const fetchAllOrder = () => API.get(`/order`);
export const fetchOrderById = (id) => API.get(`/order/${id}`);
export const fetchUserOrders = () => API.get(`/order}`);
export const createOrder = (newOrder) => API.post("/order", newOrder);
export const updateOrder = (id, updatedOrder) =>
  API.put(`/order/${id}`, updatedOrder);
export const updateOrderToDelivered = (id) => API.put(`/order/${id}/deliver`);
export const updateOrderToPaid = (id) => API.put(`/order/${id}/pay`);
export const deleteOrder = (id) => API.delete(`/order/${id}`);
