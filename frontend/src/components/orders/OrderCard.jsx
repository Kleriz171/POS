import { Check } from "lucide-react";
import { getAvatarName } from "../../utils/randombg"
import { FaCircle } from "react-icons/fa"

const OrderCard = ({ key, order }) => {
    console.log(order)
    const d = new Date(order.createdAt)
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    const formatted = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} at ${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return (
        <div className="w-[32%] mb-3 bg-[#262626] rounded-lg p-6">
            <div className="flex items-center gap-5 ">
                <button className="bg-yellow-500 p-3 text-xl font-bold rounded-lg">
                    {getAvatarName(order.customerDetails.name)}
                </button>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                            {order.customerDetails.name}
                        </h1>
                        <p className="text-[#ababab] text-sm"> #{Math.floor(new Date(order.orderDate))}/ Dine in</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ">
                        {
                            order.orderStatus === "Ready" ? (
                                <>
                                    <p className="text-green-600 bg-[#1a2e1a] px-3 py-1 rounded-lg text-sm font-semibold">
                                        <Check className="inline mr-2" /> {order.orderStatus}
                                    </p>
                                    <p className="text-[#ababab] text-sm">
                                        <FaCircle className="inline mr-2 text-green-600" />Your order is ready
                                    </p>
                                </>
                            ) :
                                (
                                    <>
                                        <p className="text-yellow-600 bg-[#4a452e] px-3 py-1 rounded-lg text-sm font-semibold">
                                            <Check className="inline mr-2" /> {order.orderStatus}
                                        </p>
                                        <p className="text-[#ababab] text-sm">
                                            <FaCircle className="inline mr-2 text-yellow-600" />Preparing your order
                                        </p>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-[#ababab]">
                <p>{formatted}</p>
                <p>{order.items.length} Items</p>
            </div>
            <hr className="w-full mt-4 border-t-2 border-gray-500 text-[#f5f5f5]" />
            <div className="flex justify-between items-center mt-4">
                <h1 className="text-[#f5f5f5] text-xl font-bold">Total</h1>
                <p className="text-[#f5f5f5] text-lg font-semibold">${order.bills.totalWithTax}</p>
            </div>
        </div>
    );
};

export default OrderCard;