import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux"

const Navbar = () =>{

  const[open,setOpen] = useState(false)
  
  const products= useSelector(state=>state.cart.products);

    return(
        <div className="navbar">
            <div className="wrapper">
  
              <div className="left">
                <div className="item">
                    <img id="india" src="/img/in.png" alt="" />
                    {/* <KeyboardArrowDownIcon/> */}
                </div>

                <div className="item">
                    {/* <span>IND</span> */}
                    {/* <KeyboardArrowDownIcon/> */}
                </div>

                <div className="item">
                    <Link className="link" to="/products/1">Men</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/2">Women</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/3">Children</Link>
                </div>
              </div> 

              <div className="center">
                <Link className="link" to ="/">TREND CANVAS</Link>
              </div>
              
              <div className="right">


              <div className="item">
                <Link className="link" to ="/">Homepage</Link>
              </div>
              <div className="item">
                <Link className="link" to ="/contact">About</Link>
              </div>
              <div className="item">
                <Link className="link" to ="/contact">Contact</Link>
              </div>

              
              <div className="item">
                <Link className="link" to ="/profile"><AccountCircleIcon/></Link>
              </div>

              <div className="icons">
                <SearchIcon/>
                <FavoriteIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                  <ShoppingCartIcon/>
                  <span>{products.length}</span>
                </div>

              </div>
              </div>
            </div>
            {open && <Cart/>}
        </div>

    )
}
export default Navbar





































 







 