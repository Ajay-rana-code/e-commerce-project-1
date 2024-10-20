// import React, { useState } from "react";
import "./CustomNav.scss"
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { FaShoppingBasket } from "react-icons/fa";
// const CustomNav = ({ basketItems, isLoggedIn, username }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   const loginLogout = isLoggedIn ? (
//     <NavLink tag={Link} to="/logout">
//       Logout
//     </NavLink>
//   ) : (
//     <NavLink tag={Link} to="/login">
//       Login
//     </NavLink>
//   );

//   return (
//     <div className="customnav">
//       <div className="container">
//         <NavbarBrand tag={Link} to="/" className="title">
//           Stapi E-commerce
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} className="mr-2" />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav navbar>
//             <UncontrolledDropdown nav inNavbar>
//               {isLoggedIn ? (
//                 <>
//                   <DropdownToggle nav caret>
//                     {username} account
//                   </DropdownToggle>
//                   <DropdownMenu end>
//                     <DropdownItem>Your account</DropdownItem>
//                     <DropdownItem>
//                       <NavLink tag={Link} to="/orders">
//                         Your orders
//                       </NavLink>
//                     </DropdownItem>
//                     <DropdownItem>
//                       <NavLink tag={Link} to="/profile">
//                         Your profile
//                       </NavLink>
//                     </DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem>{loginLogout}</DropdownItem>
//                   </DropdownMenu>
//                 </>
//               ) : (
//                 loginLogout
//               )}
//             </UncontrolledDropdown>
//             <NavItem>
//               <NavLink tag={Link} to="/basket" className="basket-icon-wrapper">
//                 <span className="basket-items">{basketItems}</span>
//                 <FaShoppingBasket className="basket-icon" />
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </div>
//     </div>
//   );
// };

// export default CustomNav;




































































import React, { useState } from "react";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"
// import "./Navbar.scss"
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux"
















// import React, { useState } from "react";
 
// import { Link } from "react-router-dom";
// import { FaShoppingBasket } from "react-icons/fa";
const CustomNav = ({ basketItems, isLoggedIn, username }) => {
  const[open,setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const products= useSelector(state=>state.cart.products);

  const toggle = () => setIsOpen(!isOpen);
  const loginLogout = isLoggedIn ? (
    <Link tag={Link} to="/logout" className="fun">
      Logout
    </Link>
  ) : (
    <Link tag={Link} to="/login" className="fun">
     <AccountCircleIcon/>
    </Link>
  );

  return (
    <div className="customnav">


     <div className="wrapper">

        <div className="left">


            <div className="item">
              <img id="india" src="/img/in.png" alt="India" />
            </div>

            {/* <div tag={Link} to="/" className="mrauto">
                 Stapi E-commerce
             </div>


            <div tag={Link} to="/" className="mrauto">
                 Stapi E-commerce
            </div> */}

            <div className="item">
                    <Link className="link" to="/products/1">Men</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/2">Women</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/5">Children</Link>
                </div>

                <div className="item">
                    <Link className="link" to="/products/7">Accessories</Link>
                </div>





         </div>


        <div className="center">
          <Link className="link" to ="/">TREND CANVAS</Link>
        </div>



       <div className="right">

              {/* <div className="item">
                <Link className="link" to ="/">Homepage</Link>
              </div> */}
              <div className="item">
                <Link className="link" to ="/contact">About</Link>
              </div>
              <div className="item">
                <Link className="link" to ="/contact">Contact</Link>
              </div>



              <div class="dropdown">



           <div onClick={toggle} />

            <div isOpen={isOpen}>
                 <div>
                      <div>
                               {isLoggedIn ? (
                                    <>
                                     <div >
                                     <button class="dropdown-button">{username} <AccountCircleIcon/></button>
                                        {/* {username} account */}
                                     </div>
             
             
             <div className="dropdown-content">


              <div>Your account</div>
              <div>
              {/* <Link className="link" to ="/">Homepage</Link> */}
                 <Link tag={Link} to="/orders">
                     Your orders
                 </Link>
              </div>
             <div>
            <Link tag={Link} to="/profile">
        Your profile
            </Link>
             </div>

    <div divider />
    <div>{loginLogout}</div>
             </div>
</>
) : (
loginLogout
)}
                      </div>
{/* <div>
<Link tag={Link} to="/basket" className="basket-icon-wrapper">
<span className="basket-items">{basketItems}</span>
<FaShoppingBasket className="basket-icon" />
</Link>
</div> */}
                 </div>
            </div>

            </div>




    


            <div className="icons">
                {/* <SearchIcon/> */}
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
  );
};

export default CustomNav;







































// import React, { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { Link } from "react-router-dom";
// import "./CustomNav.scss";
// import Cart from "../Cart/Cart";
// import { useSelector } from "react-redux";

// const CustomNav = ({ basketItems, isLoggedIn, username }) => {
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openCart, setOpenCart] = useState(false);
//   const products = useSelector((state) => state.cart.products);

//   const toggle = () => setIsOpen(!isOpen);
//   const loginLogout = isLoggedIn ? (
//     <Link tag={Link} to="/logout" className="fun">
//       Logout
//     </Link>
//   ) : (
//     <Link tag={Link} to="/login" className="fun">
//      <AccountCircleIcon/>
//     </Link>
//   );

//   const toggleDropdown = () => {
//     setOpenDropdown(!openDropdown);
//     setOpenCart(false);
//   };

//   const toggleCart = () => {
//     setOpenCart(!openCart);
//     setOpenDropdown(false);
//   };

//   return (
//     <div className="customnav">
//       <div className="wrapper">
//         <div className="left">
//           <div className="item">
//             <img id="india" src="/imgf/in.png" alt="India" />
//           </div>
//           <div className="item">
//             <Link className="link" to="/products/1">
//               Men
//             </Link>
//           </div>
//           <div className="item">
//             <Link className="link" to="/products/2">
//               Women
//             </Link>
//           </div>
//           <div className="item">
//             <Link className="link" to="/products/3">
//               Children
//             </Link>
//           </div>
//         </div>
//         <div className="center">
//           <Link className="link" to="/">
//             TREND CANVAS
//           </Link>
//         </div>
//         <div className="right">
//           <div className="item">
//             <Link className="link" to="/">
//               Homepage
//             </Link>
//           </div>
//           <div className="item">
//             <Link className="link" to="/contact">
//               About
//             </Link>
//           </div>
//           <div className="item">
//             <Link className="link" to="/contact">
//               Contact
//             </Link>
//           </div>
//           <div className="dropdown">
//             <button className="dropdown-button" onClick={toggleDropdown}>
//               {username} Account
//             </button>
//             {openDropdown && (
//               <div className="dropdown-content">
//                 <div>Your account</div>
//                 <div>
//                   <Link tag={Link} to="/orders">
//                     Your orders
//                   </Link>
//                 </div>
//                 <div>
//                   <Link tag={Link} to="/profile">
//                     Your profile
//                   </Link>
//                 </div>
//                 <div divider />
//                 <Link>{isLoggedIn ? "Logout" : "Login"}</Link>
//               </div>
//             )}
//           </div>
//           <div className="icons">
//             <SearchIcon />
//             <FavoriteIcon />
//             <div className="cartIcon" onClick={toggleCart}>
//               <ShoppingCartIcon />
//               <span>{products.length}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {openCart && <Cart />}
//     </div>
//   );
// };

// export default CustomNav;


















