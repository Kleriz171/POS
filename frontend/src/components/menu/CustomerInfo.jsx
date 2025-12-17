

const CustomerInfo = () => {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex flex-col items-start">
                <h1 className="text-[#f5f5f5] text-l font-bold">
                    Customer Name
                </h1>
                <p className="text-[#ababab] text-m">Table No: 2</p>
            </div>
            <div>
                <button className="bg-[#f6b100] text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                    Clear Table
                </button>
            </div>
        </div>
    );
};

export default CustomerInfo;