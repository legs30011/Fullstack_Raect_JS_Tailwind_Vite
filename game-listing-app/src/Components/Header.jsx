import React from 'react';
import logo from './../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className='flex items-center'>
      <img src={logo} alt="Logo" width={60} height={60} />
      <div className='flex bg-slate-100 p-2 w-full items-center ml-4'>
        <CiSearch color='black'/>
        <input type="text" className='bg-transparent outline-none ml-2 w-full' placeholder='Search' />
      </div>
    </div>
  );
}

export default Header;
