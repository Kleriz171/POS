import { Import, Search } from "lucide-react";
import OrderList from "./OrderList";
import {useQuery, keepPreviousData} from "@tanstack/react-query"
import {enqueueSnackbar} from "notistack"
import {getOrders} from "../../https/index"

const RecentOrders = () => {
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
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-112.5 rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders</h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View all</a>
        </div>

        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-2 mx-8">
          <Search className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
          />
        </div>
        {/* OrderList */}
        <div className="mt-4 px-6 overflow-y-scroll h-75 [&::-webkit-scrollbar]:hidden">
          
                          {
                    resData?.data.data.length > 0 ? (
                        resData.data.data.map((order) => {
                            return <OrderList  key={order._id} order={order} />
                        })):<p className="col-span-3 text bg-gray-500">No Orders available</p>
                }
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;