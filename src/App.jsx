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
import CategoryPage from "./pages/Category/CategoryPage";
import Error from "./components/Error";
import Dashboard from "./pages/Dashboard/Dashboard";
import Order from "./pages/Dashboard/Order";
import Payment from "./pages/Dashboard/Payment";
import Profile from "./pages/Dashboard/Profile";
import Protected from "./components/Protected";



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
        path: "/login-page",
        element: <Login />,
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
        loader: async ({ params }) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
            .then(res => res.json());
        },
      },
    ],
  },
  {
    path: "/cart-page",
    element: <Cart />,
  },
  {
    path: "/dashboard-page",
    element: <Protected>
      <Dashboard />
    </Protected>,
    children: [
      {
        path: "/dashboard-page/order",
        element: <Order />,
      },
      {
        path: "/dashboard-page/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard-page/profile",
        element: <Profile />,
      }
    ]
  },
  {
    path: "*",
    element: <Error />,
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
