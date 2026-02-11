import axios from "axios"
import { data } from "react-router-dom"

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

//api 

//auth
export const login = (data) =>api.post("/api/user/login", data)
export const register = (data) =>api.post("/api/user/register", data)
export const getUserData = () =>api.get("/api/user/")
export const logout = () => api.post("/api/user/logout")

//table
export const addTable = (data) => api.post("/api/table/", data)
export const getTables = () =>api.get("/api/table")
export const updateTable = ({id, ...tableData}) => api.patch(`/api/table/${id}`, tableData)

//Order 
export const addOrder = (data) =>api.post("/api/orders", data)
export const getOrders = () =>api.get("/api/orders")
export const getOrderById = (id) =>api.get(`/api/orders/${id}`)
export const updateOrderStatus = ({orderId, orderStatus}) =>api.patch(`/api/orders/${orderId}`, {orderStatus})

