
import { HandPlatter, Home, List, ListOrdered, MessageCircleMore, Table2 } from 'lucide-react';

const BottomNav = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
            <button className='text-[#ababab] bg-[#343434] w-[200px] rounded-[20px]'>
                <Home className='inline mr-4' size={30} /> Home</button>
            <button className='text-[#ababab] bg-[#343434] w-[200px] rounded-[20px]'>
                <List className='inline mr-4' size={30} />Orders</button>
            <button className='text-[#ababab] bg-[#343434] w-[200px] rounded-[20px]'>
                <HandPlatter className='inline mr-4' size={30} />Tables</button>
            <button className='text-[#ababab] bg-[#343434] w-[200px] rounded-[20px]'>
                <MessageCircleMore className='inline mr-4' size={30} />More</button>
            <button className='bg-[#f6b100] p-2 w-[60px] h-[60px] rounded-full text-white absolute justify-center items-center bottom-3.5'>
                <ListOrdered size={30}/>
            </button>
             
        </div>
    );
};

export default BottomNav;