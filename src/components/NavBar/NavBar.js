import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {MdAssignmentInd, MdAssignment,MdFindInPage,MdHome} from 'react-icons/md'
import logo from '../../assets/chez.png'
//import logonew from '../../assets/logochezmoi.jpg'
import {BsFillHouseFill} from 'react-icons/bs'
//import signin from '../signin/signForm';

//import about from '../about/about'


import './NavBar.css'
//import { signForm } from '../signin/signForm'
const NavBar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
   
    return (
        <div className='navbar'>
            <div className='container'>  
            <img className='logo' src={logo} />
           <h1> <span>Votre Agence immobilière </span> </h1> 
          
               <h1><span><BsFillHouseFill /></span> </h1> 
              
              <div className='design'>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li> <MdHome /> <a href='#'>Home</a></li>
                    <li> <MdFindInPage/> <a href='#'>Search</a></li>
                    <li><MdAssignment /> <a href='#'>About</a></li>
                   <li><MdAssignmentInd/> <a href='#'>Contact</a></li> 

                </ul>
               
                </div>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div> 
                
               
        </div>
    
    )
}

export default NavBar