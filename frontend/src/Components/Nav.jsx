import { useMemo } from 'react';
import { FaSearch, FaSync} from 'react-icons/fa';
import { useVerify } from './Verify';

export function NavComponent() {
  const handleClick =  ()=>{
    localStorage.setItem("token", "no");
    useVerify();
  }
  return (
    <div className='flex justify-around items-center bg-gray-50 h-nav border-b-2 border-y-slate-400 '>
      <div>
        <h2 className='text-xl font-semibold text-gray-600'>Keeps</h2>
      </div>
      <div className='flex'>
        <button className='flex justify-center items-center bg-gray-200 h-12 w-12 rounded-sm'><FaSearch className='hover:bg-gray-800 h-8 w-8 rounded p-7'/></button>
        <input type='text' placeholder='Search' className='bg-gray-200 h-12 w-96 pl-4 rounded-sm'></input>
      </div>
      <div>
        <button><FaSync></FaSync></button>
        <button onClick={handleClick}>logout</button>
      </div>
    </div>
  );
};
