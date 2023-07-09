/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
    const userInfo = useSelector(state => state.foodCart.userInfo);
    if (!userInfo) {
        return <Navigate to="/login-page" state={{ from: history.location }} />
    }
    return children
}

export default Protected;