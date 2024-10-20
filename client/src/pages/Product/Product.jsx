// import React from "react"
import React, { useState } from "react"
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";


const Product = () =>{ 

    const id= useParams().id;

    const [selectedImg,setSelectedImg] = useState("img");

    const [quantity,setQuantity] = useState(1);

    const uploadURL= "http://localhost:1337";

    const dispatch = useDispatch()

    // const images =[
    //     "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     " /img/home/h6.jpg",
    // ];

    const {data,loading,error} = useFetch(
        `/products/${id}?populate=*`
        );

    return(
        <div className="product">
            {loading ? "loading" : (<><div className="left">
                <div className="images">
                    {/* <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} /> */}
                    <img src={uploadURL+data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg("img")}/>
                    <img src={uploadURL+data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg("img2")} />

                </div>
                {/* <div className="mainImg">
                    <img src={uploadURL+data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
                </div> */}
                <div className="mainImg">
                  {/* Conditional rendering to check if data exists */}
                      {data && data.attributes && data.attributes[selectedImg] && (
                     <img
                       src={uploadURL + data.attributes[selectedImg].data.attributes.url}
                       alt=""
                        />
                       )}
                </div>
            </div>
            <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">₹{data?.attributes?.price}</span>
                <p> 
                    {data?.attributes?.desc}
                </p>
                <div className="quantity">
                    {/* <input type="button" value="-" onClick={()=>setQuantity(prev=>prev===1 ? 1 : prev-1)}/>      */}
                    <button onClick={()=>setQuantity( prev=>prev===1 ? 1 : prev-1 )}> - </button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}> + </button>
                    {/* <input type="button" value="+" onClick={()=>setQuantity(prev=>prev+1)}/> */}
                </div>
                
                    <button className="add" onClick={()=>dispatch(addToCart({
                        id:data.id,
                        title:data.attributes.title,
                        desc:data.attributes.desc,
                        price:data.attributes.price,
                        img:data.attributes.img.data.attributes.url,
                        quantity,
                        email:"testt1@gmail.com"

                    }))}>
                    <AddShoppingCartIcon/>ADD to Cart 
                    </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> Add to Wishlist
                    </div>
                    <div className="item">
                        <BalanceIcon/> Add to Compare
                    </div>
                </div>

                <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>

            </div></>)}
        </div>
    )
}
export default Product







// import React from "react";
// import "./Product.css";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";
 

// const Product = () => {
//   return (
//     <div className="product">

//           <div className="p-left">
//             <div className="images">
//               <img
//                 src="/img/home/hf3.jpg"
 
                
//                 alt=""
//               />
//             </div>
//             <div className="mainImg">
//               <img
//                 src="/img/home/hf3.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="p-right">
//             <h1> </h1>
//             <span className="price"> </span>
//             <p> </p>
//             <div className="quantity">
//               <button >+</button>
//             </div>
//             <button
//               className="add"   >
//               <AddShoppingCartIcon /> ADD TO CART
//             </button> 
//             <div className="links">
//               <div className="item">
//                 <FavoriteBorderIcon /> ADD TO WISH LIST
//               </div>
//               <div className="item">
//                 <BalanceIcon /> ADD TO COMPARE
//               </div>
//             </div>
//             <div className="info">
//               <span>Vendor: Polo</span>
//               <span>Product Type: T-Shirt</span>
//               <span>Tag: T-Shirt, Women, Top</span>
//             </div>
//             <hr />
//             <div className="info">
//               <span>DESCRIPTION</span>
//               <hr />
//               <span>ADDITIONAL INFORMATION</span>
//               <hr />
//               <span>FAQ</span>
//             </div>
//           </div>
//     </div>
//   );
// };

// export default Product;
