import React, { useState } from "react";
import { Box, Typography, Link, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks = [
        { label: "News", href: "#news" },
        { label: "Fee", href: "#fee" },
        { label: "Toppers", href: "#toppers" },
        { label: "Contact", href: "#contact" },
    ];

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            sx={{
                px: { xs: 2, md: 4 },
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)", // Gradient background
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Pronounced shadow
                position: "relative",
                zIndex: 10,
            }}
        >
            {/* Left: Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SchoolIcon sx={{ fontSize: 32, color: "#ffffff", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.1)" } }} />
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        color: "#ffffff",
                        fontFamily: "'Poppins', sans-serif",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.05)" },
                    }}
                >
                    EduCoaching
                </Typography>
            </Box>

            {/* Right: Nav Links (Desktop) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        underline="none"
                        sx={{
                            color: "#f0f4f8",
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 500,
                            fontSize: "1.1rem",
                            position: "relative",
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: "#ffd700", // Gold on hover
                            },
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                width: "0%",
                                height: "2px",
                                bottom: "-4px",
                                left: "50%",
                                backgroundColor: "#ffd700",
                                transition: "width 0.3s ease, left 0.3s ease",
                            },
                            "&:hover:after": {
                                width: "100%",
                                left: "0",
                            },
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </Box>

            {/* Hamburger Menu (Mobile) */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: "#ffffff" }}>
                    <MenuIcon />
                </IconButton>
            </Box>

            {/* Drawer for Mobile Nav */}
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box
                    sx={{
                        width: 250,
                        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                        height: "100%",
                        color: "#ffffff",
                    }}
                >
                    <List>
                        {navLinks.map((link) => (
                            <ListItem
                                key={link.label}
                                onClick={handleDrawerToggle}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    },
                                }}
                            >
                                <Link href={link.href} underline="none" sx={{ color: "#f0f4f8", width: "100%" }}>
                                    <ListItemText primary={link.label} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;