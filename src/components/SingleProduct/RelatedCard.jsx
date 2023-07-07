/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";
import { BsFillStarFill } from "react-icons/bs";
import { addToCart } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
/* import { useNavigate } from "react-router-dom"; */

const RelatedCard = ({ relatedItem }) => {
    /*     console.log(relatedItem);
        const navigate = useNavigate();
        const getId = relatedItem.strMeal;
        const rootId = getId.split(' ').join('')
        const detailsHandler = () => {
            navigate(`../product/${rootId}`, {
                state: relatedItem,
            })
        } */
    // dispatch data
    const dispatch = useDispatch();
    return (
        <div>
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={relatedItem.strMealThumb}
            >
                <div /* style={{ cursor: 'pointer' }} href="#" onClick={detailsHandler} */>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {relatedItem.strMeal}
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
                        ৳{relatedItem.idMeal}
                    </span>
                    <button
                        onClick={() => dispatch(addToCart({
                            id: relatedItem.idMeal,
                            name: relatedItem.strMeal,
                            image: relatedItem.strMealThumb,
                            category: relatedItem.strCategory,
                            price: relatedItem.idMeal,
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

export default RelatedCard;