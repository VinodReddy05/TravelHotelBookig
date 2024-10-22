
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import List from './Pages/Lists/List';
// import HotelPage from './Pages/HotelPage/HotelPage';
// import Signup from './CommonPages/Authentication/Register';
// import Login from './CommonPages/Authentication/Login';
// import Payment from './Pages/PaymentPage/Payment';
// import BookingDetails from './Pages/BookingDetails/BookingDetails';
// import City from './CommonPages/City/City';

// const App = () => {
//   const token = localStorage.getItem('token');

//   const PrivateRoute = ({ element: Component, ...rest }) => {
//     return token ? <Component {...rest} /> : <Navigate to="/login" />;
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/hotels" element={<List />} />
//           <Route path="/hotels/:id" element={<HotelPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/city/:cityName" element={<City />} />
//           <Route path="/booking/:id" element={<PrivateRoute element={BookingDetails} />} />
//           <Route path="/booking/:id/payment" element={<PrivateRoute element={Payment} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import List from './Pages/Lists/List';
import HotelPage from './Pages/HotelPage/HotelPage';
import Signup from './CommonPages/Authentication/Register';
import Login from './CommonPages/Authentication/Login';
import Payment from './Pages/PaymentPage/Payment';
import BookingDetails from './Pages/BookingDetails/BookingDetails';
import City from './CommonPages/City/City';
import { Navigate } from 'react-router-dom';

const App = () => {
  const PrivateRoute = ({ element: Component }) => {
    const token = localStorage.getItem('token');
    return token ? <Component /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          {/* <Route path="/hotels/:id" element={<PrivateRoute element={HotelPage} />} /> */}
          <Route path="/hotels/:id" element={<HotelPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/city/:cityName" element={<City />} />
          {/* <Route path="/booking/:id" element={<PrivateRoute element={BookingDetails} />} /> */}
          <Route path="/booking/:id" element={< BookingDetails/>} />
          {/* <Route path="/booking/:id/payment" element={<PrivateRoute element={Payment} />} /> */}
          <Route path="/booking/:id/payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

