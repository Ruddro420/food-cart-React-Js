import { useLoaderData } from "react-router-dom";
import BestFood from "../../components/Home/BestFood";
import HomeCarousel from "../../components/Home/HomeCarousel";
import Category from "../../components/Home/Category";


const Home = () => {
    const bestFood = useLoaderData();
    return (
        <div>
            <HomeCarousel />
            <BestFood bestFood={bestFood.data.meals} />
            <Category />
        </div>
    );
};

export default Home;