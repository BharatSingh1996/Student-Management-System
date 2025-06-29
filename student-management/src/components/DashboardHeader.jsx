import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { clearUser } from "../store/userSlice";
import { toast } from "react-toastify";

const DashboardHeader = ({ userName, userRole }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        dispatch(setAuthenticated(false));
        dispatch(clearUser());

        navigate("/login");
        toast.success("Logged out successfully!");
    };

    const handleProfile = () => {
        handleMenuClose();
        navigate("/profile");
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#e3dbd1",
                color: "#1e3a8a",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                    variant="h6"
                    sx={{
                        mr: 2,
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 500,
                    }}
                >
                    {userName} ({userRole})
                </Typography>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                    <AccountCircleIcon sx={{ fontSize: 32 }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem onClick={handleProfile}>
                        <PersonIcon sx={{ mr: 1 }} /> User Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <LogoutIcon sx={{ mr: 1 }} /> Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardHeader;