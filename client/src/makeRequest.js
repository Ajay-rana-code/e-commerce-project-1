import axios from "axios";

// export const makeRequest = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers:{
//         Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
//     } 
// }); 


// export const makeRequest = axios.create({
//     baseURL: "http://localhost:1337/api",
//     headers:{
//         Authorization:"bearer" + "d7bb144d14f6c55fbafda0c9e326c7d697537db150d06b9ec3f7e713c130c60c79dd2a95ebcb10c7d3e0fbe9e3333ad702c907e9e685260e17b6daee24fade6c0274119c62fd4f15d63f454a14e7be9ac92b7e70ce1ed0e9ca00dffcff06c0bfb529ffb8fd203a48dc114aa4bb174687072e3f5c72974fd36cb0b0d93bebcea4"
//         ,
//     } 
// });

export const makeRequest = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
      Authorization: "bearer " + "d7bb144d14f6c55fbafda0c9e326c7d697537db150d06b9ec3f7e713c130c60c79dd2a95ebcb10c7d3e0fbe9e3333ad702c907e9e685260e17b6daee24fade6c0274119c62fd4f15d63f454a14e7be9ac92b7e70ce1ed0e9ca00dffcff06c0bfb529ffb8fd203a48dc114aa4bb174687072e3f5c72974fd36cb0b0d93bebcea4",
    },
    uploadURL: "http://localhost:1337"
  });