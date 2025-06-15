import React from "react";
import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";
import StudentCarousel from "../components/StudentCarousel";
import Header from "../components/Header";

const LoginPage = () => {
    return (
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <Box
                sx={{
                    flexShrink: 0,
                    position: "relative",
                    "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "10%",
                        right: "10%",
                        height: "4px",
                        background: "linear-gradient(90deg, #1e3a8a, #8b008b, rgb(234, 211, 203))", // Matching gradient
                        borderRadius: "2px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
                        clipPath: "polygon(0% 0%, 5% 100%, 95% 100%, 100% 0%)", // Slight wave effect
                    },
                }}
            >
                <Header />
            </Box>

            {/* Main Content */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium and up
                    position: "relative",
                }}
            >
                {/* Carousel Area - 50% width on larger screens */}
                <Box
                    sx={{
                        flex: { xs: "none", md: 1 }, // Full width on small screens, 50% on medium and up
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 4,
                        minHeight: { xs: "auto", md: "100%" }, // Ensure full height on larger screens
                        background: "linear-gradient(45deg, #1e3a8a, #8b008b, rgb(234, 211, 203))", // Vibrant gradient
                        backgroundSize: "400%", // For animation effect
                        animation: "gradientShift 15s ease infinite", // Dynamic shifting gradient
                        position: "relative",
                        "&:before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')", // Subtle geometric texture
                            opacity: 0.1, // Very faint to avoid distraction
                            backgroundSize: "150px 150px",
                        },
                        "&:after": {
                            content: '""',
                            position: "absolute",
                            top: "10%",
                            bottom: "10%",
                            right: 0,
                            width: "4px",
                            background: "linear-gradient(180deg, #1e3a8a, #8b008b, rgb(234, 211, 203))", // Matching gradient
                            borderRadius: "2px",
                            boxShadow: "2px 0 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
                            clipPath: "polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%)", // Slight angle effect
                            display: { xs: "none", md: "block" }, // Only show on medium screens and up
                        },
                        "@keyframes gradientShift": {
                            "0%": { backgroundPosition: "0% 50%" },
                            "50%": { backgroundPosition: "100% 50%" },
                            "100%": { backgroundPosition: "0% 50%" },
                        },
                    }}
                >
                    <StudentCarousel />
                </Box>

                {/* Login Area - fixed width, right-aligned */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "400px" }, // Full width on small screens, fixed on medium and up
                        backgroundColor: "#f5f5f5",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 2,
                        py: 4,
                    }}
                >
                    <Box sx={{ width: "100%", maxWidth: 360 }}>
                        <LoginForm />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;