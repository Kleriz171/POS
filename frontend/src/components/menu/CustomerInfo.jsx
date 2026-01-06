import { useSelector } from "react-redux";
import { getAvatarName, formatDate, formatTime } from "../../utils/randombg";
import { useState, useEffect } from "react";

const CustomerInfo = () => {

    const [dateTime, setDateTime] = useState(new Date())
    const customerData = useSelector((state) => state.customer)

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-[#f5f5f5] text-l font-bold">
                    {customerData.customerName || "Customer Name"}
                </h1>
                <p className="text-[#ababab] text-m">#{customerData.orderId || "N/A"} / Dine in</p>
                <p className="text-[#ababab] text-sm">
                    {formatTime(dateTime)} / {formatDate(dateTime)}
                </p>
            </div>
            <div>
                <button className="bg-[#f6b100] text-black text-2xl font-bold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                    {getAvatarName(customerData.customerName) || "CN"}
                </button>
            </div>
        </div>
    );
};

export default CustomerInfo;