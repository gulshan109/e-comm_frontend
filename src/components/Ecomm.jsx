import React from "react";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Signin from "./pages/Auth/Signin";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CartPage from "./pages/CartPage";
import Dashboard from "./pages/users/Dashboard";
import PrivateRoute from "./routes/Private";
import AdminRoutes from "./routes/AdminRoutes";
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import UpdateProducts from "./pages/Admin/UpdateProducts";
import Orders from "./pages/users/Orders";
import UserProfile from "./pages/users/UserProfile";
import Users from "./pages/Admin/Users";
import CategoryCreate from "./pages/Admin/CategoryCreate";


const Ecomm = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/policy",
          element: <Policy />,
        },
        {
          path: "/dashboard",
          element: <PrivateRoute />,
          children: [
            {
              path: "user",
              element: <Dashboard />,
            },
            {
              path:"/dashboard/user/profile",
              element:<UserProfile/>
            },
            {
              path : "/dashboard/user/orders",
              element  :<Orders/>
            }
          ],
        },
        {
          path: "/dashboard",
          element: <AdminRoutes />,
          children: [
            {
              path: "admin",
              element: <AdminDashboard />,
            },
            {
              path:"/dashboard/admin/categorycreate",
              element:<CategoryCreate/>
            },
            {
              path: "/dashboard/admin/create-product",
              element :<CreateProduct/>
            },
            {
              path: "/dashboard/admin/products",
              element :<Products/>
            },
            {
              path: "/dashboard/admin/users",
              element :<Users/>
            }, 
          ],
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/cartpage",
          element: <CartPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />,
        },
      ],
    },
  ]);
  return(
     <RouterProvider router={router}>

     </RouterProvider>)
};

export default Ecomm;





















// import React from 'react'

// const Ecomm = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/forgotpassword" element = {<ForgotPassword/>} />

//           <Route
//             path="/user-dashboard"
//             element={
//               <PrivateRoute allowedRole="user">
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin-dashboard"
//             element={
//               <PrivateRoute allowedRole="admin">
//                 <AdminDashboard />
//               </PrivateRoute>
//             }
//           />
//         </Route>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/cartpage" element = {<CartPage/>}/>
//           <Route path="/category" element = {<Category/>} />
//           <Route path="/policy" element = {<Policy/>} />
//           <Route path="/about" element = {<About/>} />
//           <Route path="/contact" element = {<Contact/>} />
//       </Routes>
//     </>
//   );
// };

// export default Ecomm;
