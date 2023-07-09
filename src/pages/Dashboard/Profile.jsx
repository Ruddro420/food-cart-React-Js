import { Card } from "flowbite-react";

import { useSelector } from "react-redux";


const Profile = () => {
    const userInfo = useSelector(state => state.foodCart.userInfo)

    return (
        <div>
            <Card>

                <div className="flex flex-col items-center pb-10">
                    <img
                        alt={userInfo?.name}
                        className="mb-3 rounded-full shadow-lg"
                        height="96"
                        src={userInfo?.image}
                        width="96"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {userInfo?.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {userInfo?.email}
                    </span>

                </div>
            </Card>
        </div>
    );
};

export default Profile;