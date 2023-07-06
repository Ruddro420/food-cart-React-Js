import { useLoaderData } from "react-router-dom";
import BestFood from "../../components/Home/BestFood";
import HomeCarousel from "../../components/Home/HomeCarousel";


const Home = () => {
    const bestFood = useLoaderData();
    return (
        <div>
            <HomeCarousel />
            <BestFood bestFood={bestFood.data.meals} />
        </div>
    );
};

export default Home;