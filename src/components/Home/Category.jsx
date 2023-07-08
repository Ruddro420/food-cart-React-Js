import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
    const [category, setCategory] = useState([]);
    const [data, setData] = useState(6)
    const [dataLength, setDataLength] = useState(0)
    // navigate
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [data]);

    const fetchData = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategory(response.data.categories.slice(0, data))
        setDataLength(response.data.categories.length)
    }
    // load More
    const loadMoreHandler = () => {
        setData(data => data + 6)
    }
    // details handler
    const categoryDetailsHangler = (id) => {
        console.log(id);
        navigate(`/category/${id}`)
    }
    return (
        <div className="category-main-container  shadow-2xl p-5">
            <h1>Best Categories</h1>
            <div className="category-container">
                {
                    category && category.map(item => {
                        return (
                            <Card
                                onClick={() => categoryDetailsHangler(item.strCategory)}
                                key={item.idCategory}
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc={item.strCategoryThumb}
                                style={{ cursor: 'pointer' }}
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        {item.strCategory}
                                    </p>
                                </h5>
                            </Card>
                        )
                    })
                }
            </div>
            {
                data < dataLength ? <div className="load-more mt-5">
                    <center>
                        <Button
                            onClick={loadMoreHandler}
                            gradientDuoTone="cyanToBlue"
                            outline
                        >
                            <p>
                                Load More
                            </p>
                        </Button>
                    </center>
                </div>
                    :
                    ''
            }

        </div>
    );
};

export default Category;