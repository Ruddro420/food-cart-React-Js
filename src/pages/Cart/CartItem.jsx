import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeCart } from "../../redux/productSlice";

const CartItem = () => {
    // getData from redux
    const productData = useSelector(state => state.foodCart.productData)
    // dispatch
    const dispatch = useDispatch();
    return (
        <div>
            {
                productData.map(item => {
                    return (
                        <div key={item.id} className="rounded-lg">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                        <p className="mt-1 text-xs text-gray-700">{item.category}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <span onClick={() => dispatch(decrement({
                                                id: item.id
                                            }))} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input className="h-8 w-12 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                                            <span onClick={() => dispatch(increment({
                                                id: item.id
                                            }))} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">{item.price * item.quantity} ৳</p>
                                            <svg onClick={() => dispatch(removeCart({
                                                id: item.id
                                            }))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default CartItem;