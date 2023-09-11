import React from 'react'
import {FaTruckMoving} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineLogin} from "react-icons/ai";
import {AiOutlineLogout} from "react-icons/ai";
import {BsCart4} from "react-icons/bs";
import {BiUser} from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './nav.css'
import logo from './images/logo2.jpg'

export const Nav = () => {
    const {loginWithRedirect,logout,user, isAuthenticated} = useAuth0();
  return (
  <>

      <div className="free">
     
          <div className="icon">
               <FaTruckMoving/>
          </div> 
          <p> Free deliviery any where in jharkand</p>
    </div>
    <div className="main-header">
        <div className="container">
            <div className="logo">
                <img className='logoimg' src={logo} alt="logo"></img>
            </div>
            <div className="search-box">
                <input type="text" value='' placeholder='Enter the products name' autoComplete='off' />
                <button>search</button>
            </div>
            <div className="icon">
                {
                    isAuthenticated &&
                    (
                        <div className="account">
                    <div className="user">
                       <BiUser/>
                    </div>
                    <p>hello,{user.name}</p>
                </div>
                    )
                }
              
                <div className="second-icon">
                   <Link to='/' className='link'><p><AiOutlineHeart/></p></Link> 
                   <Link to='/cart' className='link'><p><BsCart4/></p></Link> 
                </div>
                
            </div>
        </div>
    </div>
    <div className="header">
        <div className="container">
           <div className="nav">
              <ul>
                <li><Link to='/' className='link'>home</Link></li>
                <li><Link to='/product' className='link'>product</Link></li>
                <li><Link to='/about' className='link'>about</Link></li>
                <li><Link to='/contact' className='link'>contact</Link></li>
               </ul>
            </div>
           
            <div className="auth">
                {
                    isAuthenticated?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><AiOutlineLogout/></button>
                    :
                    <button onClick={()=>loginWithRedirect()}><AiOutlineLogin/></button>
                    
                }
         
                 
            </div>
        </div>
    </div>
  </>
  )
}
