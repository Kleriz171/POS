import { useNavigate } from 'react-router-dom';
import { HandPlatter, Home, List, ListOrdered, MessageCircleMore, Table2 } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { setCustomer } from '../../redux/slices/customerSlice';

const BottomNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(1);
    const [name, setName] = useState()
    const [phone, setPhone] = useState()


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleCreateOrder = () => {
        //send data to store
        setIsModalOpen(false)
        dispatch(setCustomer({name, phone, guests: guestCount}))
        navigate("/tables")
    }

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around z-50'>
            <button
                onClick={() => navigate("/")}
                className='text-[#ababab] bg-[#343434] cursor-pointer w-[200px] rounded-[20px]'>
                <Home className='inline mr-4' size={30} /> Home
            </button>

            <button
                onClick={() => navigate("/orders")}
                className='text-[#ababab] cursor-pointer bg-[#343434] w-[200px] rounded-[20px]'>
                <List className='inline mr-4' size={30} />Orders
            </button>

            <button
                onClick={() => navigate("/tables")}
                className='text-[#ababab] bg-[#343434] cursor-pointer w-[200px] rounded-[20px]'>
                <HandPlatter className='inline mr-4' size={30} />Tables
            </button>

            <button
                onClick={() => navigate("/")}
                className='text-[#ababab] bg-[#343434] cursor-pointer w-[200px] rounded-[20px]'>
                <MessageCircleMore className='inline mr-4' size={30} />More
            </button>

            <button
                onClick={openModal}
                className='bg-[#f6b100] p-2 w-[60px] h-[60px] cursor-pointer rounded-full text-white absolute justify-center items-center bottom-3.5'>
                <ListOrdered size={30} className='ml-1' />
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="New Order">
                <div>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer name</label>
                    <div className='flex items-center rounded-lg py-3 px-4 bg-[#1f1f1f]'>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            name=''
                            id=''
                            placeholder='Enter customer name'
                            className=' bg-transparent flex-1 text-white focus:outline-none'
                        />
                    </div>
                </div>
                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer phone</label>
                    <div className='flex items-center rounded-lg py-3 px-4 bg-[#1f1f1f]'>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            type="text"
                            name=''
                            id=''
                            placeholder='+355 69 456 7890'
                            className=' bg-transparent flex-1 text-white focus:outline-none'
                        />
                    </div>
                </div>
                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Guest</label>
                    <div className='flex items-center justify-between rounded-lg py-3 px-4 bg-[#1f1f1f]'>
                        <button
                            onClick={() => setGuestCount(guestCount > 1 ? guestCount - 1 : 1)}
                            className='text-yellow-500 hover:text-yellow-800 text-2xl cursor-pointer'>&minus;</button>
                        <span className='text-white'>{guestCount} {guestCount === 1 ? "Person" : "People"}</span>
                        <button
                            onClick={() => setGuestCount(guestCount < 6 ? guestCount + 1 : 6)}
                            className='text-yellow-500 hover:text-yellow-800 text-2xl cursor-pointer'>+</button>
                    </div>
                </div>
                <button
                    onClick={handleCreateOrder}
                    className='w-full bg-yellow-500 text-[#f5f5f5] py-3 rounded-lg mt-6 hover:bg-yellow-800 cursor-pointer'>
                    Create Order
                </button>
            </Modal>

        </div>
    );
};

export default BottomNav;