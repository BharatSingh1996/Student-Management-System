import React, { useState } from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider,
    Typography,
} from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardHeader from "../components/DashboardHeader"; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // For navigation
import { useSelector } from "react-redux";

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const [activeItem, setActiveItem] = useState("Dashboard");
    const navigate = useNavigate();


    const { username, roles } = useSelector((state) => state.user);

    console.log("Logged in as:", username);
    console.log("Role(s):", roles.join(", "));

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const menuItems = [
        { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
        { text: "Courses", icon: <BookIcon />, path: "/courses" },
        { text: "Students", icon: <PeopleIcon />, path: "/students" },
        { text: "Reports", icon: <AssessmentIcon />, path: "/reports" },
        { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    ];

    const handleMenuClick = (path) => {
        setActiveItem(path.split("/").pop()); // Update active item based on path
        navigate(path); // Navigate to the selected path
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: open ? 240 : 64,
                    transition: "width 0.3s",
                    "& .MuiDrawer-paper": {
                        width: open ? 240 : 64,
                        transition: "width 0.3s",
                        backgroundColor: "#1e3a8a",
                        color: "#ffffff",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        p: 1,
                    }}
                >
                    <IconButton onClick={handleDrawerToggle} sx={{ color: "#ffffff" }}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
                <Divider sx={{ backgroundColor: "#3b82f6" }} />
                <List>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.text}
                            onClick={() => handleMenuClick(item.path)}
                            sx={{
                                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                                backgroundColor:
                                    activeItem === item.text ? "rgba(255, 255, 255, 0.2)" : "transparent",
                            }}
                        >
                            <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <DashboardHeader userName={username} userRole={roles.join(", ")} />
                <Box
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: "#f0f4f8",
                        overflow: "auto",
                    }}
                >
                    <Typography variant="h4" sx={{ color: "#1e3a8a", mb: 2 }}>
                        Welcome to Dashboard
                    </Typography>
                    <Typography variant="body1">
                        This is a placeholder for your dashboard content. Add charts, tables, or other
                        components here!
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;