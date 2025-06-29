import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = () => {
    const { isAuthenticated, authChecked } = useSelector((state) => state.auth);

    console.log(" isAuthenticated ", isAuthenticated, ":;  authChecked ", authChecked);

    if (!authChecked) {
        return <Loader message="Checking auth..." />;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
