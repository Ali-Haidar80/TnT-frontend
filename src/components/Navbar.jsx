import React from 'react'
import logo from '../assets/logo.png'
import { links } from '../lib/data'
import {Link} from 'react-router-dom' 
const Navbar = () => {
  return (
    <div className=' px-6 py-2 flex items-end gap-6'>
        <Link to={'/'}>
        <img src={logo} alt="" />
        </Link>
        <ul className='flex gap-6 mb-1 text-[#939393] text-[1rem] font-[600]'>
            {
                links.map((link,idx)=>{
                    return(
                        <li key={link+idx} className='hover:cursor-pointer hover:text-gray-700 transition-all'>{link.name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Navbar