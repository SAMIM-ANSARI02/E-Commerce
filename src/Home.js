
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import {BsCurrencyDollar } from 'react-icons/bs'
import {BsPercent } from 'react-icons/bs'
import Homeproduct from './Product'
import {BsCart4} from "react-icons/bs";
import {BsEyeFill} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";





import './Home.css'

const Home = () => {
  
  return (
    <>
     <div className="top_banner">
        <div className="container">
            <div className="detail">
                <h2>Best collection of phone 2023</h2>
                <Link to ='/products' className='link'>shop now <p><BsFillArrowRightCircleFill/></p></Link>

            </div>
            <div className="img_box">
                <img src="./img/product3.jpg" alt="mobile" />
            </div>
        </div>
    </div>
    <div className="product_type">
       <div className="container">
          <div className="box">
            <div className="img_box_p">
              <img src="./img/mobile4.webp" alt="mobile" />
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box_p">
              <img src="./img/earsbuds.webp" alt="ear buds" />
            </div>
            <div className="detail">
              <p>55 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box_p">
              <img src="./img/freeze.jpg" alt="freeze" />
            </div>
            <div className="detail">
              <p>42 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box_p">
              <img src="./img/washingmachine.jpg" alt="washing machine" />
            </div>
            <div className="detail">
              <p>40 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box_p">
              <img src="./img/mixture.jpg" alt="mobile" />
            </div>
            <div className="detail">
              <p>30 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box_p">
              <img src="./img/smartwatch.jpg" alt="mobile" />
            </div>
            <div className="detail">
              <p>45 products</p>
            </div>
          </div>
       </div>
       <div className="about">
            <div className="container-about">
                <div className="box-about">
                     <div className="icon-about"><FaTruck/></div>
                     <div className="detail-about">
                        <h3>Free shipping</h3>
                        <p>free shipping on $500</p>
                     </div>
                </div>  
                <div className="box-about">
                     <div className="icon-about"><BsCurrencyDollar /></div>
                     <div className="detail-about">
                        <h3>Return and Refund</h3>
                        <p>money return in your wallet</p>
                     </div>
                </div>   
                <div className="box-about">
                     <div className="icon-about"><BsPercent/></div>
                     <div className="detail-about">
                        <h3>Member discount </h3>
                        <p>on every product</p>
                     </div>
                </div>  
                <div className="box-about">
                     <div className="icon-about"><FaTruck/></div>
                     <div className="detail-about">
                        <h3>Customer support</h3>
                        <p>24x7 call support </p>
                     </div>
                </div>   
            </div>
       </div>
    </div>
    <div className="product">
      <h2>Top new products</h2>
        <div className="container-prod">
          {
            Homeproduct.map((currEl)=>{
 
              return(
                <div className="box-prod" key={currEl.id}>
                    <div className="img">
                       <img src={currEl.img} alt={currEl.title} />
                    </div>
                    <div className="icon-prod">
                        <BsCart4/>
                        <BsEyeFill/>
                        <AiOutlineHeart/>
                    </div>
                    <div className="detail-prod">
                      <p>{currEl.cat}</p>
                      <h3>{currEl.title}</h3>
                      <h4>{currEl.price}</h4>
                    </div>
                </div>  

              )
            })
          }
           
        </div>
    </div>
    </>
   
  )
}

export default Home