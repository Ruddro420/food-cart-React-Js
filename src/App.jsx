import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { BestProduct, LoadMainProduct } from "./api/Api";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppDownload from "./components/Home/AppDownload";
import MainProduct from "./pages/MainProduct/MainProduct";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";


// LayOut
const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <AppDownload />
      <MainFooter />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: BestProduct,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/product-page",
        element: <MainProduct />,
        loader: LoadMainProduct,
      },
      {
        path: "/cart-page",
        element: <Cart />,
      },
      {
        path: "/login-page",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
