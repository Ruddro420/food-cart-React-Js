import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import './MainProduct.css'
import MainProductCard from "./MainProductCard";
import MainProductFilter from "./MainProductFilter";
import axios from "axios";

const MainProduct = () => {
    const [produts, setProducts] = useState([]);
    const [area, setArea] = useState([])
    const [selectArea, setSelectArea] = useState('');

    const loadData = useLoaderData();
    // Price Range Filter
    const [min, setMin] = useState()
    const [max, setMax] = useState()

    // Load Data
    useEffect(() => {
        setProducts(loadData.data.meals)
    }, [area])

    // load Area
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(function (response) {
                setArea(response.data.meals);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    // load Area based Data 
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectArea}`)
            .then(function (response) {
                setProducts(response.data.meals);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [selectArea])

    console.log(produts);

    return (
        <div>
            <div className="main-product-container">
                <div className="main-left">
                    <MainProductFilter
                        setMin={setMin}
                        setMax={setMax}
                        area={area}
                        setSelectArea={setSelectArea}
                    />
                </div>
                <div className="main-right">


                    {(() => {
                        if (min > 0 || max > 0) {
                            return (
                                produts && produts.filter(item => item.idMeal >= min && item.idMeal <= max)
                                    .map(product =>
                                        <MainProductCard key={product.idMeal} mainProduct={product} />
                                    )
                            )
                        }/*  else if (selectArea) {
                            return (
                                areaData && areaData.map(product =>
                                    <MainProductCard key={product.idMeal} mainProduct={product} />
                                )
                            )
                        } */ else {
                            return (
                                produts && produts.map(product =>
                                    <MainProductCard key={product.idMeal} mainProduct={product} />
                                )
                            )
                        }
                    })()}


                    {/* {
                        produts.map(product =>
                            <MainProductCard key={product.idMeal} mainProduct={product} />
                        )
                    } */}
                </div>
            </div>
        </div>
    );
};

export default MainProduct;