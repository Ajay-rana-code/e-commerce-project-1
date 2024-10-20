  // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
// import { Children } from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";

// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
 

// // import Slider from './components/Slider/Slider';

// import Home from './pages/Home/Home';
// import Product from './pages/Product/Product';
// import Products from './pages/Products/Products';
// import Cart from './components/Cart/Cart';
// import Contact from './components/Contact/Contact';



// const Layout = () => {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/products/:id",
//         element:<Products/>
//       },
//       {
        
//         path:"/product/:id",
//         element:<Product/>
//       },
//       {
        
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }, 
// ]);


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <div>
//        <RouterProvider router={router} />
//       </div>
//   );
// }

// export default App














// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home/Home';
// import { Container } from "reactstrap";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import Logout from "./components/Logout";
// import CustomNav from "./components/CustomNav";
// import { ToastContainer } from "react-toastify";
 
// import { Protector, userData } from "./helpers";
 
// import Profile from "./components/Profile";

// function App() {
//   const { jwt, username } = userData();
//   const isLoggedIn = !!jwt;

//   return (
//     <div>
//       <BrowserRouter>
//         <CustomNav
//           isLoggedIn={isLoggedIn}
//           username={username}
//         />
//         <Container>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/logout" element={<Logout />} />
//             <Route path="/registration" element={<Registration />} />
//             <Route
//               path="/profile"
//               element={<Protector Component={<Profile token={jwt} />} />}
//             />
//           </Routes>
//           <ToastContainer />
//         </Container>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


















// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './pages/Home/Home';
// import { Container } from "reactstrap";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import Logout from "./components/Logout";
// import CustomNav from "./components/CustomNav";
// import { ToastContainer } from "react-toastify";
 
// import { Protector, userData } from "./helpers";
 
// import Profile from "./components/Profile";






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.scss'
// import { Children } from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";

// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
 

// // import Slider from './components/Slider/Slider';

// // import Home from './pages/Home/Home';
// import Product from './pages/Product/Product';
// import Products from './pages/Products/Products';
// import Cart from './components/Cart/Cart';
// import Contact from './components/Contact/Contact';



// const Layout = () => {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/products/:id",
//         element:<Products/>
//       },
//       {
        
//         path:"/product/:id",
//         element:<Product/>
//       },
//       {
        
//         path:"/contact",
//         element:<Contact/>
//       },
      
//     ]
//   }, 
// ]);


// function App() {
//   const { jwt, username } = userData();
//   const isLoggedIn = !!jwt;
//   const [count, setCount] = useState(0)

//   return (
//       <div>
//        {/* <RouterProvider router={router} /> */}
       


//        <BrowserRouter>
//          <CustomNav
//             isLoggedIn={isLoggedIn}
//             username={username}
//           />
//         <Container>
//             <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/logout" element={<Logout />} />
//             <Route path="/registration" element={<Registration />} />
//             <Route
//               path="/profile"
//               element={<Protector Component={<Profile token={jwt} />} />}
//             />
//             </Routes>
//             <ToastContainer />
//           </Container>
//         </BrowserRouter>
//       </div>
//   );
// }

// export default App














































// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Container } from 'reactstrap';
// import { ToastContainer } from 'react-toastify';
// import { Protector, userData } from './helpers';
// import CustomNav from './components/CustomNav';
// import Home from './pages/Home/Home';
// import Login from './components/Login';
// import Registration from './components/Registration';
// import Logout from './components/Logout';
// import Profile from './components/Profile';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Product from './pages/Product/Product';
// import Products from './pages/Products/Products';
// import Cart from './components/Cart/Cart';
// import Contact from './components/Contact/Contact';

// const Layout = ({ children }) => (
//   <div className="App">
//     {/* <Navbar /> */}
//     {children}
//     <Footer />
//   </div>
// );

// const App = () => {
//   const { jwt, username } = userData();
//   const isLoggedIn = !!jwt;

//   return (
//     <Router>
//       <CustomNav isLoggedIn={isLoggedIn} username={username} />
//       <Container>
//         <Routes>
//           <Route path="/" element={<Layout children={<Home />} />} />
//           <Route path="/login" element={<Layout children={<Login />} />} />
//           <Route path="/logout" element={<Layout children={<Logout />} />} />
//           <Route path="/registration" element={<Layout children={<Registration />} />} />
//           <Route
//             path="/profile"
//             element={<Layout children={<Protector Component={<Profile token={jwt} />} />} />}
//           />
//         </Routes>
//         <ToastContainer />
//       </Container>
//     </Router>
//   );
// };

// export default App;


































import Orders from './components/Orders/Orders';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { Protector, userData } from './helpers';
import Home from './pages/Home/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Logout from './components/Logout';
import CustomNav from './components/CustomNav';
import Profile from './components/Profile';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import useOrders from './components/Orders/useOrders';

const Layout = ({ children }) => (
  <div className="App">
    {/* <Navbar /> */}
    {/* <CustomNav /> */}
    {/* <CustomNav isLoggedIn={isLoggedIn} username={username} /> */}
    {children}
    <Footer />
  </div>
);

const App = () => {
  const { jwt, username } = userData();
  const isLoggedIn = !!jwt;

  return (
    <BrowserRouter>
      <CustomNav isLoggedIn={isLoggedIn} username={username} />
      <Container>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/login" element={<Layout children={<Login />} />} />
          <Route path="/logout" element={<Layout children={<Logout />} />} />
          <Route
            path="/registration"
            element={<Layout children={<Registration />} />}
          />
          <Route
            path="/profile"
            element={
              <Layout
                children={<Protector Component={<Profile token={jwt} />} />}
              />
            }
          />



          
          <Route path="/products/:id" element={<Layout children={<Products />} />} />
          <Route path="/product/:id" element={<Layout children={<Product />} />} />
          <Route path="/contact" element={<Layout children={<Contact />} />} />
          <Route path="/orders" element={<Layout children={<Orders />} />} />

        </Routes>
        <ToastContainer />
      </Container>
    </BrowserRouter>
  );
};

export default App;




