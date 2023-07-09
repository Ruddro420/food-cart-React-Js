import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to='/dashboard-page/order'>
                            <Sidebar.Item
                                label="Pro"
                                labelColor="dark"
                            >
                                <p>
                                    Order
                                </p>
                            </Sidebar.Item>
                        </Link>
                        <Link to='/dashboard-page/payment'>
                            <Sidebar.Item
                                href="#"
                                label="3"
                            >
                                <p>
                                    Payment
                                </p>
                            </Sidebar.Item>
                        </Link>
                        <Link to='/dashboard-page/profile'>
                            <Sidebar.Item
                                href="#"
                            >
                                <p>
                                    Profile
                                </p>
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default SideBar;