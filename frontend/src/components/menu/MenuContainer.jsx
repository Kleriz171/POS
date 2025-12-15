import { Circle, CircleCheck } from "lucide-react";
import { menus } from "../../constants";
import { getRandomBg } from "../../utils/randombg";
import { useState } from "react";

const MenuContainer = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
  return (

    <div>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
            {
                menus.map((menu) =>{
                    return(
                        <div 
                        key={menu.id} 
                        className={`flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer  ${menu.bgColor} hover:scale-105 transform transition-all duration-200`}
                        onClick={()=>setSelectedMenu(menu.id)}
                        >
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                                    {menu.icon} {menu.name}
                                </h1>
                                {selectedMenu === menu.id ?<CircleCheck className="stroke-white text-2xl"/> : <Circle className="stroke-white text-2xl"/>}
                            </div>
                            <p className="text-[#ababab] text-sm font-semibold">
                                {menu.items.length} Items
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
};

export default MenuContainer;