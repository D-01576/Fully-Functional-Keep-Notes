import React, { useState } from 'react';
import { FaBell, FaTrash } from 'react-icons/fa';
import { TiEdit } from 'react-icons/ti';

export function Menu() {
    const [selectedItem, setSelectedItem] = useState('edit'); // Default selected item is 'edit'

    const handleClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='flex flex-col bg-gray-200 w-80 h-screen'>
            <div 
                className={`flex items-center w-64 h-12 pl-2 rounded-t-lg cursor-pointer ${selectedItem === 'edit' ? 'bg-orange-100 shadow-md' : ''}`} 
                onClick={() => handleClick('edit')}
            >
                <TiEdit className="mr-2" />
                <h2>Notes</h2>
            </div>
            <div 
                className={`flex items-center w-64 h-12 pl-2 rounded-t-lg cursor-pointer ${selectedItem === 'bell' ? 'bg-orange-100 shadow-md' : ''}`} 
                onClick={() => handleClick('bell')}
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
