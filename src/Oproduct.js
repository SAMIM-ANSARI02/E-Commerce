import React from 'react'
import './Oproduct.css'
import productDetails from './Oproductdetails'
import {BsCart4} from "react-icons/bs";
import {BsEyeFill} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";

const Oproduct = () => {
  return (
   
    <>
    <h2># products</h2>
    <p>Home products</p>
    <div className="product">
        <div className="container">
             <div className="filter">
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                        <li>purse</li>
                        <li>powerbank</li>
                        <li>Ear ring</li>
                        <li>charger</li>
                        <li>dress</li>
                        <li>necklace</li>
                    </ul>
                </div>
             </div>
             <div className="product-box">
                <div className="container">
                    {
                productDetails.map((currEl)=>{
                       return(
                        <div className="box">
                             <div className="box-prod" key={currEl.id}>
                    <div className="img-box">
                       <img src={currEl.img} alt={currEl.title} />
                       <div className="icon-prod">
                          <li><BsCart4/></li>
                          <li><BsEyeFill/></li>
                          <li><AiOutlineHeart/></li>
                       </div>
                    </div>
                    
                    <div className="detail-prod">
                      <p>{currEl.cat}</p>
                      <h3>{currEl.title}</h3>
                      <h4>{currEl.price}</h4>
                    </div>
                </div> 
                        </div>
                       )
                    })
                    }
                </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Oproduct