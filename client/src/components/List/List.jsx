import React from "react";
import "./List.css"
// import { Card } from "@mui/material";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({subCats,maxPrice,sort,catId}) => {

    // const data = [
    //     {
    //       id: 1,
    //       img:"/img/home/h3.jpg",
    //       img2:"/img/home/h6.jpg",
    //       title:"Long Sleeve",
    //       isNew:true,
    //       oldPrice:19,
    //       price:12,
    //     },
    //     {
    //       id: 2,
    //       img:"/img/home/h6.jpg",
    //       img2:"/img/home/h3.jpg",
    //       title:"Long Sleeve",
    //       isNew:true,
    //       oldPrice:19,
    //       price:12,
    //     },
    //     {
    //       id: 3,
    //       img:"/img/home/h6.jpg",
    //       img2:"/img/home/h3.jpg",
    //       title:"Long Sleeve",
    //       isNew:true,
    //       oldPrice:19,
    //       price:12,
    //     },
    //     {
    //       id: 4,
    //       img:"/img/home/h3.jpg",
    //       img2:"/img/home/h6.jpg",
    //       title:"Long Sleeve",
    //       isNew:true,
    //       oldPrice:19,
    //       price:12,
    //     },
    //     {
    //         id: 4,
    //         img:"/img/home/h6.jpg",
    //         img2:"/img/home/h3.jpg",
    //         title:"Long Sleeve",
    //         isNew:true,
    //         oldPrice:19,
    //         price:12,
    //       },
    //       {
    //         id: 5,
    //         img:"/img/home/h6.jpg",
    //         img2:"/img/home/h3.jpg",
    //         title:"Long Sleeve",
    //         isNew:true,
    //         oldPrice:19,
    //         price:12,
    //       },
    //    ];
        
    const {data,loading,error} = useFetch(
      `/products?populate=*&[filters][categories][id]=${catId}
      ${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
      );

    return (
        <div className="list">
            {loading ? "loading"
            :data?.map((item)=><Card item={item} key={item.id}/>)}
        </div>
    )
}

export default List