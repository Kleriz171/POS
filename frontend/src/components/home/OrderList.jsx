import { Check } from "lucide-react";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
    return (
        <div className="flex items-center gap-5 mb-2">
            <button className="bg-yellow-500 p-3 text-xl font-bold rounded-lg">
                AM
            </button>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className=" text-[#f5f5f5] text-lg font-semibold tracking-wide">
                        Kleris Biba</h1>
                    <p className="text-[#ababab] text-sm">8 items</p>
                </div>
                <div>
                    <h1 className="text-yellow-500 font-semibold border border-yellow-500 rounded-lg p-2">Table No:3</h1>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <p className="px-4 text-green-600"><Check className="inline mr-2 " /> Ready</p>
                    <p className="text-[#ababab] text-sm">
                        <FaCircle className=" mr-2 text-green-600 inline" />
                        Ready to serve</p>
                </div>
            </div>
        </div>
    );
};

export default OrderList;