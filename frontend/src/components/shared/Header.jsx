import { UtensilsCrossed, Search, Bell, User } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { LogOutIcon } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import { logout } from "../../https"
import { removeUser } from "../../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { MdDashboard } from "react-icons/md"

const Header = () => {


    const navigate = useNavigate()
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    const logoutMutation = useMutation({
        mutationFn: () => logout(),
        onSuccess: (data) => {
            console.log(data)
            dispatch(removeUser())
            navigate("/auth")
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleLogout = () => {
        logoutMutation.mutate()
    }
    return (

        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <UtensilsCrossed className="stroke-white w-6 h-6" />
                <h1 className="text-white text-xl">POS</h1>
            </div>
            {/* Search */}
            <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-125">
                <Search className="stroke-white w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-[#1f1f1f] w-full outline-none text-[#f5f5f5]"
                />
            </div>
            {/* User Profile */}
            <div className="flex items-center gap-4">
                {userData.role === "Admin" && (
                    <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                        <MdDashboard onClick={() => navigate("/dashboard")} className="text-white text-2xl" />
                    </div >)}
                <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                    <Bell className="text-white text-2xl" />
                </div >
                <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer flex items-center gap-3">
                    <User className="stroke-white text-2xl" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-white text-l font-bold">{userData.name || "N/A"}</h1>
                        <p className="text-[#929292fe] text-m">{userData.role || "N/A"}</p>
                    </div>
                    <LogOutIcon className="text-[#f5f5f5] text-l font-bold" onClick={handleLogout} size={30} />
                </div>
            </div>
        </header>

    )

}

export default Header
