
const MiniCard = ({ title, icon, number, footerNum }) => {
    return (
        <div className=" bg-[#1a1a1a] py-5 px-5 rounded-lg w-[49%]">
            <div className="flex items-start justify-between">
                <h1 className="text-#f5f5f5 text-lg font-semibold tracking-wide text-[#f5f5f5]">
                    {title}</h1>
                <button className={`${title === "Total Earnings" ? "bg-green-500" : "bg-yellow-500"} 
                rounded-lg p-3 text-[#f5f5f5] text-2xl`}>
                    {icon}</button>
            </div>
            <div>
                <h1 className="text-[#f5f5f5] text-4xl font-bold mt-5">{
                title === "Total Earnings" ? `$${number}` : number
                }</h1>
                <h1 className="text-[#f5f5f5] text-lg mt-2">{footerNum}% <span>than yesterday</span></h1>
            </div>
        </div>
    );
};

export default MiniCard;