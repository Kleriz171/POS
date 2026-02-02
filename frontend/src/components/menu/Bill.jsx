import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { useState } from "react";
import {enqueueSnackbar} from "notistack"

const Bill = () => {

    const cartData = useSelector(state =>state.cart)
    const total = useSelector(getTotalPrice)
    const taxRate = 5;
    const tax = (total * taxRate) /100
    const totalAfterTax = total + tax

    const [paymentMethod, setPaymentMethod] = useState()

    const handlePlaceOrder = async () =>{
        if(!paymentMethod){
            enqueueSnackbar("Please select a payment method!", {variant:"warning"})

            return
        }
    }

    return (
        <section className="mt-auto">
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items ({cartData.length})</p>
                <h1 className="text-[#f5f5f5] font-bold">${total}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax({taxRate}%)</p>
                <h2 className="text-[#f5f5f5] font-bold">${tax}</h2>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Total after tax</p>
                <h1 className="text-[#f5f5f5] font-bold">${totalAfterTax}</h1>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button 
                onClick={() => setPaymentMethod("Cash")} 
                className={`bg-[#1f1f1f] w-full text-[#ababab] px-4 py-3 rounded-lg font-semibold cursor-pointer ${paymentMethod === "Cash" && "bg-[#383737]"}`}>
                    Cash
                </button>
                <button 
                onClick={() => setPaymentMethod("Online")} 
                className={`bg-[#1f1f1f] w-full text-[#ababab] px-4 py-3 rounded-lg font-semibold cursor-pointer ${paymentMethod === "Online" && "bg-[#383737]"}`}>
                    Online
                </button>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] w-full text-[#f5f5f5] px-4 py-3 rounded-lg font-semibold cursor-pointer text-lg">
                    Print receipt
                </button>
                <button 
                onClick={handlePlaceOrder}
                className="bg-[#f6b100] w-full text-[#1f1f1f] px-4 py-3 rounded-lg font-semibold cursor-pointer text-lg">
                    Place Order
                </button>
            </div>
        </section>
    );
};

export default Bill;