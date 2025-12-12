import { popularDishes } from "../../constants";

const PopularDishes = () => {
    return (
        <div className="pr-6 mt-6">
            <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
                
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                        Popular Dishes
                    </h1>
                    <a href="" className="text-[#025cca] text-sm font-semibold">
                        View all
                    </a>
                </div>

                <div className="px-6 space-y-3 overflow-y-scroll 
                                [&::-webkit-scrollbar]:hidden
                                [scrollbar-width:'none']
                                [-ms-overflow-style:'none']
                                h-[370px]">

                    {popularDishes.map((dish) => (
                        <div
                            key={dish.id}
                            className="flex justify-between items-center bg-[#1f1f1f] rounded-lg px-4 py-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-12 h-12 rounded-lg"
                                />
                                <h1 className="text-[#f5f5f5] font-semibold">{dish.name}</h1>
                            </div>

                            <span className="text-[#f5f5f5] text-sm">
                                {dish.numberOfOrders}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularDishes;
