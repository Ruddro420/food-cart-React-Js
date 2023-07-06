import axios from "axios";

export async function BestProduct() {
    const bestFood = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=as');
    return bestFood;
}