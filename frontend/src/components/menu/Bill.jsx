
const Bill = () => {
    return (
        <section className="mt-auto">
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items (4)</p>
                <h1 className="text-[#f5f5f5] font-bold">$240</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax(10%)</p>
                <h1 className="text-[#f5f5f5] font-bold">$24</h1>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#1f1f1f] w-full text-[#ababab] px-4 py-3 rounded-lg font-semibold cursor-pointer">
                    Cash
                </button>
                <button className="bg-[#1f1f1f] w-full text-[#ababab] px-4 py-3 rounded-lg font-semibold cursor-pointer">
                    Online
                </button>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] w-full text-[#f5f5f5] px-4 py-3 rounded-lg font-semibold cursor-pointer text-lg">
                    Print receipt
                </button>
                <button className="bg-[#f6b100] w-full text-[#1f1f1f] px-4 py-3 rounded-lg font-semibold cursor-pointer text-lg">
                    Place Order
                </button>
            </div>
        </section>
    );
};

export default Bill;