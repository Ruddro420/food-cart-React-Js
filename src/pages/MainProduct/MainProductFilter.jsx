/* eslint-disable react/prop-types */

import { Select } from "flowbite-react";

const MainProductFilter = ({ setMin, setMax, area, setSelectArea }) => {

    return (
        <>
            <div>
                <h3 className="font-bold mb-5">Filter With Price Range</h3>
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
                <h3 className="font-bold mb-5 mt-5">Filter With Area</h3>
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
        </>
    );
};

export default MainProductFilter;