import Greetings from "../components/shared/home/Greetings";

export function Home (){
    return(
    <section className="bg-[#1f1f1f] h-[calc(100vh-6.5rem)] overflow-hidden flex gap-3">
        {/* Left Div */}
        <div className="flex-3 bg-[#1a1a1a]">
            <Greetings />
        </div>

        {/* Right */}
        <div className="flex-2 bg-[#1a1a1a]">

        </div>


        
    </section>    
    )
}