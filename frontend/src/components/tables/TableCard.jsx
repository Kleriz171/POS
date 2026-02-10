import { useDispatch } from "react-redux";
import { getRandomBg } from "../../utils/randombg";
import { useNavigate } from "react-router-dom";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa"
import { getAvatarName } from "../../utils/randombg";

const TableCard = ({ id, name, status, initial, seats }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (name) => {
    if (status === "Booked") {
      return
    }
    const table = { tableId: id, tableNo: name }
    dispatch(updateTable({ table }))
    navigate(`/menu`);
  }

  return (
    <div
      onClick={() => handleClick(name)}
      key={id}
      className="w-[19%] mb-3 bg-[#262626] rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">
          Table <FaLongArrowAltRight className="inline" /> {name}
        </h1>
        <p className={`${status === "Available" ? "text-green-600 bg-[#1a2e1a] px-3 py-1 rounded-lg text-sm font-semibold" :
          status === "Booked" && "text-orange-300 bg-orange-900 px-3 py-1 rounded-lg text-sm font-semibold"}
        `}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-between my-4">
        <h1
          className={`${initial ? getRandomBg() : "bg-[#1f1f1f]"
            } text-white rounded-full p-5 text-xl font-bold`}
        >
          {getAvatarName(initial) || "N/A"}
        </h1>

        <p className="px-3 pt-12 rounded-lg text-m font-semibold text-[#f5f5f5] ">Seats: {seats}</p>
      </div>
    </div>
  );
};

export default TableCard;