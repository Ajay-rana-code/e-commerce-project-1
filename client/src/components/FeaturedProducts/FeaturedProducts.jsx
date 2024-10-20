// import React from "react";
// import Card from "../Card/Card";
// import "./FeaturedProducts.css";
// import useFetch from "../../hooks/useFetch";

// const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );

 
//   return (
//     <div className="featuredProducts"> 
//        <div className="top">
//         <h1>{type} products</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
//           suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
//           lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
//           suspendisse ultrices gravida. Risus commodo viverra maecenas.
//         </p>
//       </div>
//       <div className="bottom">
//         {error
//           ? "Something went wrong!"
//           : loading
//           ? "loading"
//           : data?.map((item) => <Card item={item} key={item.id} />)}
//       </div> 
//     </div>
 
//   );
// };

// export default FeaturedProducts;






import React from "react";
import  axios from "axios";
import { useEffect, useState } from "react";
import "./FeaturedProducts.scss"
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  //  const data = [
  //   {
  //     id: 1,
  //     img:"/img/home/h3.jpg",
  //     img2:"/img/home/hf.jpg",
  //     title:"Long Sleeve",
  //     isNew:true,
  //     oldPrice:19,
  //     price:12,
  //   },
  //   {
  //     id: 2,
  //     img:"/img/home/hf.jpg",
  //     img2:"/img/home/h3.jpg",
  //     title:"Long Sleeve",
  //     isNew:true,
  //     oldPrice:19,
  //     price:12,
  //   },
  //   {
  //     id: 3,
  //     img:"/img/home/h3.jpg",
  //     img2:"/img/home/hf.jpg",
  //     title:"Long Sleeve",
  //     isNew:true,
  //     oldPrice:19,
  //     price:12,
  //   }, 
  //   {
  //     id: 4,
  //     img:"/img/home/hf.jpg",
  //     img2:"/img/home/h3.jpg",
  //     title:"Long Sleeve",
  //     isNew:true,
  //     oldPrice:19,
  //     price:12,
  //   },
  //  ];

  //  const [data,setData] =useState([]);

  //  useEffect(()=>{
  //  const fetchData = async ()=>{
  //   try{
  //        const res =await axios.get(
          
  //         process.env.REACT_APP_API_URL+"/products",
  //         {
  //         headers:{ 
  //           Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
  //         },
  //        });
  //       //  console.log(data)
  //       setData(res.data.data)
  //   }catch(err){
  //     console.log(err)
  //   }
  //  };
  //  fetchData();
  //  },[]);

  const apiUrl = "http://localhost:1337/api"; // Replace with your API URL
  const apiToken = "d7bb144d14f6c55fbafda0c9e326c7d697537db150d06b9ec3f7e713c130c60c79dd2a95ebcb10c7d3e0fbe9e3333ad702c907e9e685260e17b6daee24fade6c0274119c62fd4f15d63f454a14e7be9ac92b7e70ce1ed0e9ca00dffcff06c0bfb529ffb8fd203a48dc114aa4bb174687072e3f5c72974fd36cb0b0d93bebcea4";

  // useEffect(() => {
  //   const fetchData = async () => { 
  //     try {
  //       const res = await axios.get(
  //         `${apiUrl}/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: "bearer " + apiToken ,
  //           },
  //         }
  //       );
  //       setData(res.data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return(
    <div className="featuredProducts">
        <div className="top">
        <h1>{type} products</h1>
         <p>
         Introducing our standout product of the season! 
         Our Products embodies the perfect blend of unique feature. 
         Crafted with exceptional materials and technology, this product type redefines 
         specific industry or user experience. 
        Elevate your lifestyle with this must-have addition! 
        Shop now and experience a desirable feeling"
         </p>
       </div>
 
      {/* <div className="bottom">
       {data.map(item => (
           <Card item={item} key={item.id} />
       ))}
      </div>  */}

<div className="bottom">
       {(loading 
       ? "loading" 
       :data.map(item => (
           <Card item={item} key={item.id} />
       )))}
      </div> 

  
    </div>
  )
}

export default FeaturedProducts