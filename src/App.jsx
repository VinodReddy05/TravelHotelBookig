// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

// // Lazy load your components
// const Home = lazy(() => import('./Pages/Home/Home'));
// const List = lazy(() => import('./Pages/Lists/List'));
// const HotelPage = lazy(() => import('./Pages/HotelPage/HotelPage'));
// const Signup = lazy(() => import('./CommonPages/Authentication/Register'));
// const Login = lazy(() => import('./CommonPages/Authentication/Login'));
// const Payment = lazy(() => import('./Pages/PaymentPage/Payment'));
// const BookingDetails = lazy(() => import('./Pages/BookingDetails/BookingDetails'));
// const City = lazy(() => import('./CommonPages/City/City'));

// const App = () => {
//   const PrivateRoute = ({ element: Component }) => {
//     const token = localStorage.getItem('token');
//     return token ? <Component /> : <Navigate to="/login" />;
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<PrivateRoute element={Home} />} />
//             <Route path="/hotels" element={<List />} />
//             <Route path="/hotels/:id" element={<HotelPage />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/city/:city" element={<City />} />
//             <Route path="/booking/:id" element={<BookingDetails />} />
//             <Route path="/booking/:id/payment" element={<Payment />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;



import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Lazy load your components
const Home = lazy(() => import('./Pages/Home/Home'));
const List = lazy(() => import('./Pages/Lists/List'));
const HotelPage = lazy(() => import('./Pages/HotelPage/HotelPage'));
const Signup = lazy(() => import('./CommonPages/Authentication/Register'));
const Login = lazy(() => import('./CommonPages/Authentication/Login'));
const Payment = lazy(() => import('./Pages/PaymentPage/Payment'));
const BookingDetails = lazy(() => import('./Pages/BookingDetails/BookingDetails'));
const City = lazy(() => import('./CommonPages/City/City'));

const App = () => {
  const PrivateRoute = ({ element: Component }) => {
    const token = localStorage.getItem('token');
    return token ? <Component /> : <Navigate to="/login" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div style={styles.loadingContainer}>
              <img
                src="https://media.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif"
                alt="Loading..."
                style={styles.loadingImage}
              />
              <p style={styles.loadingText}>Loading, please wait...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<PrivateRoute element={Home} />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<HotelPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/city/:city" element={<City />} />
            <Route path="/booking/:id" element={<BookingDetails />} />
            <Route path="/booking/:id/payment" element={<Payment />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  loadingImage: {
    width: '150px',
    height: '150px',
  },
  loadingText: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#555',
  },
};

export default App;
