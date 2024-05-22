import { useContext, useEffect, useState } from 'react';
import logo from './../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  const [toggle, setToggle] = useState(true);
  const{theme,setTheme}=useContext(ThemeContext)

  useEffect(()=>{
    console.log("Theme",theme)
  })
  return (
    <div className='flex items-center p-3'>
      <img src={logo} alt="Logo" width={60} height={60} />
      <div className='flex bg-slate-100 p-2 w-full items-center ml-4 rounded-full mx-5'>
        <CiSearch color='black'/>
        <input type="text" placeholder='Search Games' 
        className='px-2 bg-transparent outline-none ml-2 w-full' />
      </div>
      <div>
        {theme=='light' ? (
          <IoMoonSharp
            className='text-[35px] bg-slate-200 text-black p-1 rounded-full'
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} 
          />
        ) : (
          <FaRegSun
            className='text-[35px] bg-slate-200 text-black p-1 rounded-full'
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}} 
          />
        )}
      </div>
    </div>
  );
}

export default Header;
