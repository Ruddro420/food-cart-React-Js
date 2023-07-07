import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AreaFilter, BestProduct, LoadMainProduct } from "./api/Api";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppDownload from "./components/Home/AppDownload";
import MainProduct from "./pages/MainProduct/MainProduct";
import MainProductFilter from "./pages/MainProduct/MainProductFilter";

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
        path: "/product-page",
        element: <MainProductFilter />,
        loader: AreaFilter,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
