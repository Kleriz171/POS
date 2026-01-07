import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../../redux/slices/cartSlice";
import { useEffect, useRef } from "react";

const CartInfo = () => {
    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"
            })
        }
    }, [cartData])

    const handleRemove = (itemId) => {
        dispatch(removeItems(itemId));
    };

    return (
        <div className="px-4 py-2 h-[55%]">
            <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide pb-2">
                Order Details
            </h1>

            {cartData.length === 0 ? (
                <p className="text-[#ababab] text-sm flex justify-center pt-[40%]">
                    Your Cart is Empty. Start Adding items
                </p>
            ) : (
                <div className="overflow-y-scroll scroll-smooth [&::-webkit-scrollbar]:hidden h-[90%] flex flex-col gap-4" ref={scrollRef}>
                    {cartData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1f1f1f] rounded-lg px-4 py-4"
                        >
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#ababab] font-semibold tracking-wide">
                                    {item.name}
                                </h1>
                                <p className="text-[#ababab] font-semibold">
                                    ${item.pricePerItem} x{item.quantity}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3">
                                    <RiDeleteBin2Fill
                                        className="text-[#ababab] cursor-pointer"
                                        size={20}
                                        onClick={() => handleRemove(item.id)}
                                    />
                                    <FaNotesMedical
                                        className="text-[#ababab] cursor-pointer"
                                        size={20}
                                    />
                                </div>

                                <p className="text-[#f5f5f5] font-bold">
                                    ${item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartInfo;
