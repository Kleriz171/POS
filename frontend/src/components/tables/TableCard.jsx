import { getRandomBg } from "../../utils/randombg";
import { useNavigate } from "react-router-dom";

const TableCard = ( { id, name, status, initial, seats }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (status === "Available") {
      navigate(`/menu`);
    }
  }


  return (
    <div
    onClick={handleClick}
    key={id} 
    className="w-[19%] mb-3 bg-[#262626] rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">
          {name}
        </h1>
        <p className={`${status==="Available" ? "text-green-600 bg-[#1a2e1a] px-3 py-1 rounded-lg text-sm font-semibold":
          status==="Booked" && "text-orange-300 bg-orange-900 px-3 py-1 rounded-lg text-sm font-semibold"}
        `}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-between my-4">
        <h1 className={`${getRandomBg()} text-white rounded-full p-5 text-xl font-bold`}>
          {initial}
        </h1>
        <p className="px-3 pt-12 rounded-lg text-m font-semibold text-[#f5f5f5] ">Seats: {seats}</p>
      </div>
    </div>
  );
};

export default TableCard;