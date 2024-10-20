// import React from "react";
// import "./Cart.scss"
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import {useSelector} from "react-redux"
// import { removeItem, resetCart } from "../../redux/cartReducer";
// import { useDispatch } from "react-redux";

// const Cart = () => {

    

// //   const data = [
// //     {
// //         id: 1,
// //         img:"/img/home/h3.jpg",
// //         img2:"/img/home/h6.jpg",
// //         title:"Long Sleeve",
// //         desc:"fghjksdfsdfsdfsdf",
// //         isNew:true,
// //         oldPrice:19,
// //         price:12,
// //       },
// //       {
// //         id: 2,
// //         img:"/img/home/h6.jpg",
// //         img2:"/img/home/h3.jpg",
// //         title:"Long Sleeve",
// //         desc:"fghjksdfsdfsdfsdf",
// //         isNew:true,
// //         oldPrice:19,
// //         price:12,
// //       },
// //   ];

// const products= useSelector(state=>state.cart.products);
// const dispatch = useDispatch()

 const uploadURL= "http://localhost:1337";

// // const totalPrice= ()=>{
// //     let total = 0;
// //     products.forEach((item) => {total += item.quantity * item.price; });
// //     return total.toFixed(2)

// // };

// const totalPrice = () => {
//     let total = 0;
//     products.forEach((item) => {
//         total += item.quantity * item.price;
//     });
//     return total.toFixed(2);
// };

  
//     return (
//         <div className="cart">
//             <h1>Products in your Cart</h1>
//             {products?.map(item=>(
//                 <div className="item" key={item.id}>
//                     <img src={uploadURL+item.img} alt="" />
//                     <div className="details">
//                         <h1>{item.title}</h1>
//                         <p>{item.desc?.substring(0,100)}</p>
//                         <div className="price"> {item.quantity} x ${item.price} </div>
//                     </div>
//                     <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
//                 </div>
//             ))}

//             <div className="total">
//                 <span>Subtotal</span>
//                 <span>${totalPrice()}</span>
//                 </div>

//             <button>Proceed to Checkout</button>
//             <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>

//         </div>
//     )
// }

// export default Cart




















import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51OXlc7SIuScxTBMBr4Bsrgpi1DUsCHrFcRomCH1cTKFxqFpmlHes4eZc8u3dZg7EPXhlqkKQWFbOuyBdtxMlyWVm00qbkbnS2H"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={uploadURL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ₹{item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
