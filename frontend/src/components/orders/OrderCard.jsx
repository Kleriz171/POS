import { Check } from "lucide-react";

const OrderCard = () => {
    return (
        <div className="w-[32%] mb-3 bg-[#262626] rounded-lg p-6">
            <div className="flex items-center gap-5 ">
                <button className="bg-yellow-500 p-3 text-xl font-bold rounded-lg">
                    AM
                </button>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start gap-1">
                        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                            Amrit Raj
                        </h1>
                        <p className="text-[#ababab] text-sm"> #101/ Dine in</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ">
                        <p className="text-green-600 bg-[#1a2e1a] px-3 py-1 rounded-lg text-sm font-semibold">
                            <Check className="inline mr-2" /> Ready
                        </p>
                        <p className="text-[#ababab] text-sm">
                            <button className="inline h-[15px] w-[15px] border-r-[50%] rounded-lg bg-green-600 mr-2" /> Ready to serve
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-[#ababab]">
                <p>December 13, 2025 05:15PM</p>
                <p>8 Items</p>
            </div>
            <hr className="w-full mt-4 border-t-2 border-gray-500 text-[#f5f5f5]"/>
            <div flex className="flex justify-between items-center mt-4">
                <h1 className="text-[#f5f5f5] text-xl font-bold">Total</h1>
                <p className="text-[#f5f5f5] text-lg font-semibold">$120</p>
            </div>
        </div>
    );
};

export default OrderCard;