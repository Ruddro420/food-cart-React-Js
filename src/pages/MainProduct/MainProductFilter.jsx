/* eslint-disable react/prop-types */

import { Select, TextInput } from "flowbite-react";

const MainProductFilter = ({ setMin, setMax, area, setSelectArea, category, setSelectCategory, inputChanged }) => {

    return (
        <>
            <div>
                <h3 className="font-bold mb-5">Search Food</h3>
                <div>
                    <TextInput
                        id="base"
                        sizing="md"
                        type="text"
                        placeholder="Search Here"
                        onChange={inputChanged}
                    />
                </div>
            </div>
            <div>
                <h3 className="font-bold mb-5 mt-5">Filter By Price Range</h3>
                <div className="price-range flex">
                    <div className="minimum">
                        <input onChange={(e) => setMin(e.target.value)} className="w-25 rounded" type="number" placeholder="Min" />
                    </div>
                    <div className="maximum ml-2">
                        <input onChange={(e) => setMax(e.target.value)} className="w-25 mr-5 rounded" type="number" placeholder="Max" />
                    </div>
                </div>
            </div>
            {/* Filter With Area */}
            <div>
                <h3 className="font-bold mb-5 mt-5">Filter By Area</h3>
                <div
                    className="max-w-md"
                    id="select"
                >
                    <Select
                        id="countries"
                        required
                        onChange={(e) => setSelectArea(e.target.value)}
                    >
                        {
                            area.map((item, i) =>
                                <option key={i}>
                                    {item.strArea}
                                </option>
                            )
                        }
                    </Select>
                </div>
            </div>
            {/* Filter By Category */}
            <div>
                <h3 className="font-bold mb-5 mt-5">Filter By Category</h3>
                <div className="gap-2 mt-3">
                    {
                        category.map((item, i) =>

                            <>
                                <div>
                                    <input
                                        className="m-2"
                                        key={i}
                                        type="checkbox"
                                        value={item.strCategory}
                                        onChange={(e) => setSelectCategory(e.target.value)} />
                                    <label>
                                        {item.strCategory}
                                    </label>
                                </div>
                            </>
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default MainProductFilter;