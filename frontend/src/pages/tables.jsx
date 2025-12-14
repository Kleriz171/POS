import BackButton from "../components/shared/BackButton";


const Tables = () => {
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-6.5rem)] overflow-hidden">
            <div className=" flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold">Tables</h1>
                </div>
            </div>
            </section>
    );
};

export default Tables;