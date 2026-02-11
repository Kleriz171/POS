import { Check } from "lucide-react";
import { FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/randombg";

const OrderList = ({key, order}) => {
    return (
        <div className="flex items-center gap-5 mb-2">
            <button className="bg-yellow-500 p-3 text-xl font-bold rounded-lg">
                {getAvatarName(order.customerDetails.name)}
            </button>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className=" text-[#f5f5f5] text-lg font-semibold tracking-wide">
                        {order.customerDetails.name}</h1>
                    <p className="text-[#ababab] text-sm">{order.items.length} items</p>
                </div>
                <div>
                    <h1 className="text-yellow-500 font-semibold border border-yellow-500 rounded-lg p-2">Table No:{order.table.tableNo}</h1>
                </div>
                <div className={`${order.orderStatus === "In Progress"?"text-yellow-600 bg bg-[#85500a3c]": "text-green-500 bg-[#1e5511]"} p-1 rounded-lg inline flex-col items-start gap-2`}>
                        <FaCircle className={` mr-2 ${order.orderStatus === "In Progress"?"text-yellow-600]": "text-green-500"}  inline`} />
                        {order.orderStatus}
                </div>
            </div>
        </div>
    );
};

export default OrderList;