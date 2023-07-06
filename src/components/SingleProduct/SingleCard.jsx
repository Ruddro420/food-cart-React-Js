/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const SingleCard = ({ storeData }) => {
    return (
        <div>
            <div className="antialiased my-20">
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <a href="#" className="hover:underline hover:text-gray-600">Home</a>
                            <span>
                                <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <a href="#" className="hover:underline hover:text-gray-600">{storeData.strCategory}</a>
                            <span>
                                <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <span>{storeData.strMeal}</span>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div x-data="{ image: 1 }" x-cloak>
                                    <div className="h-64 md:h-100 rounded-lg bg-gray-100 mb-4">
                                        <div x-show="image === 1" className="rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                                            <img style={{ width: '100%', height: '400px' }} src={storeData.strMealThumb} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{storeData.strMeal}</h2>
                                <p className="text-gray-500 text-sm">Area <a href="#" className="text-indigo-600 hover:underline">{storeData.strArea}</a></p>

                                <div className="flex items-center space-x-4 my-4">
                                    <div>
                                        <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                            <span className="text-indigo-400 mr-1 mt-1">৳ </span>
                                            <span className="font-bold text-indigo-600 text-3xl">{storeData.idMeal}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                                        <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                    </div>
                                </div>

                                <p className="text-gray-500">{storeData.strInstructions?.slice(0, 200)}</p>

                                <div className="flex py-4 space-x-4">
                                    <div className="relative">
                                        <div className="flex items-center border border-gray-200 rounded">
                                            <button
                                                type="button"
                                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            >
                                                &minus;
                                            </button>

                                            <input
                                                type="number"
                                                id="Quantity"
                                                value="1"
                                                className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                            />

                                            <button
                                                type="button"
                                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;