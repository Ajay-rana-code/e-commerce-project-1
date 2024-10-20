// import { useEffect, useState } from "react";
// import { makeRequest } from "../makeRequest";
// import axios from "axios";


// const apiUrl = "http://localhost:1337/api"; // Replace with your API URL
// const apiToken = "d7bb144d14f6c55fbafda0c9e326c7d697537db150d06b9ec3f7e713c130c60c79dd2a95ebcb10c7d3e0fbe9e3333ad702c907e9e685260e17b6daee24fade6c0274119c62fd4f15d63f454a14e7be9ac92b7e70ce1ed0e9ca00dffcff06c0bfb529ffb8fd203a48dc114aa4bb174687072e3f5c72974fd36cb0b0d93bebcea4";


// const useFetch = (url) => {

//     const [data,setData] = useState([])
//     const [loading,setLoading] = useState(false)
//     const [error,setError] = useState(false) 

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             setLoading(true)
//             const res = await makeRequest.get(url
//             //   `${apiUrl}/products?populate=*&[filters][type][$eq]=${type}`,
//             //   {
//             //     headers: {
//             //       Authorization: "bearer " + apiToken ,
//             //     },
//             //   }
//             );
//             setData(res.data.data);
//           } catch (err) {
//             // console.log(err);
//             setError(true)
//           }
//           setLoading(false)
//         };
//         fetchData();
//       }, [url]);

//       return {data,loading,error}

// }

// export default useFetch;





import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
