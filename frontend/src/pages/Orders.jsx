import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton"
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getOrders } from "../https";
import { enqueueSnackbar } from "notistack"

function Orders() {
    const [status, setStatus] = useState("all");

    const { data: resData, isError } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            return await getOrders()
        },
        placeholderData: keepPreviousData
    })

    if (isError) {
        enqueueSnackbar("Something went wrong!", { variant: "error" })
    }

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-6.5rem)] overflow-hidden">
            <div className=" flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold">Orders</h1>
                </div>
                <div className=" flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "all" && "bg-[#383838]"}
                    font-semibold cursor-pointer`}>
                        All</button>
                    <button onClick={() => setStatus("inProgress")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "inProgress" && "bg-[#383838]"}
                    font-semibold cursor-pointer`}>
                        In Progress</button>
                    <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "ready" && "bg-[#383838]"}
                    font-semibold cursor-pointer`}>
                        Ready</button>
                    <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 ${status === "completed" && "bg-[#383838]"}
                    font-semibold cursor-pointer`}>
                        Completed</button>

                </div>
            </div>
            <div className="px-10 pt-4 pb-22 flex flex-wrap gap-4 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden scroll-smooth ">
                {
                    resData?.data.data.length > 0 ? (
                        resData.data.data.map((order) => {
                            return <OrderCard key={order._id} order={order} />
                        })):<p className="col-span-3 text bg-gray-500">No Orders available</p>
                }
            </div>
        </section>
    )
}

export default Orders;