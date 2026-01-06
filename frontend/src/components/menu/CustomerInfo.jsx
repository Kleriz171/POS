import { useSelector } from "react-redux";
import { getAvatarName } from "../../utils/randombg";

const CustomerInfo = () => {

    const customerData = useSelector((state)=> state.customer)

    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-[#f5f5f5] text-l font-bold">
                    {customerData.customerName}
                </h1>
                <p className="text-[#ababab] text-m">Table No: 2</p>
            </div>
            <div>
                <button className="bg-[#f6b100] text-black text-2xl font-bold px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                    {getAvatarName(customerData.customerName)}
                </button>
            </div>
        </div>
    );
};

export default CustomerInfo;