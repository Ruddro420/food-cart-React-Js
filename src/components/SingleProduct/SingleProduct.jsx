/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleCard from "./SingleCard";
import RelatedCard from "./RelatedCard";
import './SingleProduct.css'

const SingleProduct = () => {
    const [storeData, setStoreData] = useState([]);
    const [relatedData, setRelatedData] = useState([]);
    //get Data
    const location = useLocation();
    useEffect(() => {
        setStoreData(location.state)
    }, [location])
    // load related data
    useMemo(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${storeData.strCategory}`)
            .then(res => res.json())
            .then(data => setRelatedData(data.meals))
    }, [storeData.strCategory])
    console.log(relatedData);
    return (
        <div>
            <SingleCard storeData={storeData} />
            {
                storeData.strCategory ? <div className="related-product my-20">
                    <h1 className="text-5xl">Related Product</h1>
                    <div className="realted-single-product">
                        {
                            relatedData && relatedData.map((relatedItem, i) =>
                                <RelatedCard key={i} relatedItem={relatedItem} />
                            )
                        }
                    </div>
                </div>
                    :
                    ''
            }

        </div>

    );
};

export default SingleProduct;