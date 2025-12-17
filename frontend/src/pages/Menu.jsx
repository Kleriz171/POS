import MenuContainer from "../components/menu/MenuContainer";
import BackButton from "../components/shared/BackButton";
import { Utensils } from "lucide-react";
import CartInfo from "../components/menu/CartInfo";

const Menu = () => {

  return (
    <section className="bg-[#1f1f1f] flex gap-3 h-[calc(100vh-6.5rem)] overflow-hidden">
      {/* Left Div */}
      <div className="flex-3 ">
        <div className=" flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold">
              Menu
            </h1>
          </div>
          <div className=" flex items-center justify-around gap-4">
            <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer flex items-center gap-3">
              <Utensils className="stroke-white text-2xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-white text-l font-bold">
                  Customer Name
                </h1>
                <p className="text-[#929292fe] text-m">Table No: 2</p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>

      {/* Right */}
      <div className="flex-1 bg-[#1a1a1a] rounded-lg mt-4 mr-3 h-[calc(100%-6rem)] py-2">
        {/* Customer Info */}
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
        <hr className="border-[#333333] border-t-2" />
        {/* Cart Items */}
        <CartInfo />
        <CartInfo />
        {/* Bills */}
      </div>



    </section>
  );
};

export default Menu;