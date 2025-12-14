import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const BackButton = () => {

    const navigate = useNavigate();

  return (
    <div>
        <button onClick={()=> navigate(-1)} className="bg-blue-500 p-3 text-xl text-[#ffffff] rounded-xl hover:bg-blue-600 transition-colors mb-2">
            <ArrowLeft size={24}/> 
        </button>
    </div>
  );
};

export default BackButton;