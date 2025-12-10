import { UtensilsCrossed, Search, Bell, User } from "lucide-react"

const Header = () => {
    return (

        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <UtensilsCrossed className="stroke-white w-6 h-6" />
                <h1 className="text-white text-xl">POS</h1>
            </div>
            {/* Search */}
            <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]">
                <Search className="stroke-white w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-[#1f1f1f] w-full outline-none text-[#f5f5f5]"
                />
            </div>
            {/* User Profile */}
            <div className="flex items-center gap-4">
                <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                    <Bell className="stroke-white text-2xl" />
                </div >
                <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer flex items-center gap-3">
                    <User className="stroke-white text-2xl" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-white text-l font-bold">Kleris Biba</h1>
                        <p className="text-[#929292fe] text-m">Admin</p>
                    </div>
                </div>
            </div>
        </header>

    )

}

export default Header
