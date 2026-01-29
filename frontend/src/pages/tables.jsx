import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { useState } from "react";
import { tables } from "../constants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { enqueueSnackbar } from "notistack";


const Tables = () => {
    const [status, setStatus] = useState("all");

    const { data:resData, isError } = useQuery({
        queryKey: ["tables"],
        queryFn: async () =>{
            return await getTables()
        },
        placeholderData: keepPreviousData
    })

    if(isError) {
        enqueueSnackbar("Something went wrong!", {variant:Error})
    }

    console.log(resData)

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-6.5rem)] overflow-hidden">
            <div className=" flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold">Orders</h1>
                </div>
                <div className=" flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 
                    ${status === "all" && "bg-[#383838]"}
                    font-semibold cursor-pointer`}>
                        All</button>
                    <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 
                    ${status === "booked" && "bg-[#383838]"}
                    font-semibold cursor-pointer`}>
                        Booked</button>
                
                </div>
            </div>
            <div className="px-10 pt-4 pb-22 flex flex-wrap justify-around gap-4 overflow-y-auto scrollbar-hide h-[calc(100vh-11.5rem)] [&::-webkit-scrollbar]:hidden scroll-smooth">
                {
                    resData?.data.data.map((table) => {
                            return <TableCard id={table._id} name={table.tableNo} status={table.status} initial ={"AM"} seats={table.seats}  />;
                }
                )}
            </div> 
        </section>
    );
};

export default Tables;