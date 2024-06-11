import { useState } from 'react';
import { FaBell, FaTrash } from 'react-icons/fa';
import { TiEdit } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

export function Menu() {
    const [selectedItem, setSelectedItem] = useState('home');
    const navigate = useNavigate()

    const handleClick = (item) => {
        setSelectedItem(item);
        navigate(`/${item}`)
    };

    return (
        <div className='flex flex-col bg-gray-200 w-menu h-menu'>
            <div 
                className={`flex items-center w-64 h-12 pl-2 rounded-t-lg cursor-pointer ${selectedItem === 'home' ? 'bg-orange-100 shadow-md' : ''}`} 
                onClick={() => handleClick('home')}
            >
                <TiEdit className="mr-2" />
                <h2>Notes</h2>
            </div>
            <div 
                className={`flex items-center w-64 h-12 pl-2 rounded-t-lg cursor-pointer ${selectedItem === 'reminder' ? 'bg-orange-100 shadow-md' : ''}`} 
                onClick={() => handleClick('reminder')}
            >
                <FaBell className="mr-2" />
                <h2>Reminders</h2>
            </div>
            <div 
                className={`flex items-center w-64 h-12 pl-2 rounded-t-lg cursor-pointer ${selectedItem === 'trash' ? 'bg-orange-100 shadow-md' : ''}`} 
                onClick={() => handleClick('trash')}
            >
                <FaTrash className="mr-2" />
                <h2>Trash</h2>
            </div>
        </div>
    );
}
