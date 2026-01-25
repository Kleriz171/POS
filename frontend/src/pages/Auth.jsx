import restaurant from "../assets/images/restaurant.jpg"
import logo from "../assets/images/logo.png"
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { useState } from "react";


function Auth() {

    const [isRegister, setIsRegister] = useState(true)

    const handleClick = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className="flex min-h-screen w-full">
            {/* Left section */}
            <div
                className="hidden md:flex w-3/4 relative items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${restaurant})` }}
            >
                <div className="absolute inset-0 bg-black/80 z-10"></div>

                <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white z-20">
                    "There is no love sincerer than the love of food"
                    <span className="block mt-4 text-yellow-400">
                        - Founder of Restaurant
                    </span>
                </blockquote>
            </div>

            {/* Right section */}
            <div className="w-1/4 min-h-screen bg-[#1a1a1a] p-10">
                <div className="flex flex-col items-center gap-2">
                    <img src={logo} alt="Resto Logo" className="h-14 w-14 border-2 rounded-full p-1" />
                    <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
                </div>
                <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
                    {isRegister ? "Employee Sign In" : "Employee Registration"}
                </h2>

                {isRegister ? <Login /> : <Register setIsRegister={setIsRegister} />}


                <div className="flex justify-center mt-6">
                    <p className="text-sm text-[#ababab]">
                        {isRegister ? "Don't have an account? " : "Already have an account? "}
                        <span
                            className="pl-1 text-yellow-400 font-semibold hover:underline cursor-pointer"
                            onClick={handleClick}
                        >
                            {isRegister ? "Sign up" : "Sign in"}
                        </span>
                    </p>
                </div>
            </div>
        </div>)
}
export default Auth;

