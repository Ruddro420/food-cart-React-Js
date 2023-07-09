/* import { useEffect, useState } from "react"; */
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../../public/img";
import "./Components.css";
/* import axios from "axios"; */
import { Link, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { clearData, signOut } from "../redux/productSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  // get data from redux
  const productData = useSelector(state => state.foodCart.productData)
  const userInfo = useSelector(state => state.foodCart.userInfo)
  // dispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  /*  const [categorys, setCategorys] = useState([]);
   useEffect(() => {
     axios
       .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
       .then(function (response) {
         setCategorys(response.data.meals);
       })
       .catch(function (error) {
         console.log(error);
       });
   }, []); */
  const logoutHandler = () => {
    dispatch(signOut())
    toast.success('Logout Successfully')
    setTimeout(() => {
      navigate('/')
    }, 3000)

  }

  return (
    <div>
      <nav className=" border-gray-200 main-nav">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          </Link>
          <div className="flex items-center">
            {
              userInfo ?
                <><Button onClick={logoutHandler}>
                  Logout
                </Button>

                  <Link
                    to="/dashboard-page"
                    className="ml-6 text-sm  text-white dark:text-white hover:underline"
                  >
                    Dashboard
                  </Link></>
                :
                <Link
                  to="/login-page"
                  className="text-sm  text-black bg-white px-5 py-2 hover:underline"
                >
                  Login
                </Link>
            }


            <button
              onClick={(() => dispatch(clearData()))}
              className="ml-6 text-sm  text-white dark:text-white hover:underline"
            >
              Clear
            </button>
            <svg
              className="ml-6 w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
              <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
            </svg>
            <Link
              to='/cart-page'
              className="ml-2 text-sm text-white dark:text-white hover:underline relative"
            >
              Cart
            </Link>
            <span className="cart-length">{productData.length}</span>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link to='/'
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to='/product-page'
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Product
                </Link>
              </li>
              {/*   {categorys.map((category, i) => {
                return (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      {category.strCategory}
                    </a>
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
