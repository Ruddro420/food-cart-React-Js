/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import './Category-page.css'

const CategoryPage = () => {

    // get categoyr data
    const params = useParams();

    const [catData, setCatData] = useState([])
    const loadData = useLoaderData()
    useEffect(() => {
        setCatData(loadData.meals)
    }, [loadData])
    // dispatch 
    const dispatch = useDispatch();
    console.log(params);
    return (
        <div>
            <h1 className="category-header text-4xl font-bold my-5 ml-20 border p-5 mr-20">Category : {params.id}</h1>
            <div className="category-page-container">
                {
                    catData.map(item => {
                        return (
                            <Card
                                key={item.idMeal}
                                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                imgSrc={item.strMealThumb}
                            >
                                <div>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        <p>
                                            {item.strMeal}
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
                                        ৳{item.idMeal}
                                    </span>
                                    <button
                                        onClick={() => dispatch(addToCart({
                                            id: item.idMeal,
                                            name: item.strMeal,
                                            image: item.strMealThumb,
                                            category: params.id,
                                            price: item.idMeal,
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
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CategoryPage;