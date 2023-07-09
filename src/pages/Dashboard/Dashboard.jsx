import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideBar from "./SideBar";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <div>
                    <SideBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;