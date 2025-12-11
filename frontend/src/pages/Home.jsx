import { CircleDollarSign, PlayCircle } from "lucide-react";
import Greetings from "../components/shared/home/Greetings";
import MiniCard from "../components/shared/home/MiniCard";
import RecentOrders from "../components/shared/home/Orders";

export function Home() {
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-6.5rem)] overflow-hidden flex gap-3">
            {/* Left Div */}
            <div className="flex-3 ">
                <Greetings />
                <div className="flex items-center w-full gap-3 px-8 mt-8">
                    <MiniCard title="Total Earnings" icon={<CircleDollarSign />} number={512} footerNum={1.6} />
                    <MiniCard title="InProgress" icon={<PlayCircle />} number={16} footerNum={3.6} />
                </div>
                <RecentOrders />
            </div>

            {/* Right */}
            <div className="flex-2 bg-[#1a1a1a]">

            </div>



        </section>
    )
}