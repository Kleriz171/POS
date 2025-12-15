import MenuContainer from "../components/menu/MenuContainer";
import BackButton from "../components/shared/BackButton";
import {  Utensils } from "lucide-react";

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
      <div className="flex-1 bg-red-600">
      </div>



    </section>
  );
};

export default Menu;