/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/productSlice";

const MainProductCard = ({ mainProduct }) => {
    const navigate = useNavigate();
    const getId = mainProduct.strMeal;
    const rootId = getId.split(' ').join('')
    const detailsHandler = () => {
        navigate(`../product/${rootId}`, {
            state: mainProduct,
        })
    }
    // dispatch
    const dispatch = useDispatch();
    return (
        <div>
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={mainProduct.strMealThumb}
            >
                <div style={{ cursor: 'pointer' }} href="#" onClick={detailsHandler}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {mainProduct.strMeal}
                        </p>
                    </h5>
                </div>
                <div className="mb-5 mt-2.5 flex items-center">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        <p>
                            5.0
                        </p>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ৳{mainProduct.idMeal}
                    </span>
                    <button
                        onClick={() => dispatch(addToCart({
                            id: mainProduct.idMeal,
                            name: mainProduct.strMeal,
                            image: mainProduct.strMealThumb,
                            category: mainProduct.strCategory,
                            price: mainProduct.idMeal,
                            quantity: 1
                        }))}
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        href="#"
                    >
                        <p>
                            Add to cart
                        </p>
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default MainProductCard;