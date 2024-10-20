import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
// import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
// import store, { persistor } from './redux/store'
import { persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store } from './redux/store';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//        <Provider store={store}>
//         <App />
//        </Provider>
//   </React.StrictMode>
// )






// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css' 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <Provider store={store}>
//      <App />
//      </Provider>
    
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <PersistGate loading={"loading"} persistor={persistor}>
       <App />
     </PersistGate>
  
     </Provider>
    
  </React.StrictMode>,
)
