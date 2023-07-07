import axios from "axios";

// for homepage best food
async function BestProduct() {
    const bestFood = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=as');
    return bestFood;
}
// for main food
async function LoadMainProduct() {
    const MainFood = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=a');
    return MainFood;
}

// for area food
async function AreaFilter() {
    const AreaFood = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    return AreaFood;
}


export { BestProduct, LoadMainProduct, AreaFilter }