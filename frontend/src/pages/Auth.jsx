import restaurant from "../assets/images/restaurant.jpg"


function Auth() {
    return (
        <div className="flex min-h-screen w-full">
            {/* Left section */}
            <div className="w-1/2 relative flex items-center justify-center bg-cover">
                <img src={restaurant} alt="Restaurant image" />

                <div className="absolute inset-0 bg-black bg-opacity-80"></div>

                <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
                    "There is no love sincerer than the love of food"
                    <br />
                    <span className="block mt-4 text-yellow-400">
                        -Founder of Restaurant
                    </span>
                </blockquote>
            </div>
        </div>)
}
export default Auth;