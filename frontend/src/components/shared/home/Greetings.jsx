import { useEffect, useState } from "react";

const Greeting = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) =>{
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    }

    const formatTime = (date) => 
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    
  return (
    <div className="flex justify-between items-center px-8 mt-5">
        <div>
            <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">Good Morning, Kleris</h1>
            <p className="text-[#ababab]">Give your best services to the costumers😊</p>
        </div>
        <div className="">
            <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">{formatTime(currentTime)}</h1>
            <p className="text-[#ababab] text-sm">{formatDate(currentTime)}</p>
        </div>
    </div>
  );
};

export default Greeting;