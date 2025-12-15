import { Circle, CircleCheck } from "lucide-react";
import { menus } from "../../constants";
import { useState } from "react";

const MenuContainer = () => {
    const [selectedMenu, setSelectedMenu] = useState(menus[0]);
    const [counts, setCounts] = useState({});

    const increment = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    }
    const decrement = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0),
        }));
    }

    return (

        <div>
            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
                {
                    menus.map((menu) => {
                        return (
                            <div
                                key={menu.id}
                                className={`flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer 
                            ${menu.bgColor} hover:scale-105 transform transition-all duration-200`}
                                onClick={() => {setSelectedMenu(menu)
                                                setCounts({});
                                }}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-[#f5f5f5] text-lg font-semibold">
                                        {menu.icon} {menu.name}
                                    </h1>
                                    {selectedMenu?.id === menu.id ? <CircleCheck className="stroke-white text-2xl" /> : <Circle className="stroke-white text-2xl" />}
                                </div>
                                <p className="text-[#f5f5f5] text-sm font-semibold">
                                    {menu.items.length} Items
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="border-[#2a2a2a] border-t-2 mt-4" />

            <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
                {

                    selectedMenu.items.map((menu) => {
                        return (
                            <div
                                key={menu.id}
                                className={`flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer bg-[#1a1a1a]
                                hover:scale-105 transform transition-all duration-200 hover:bg-[#2a2a2a] z-20 `}
                            >
                                <h1 className="text-[#f5f5f5] text-lg font-semibold">{menu.name}</h1>
                                <div className="items-center flex justify-between w-full flex-row">
                                    <p className="text-[#f5f5f5] text-l font-bold">
                                        $ {menu.price}
                                    </p>
                                    <div className='flex items-center justify-between rounded-lg py-3 px-4 bg-[#1f1f1f] gap-6'>
                                        <button
                                            onClick={() => decrement(menu.id)}
                                            className='text-yellow-500 hover:text-yellow-800 text-2xl cursor-pointer'>&minus;</button>
                                        <span className='text-white'>{counts[menu.id] || 0}</span>
                                        <button
                                            onClick={() => increment(menu.id)}
                                            className='text-yellow-500 hover:text-yellow-800 text-2xl cursor-pointer'>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MenuContainer;