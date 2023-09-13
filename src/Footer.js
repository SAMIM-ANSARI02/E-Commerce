import React from 'react'
import logo from'./images/logo2.jpg'
import './footer.css'
import {BiLogoInstagramAlt } from 'react-icons/bi'
import {BsFacebook } from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin } from 'react-icons/bs'



const Footer = () => {
  return (
    
    <>
    <div className="footer">
         <div className="container-footer">
            <div className="about-footer">
                <div className="logo-footer">
                    <img src={logo} alt="logo" />
                </div>
                <div className="detail-footer">
                    <p>we sell best technology in the world with cheap price</p>
                    <div className="icon-footer">
                        <li><BsFacebook/></li>
                        <li><BiLogoInstagramAlt/></li>
                        <li><BsTwitter/></li>
                        <li><BsLinkedin/></li>

                    </div>
                </div>
            </div>
            <div className="account">
                 <h3> My Account</h3>
                <ul>
                   <li>account</li>
                   <li>Order</li>
                   <li>Shipping</li>
                   <li>Cart</li>
                 <li>Return</li>
               </ul>
            </div>
            <div className="page account">
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Term and condition</li>
                </ul>
            </div>
         </div>
    </div>
    </>
  )
}

export default Footer