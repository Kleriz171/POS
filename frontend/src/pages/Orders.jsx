import OrderCard from "../components/orders/OrderCard";

export function Orders() {
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-6.5rem)] overflow-hidden">
            <div className=" flex items-center justify-between px-10 py-4">
                <h1 className="text-[#f5f5f5] text-2xl font-bold">Orders</h1>
                <div className=" flex items-center justify-around gap-4">
                    <button className="text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer">
                        All</button>
                    <button className="text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold bg-[#383838] cursor-pointer">
                        In Progress</button>
                    <button className="text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer">
                        Ready</button>
                    <button className="text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer">
                        Completed</button>
                </div>
            </div>
            <div className="px-10 py-4 flex flex-wrap gap-4 overflow-y-auto scrollbar-hide h-[calc(100vh-11.5rem)] [&::-webkit-scrollbar]:hidden scroll-smooth">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </section>
    )
}