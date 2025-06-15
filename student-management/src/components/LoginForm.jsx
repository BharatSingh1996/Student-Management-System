import React from "react";
import { Box, Button, Paper, TextField, Typography, Link } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const LoginForm = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // login logic
    };

    return (
        <Paper
            elevation={6}
            sx={{
                padding: 4,
                borderRadius: 3,
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 244, 248, 0.95))",
                backdropFilter: "blur(8px)", // Glassmorphism effect
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #1e3a8a, #3b82f6)", // Gradient top border
                },
            }}
        >
            {/* Title with Icon */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 32, color: "#1e3a8a" }} />
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                        color: "#1e3a8a",
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    Student Login
                </Typography>
            </Box>

            {/* Form */}
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "& fieldset": {
                                borderColor: "#3b82f6",
                            },
                            "&:hover fieldset": {
                                borderColor: "#1e3a8a",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#1e3a8a",
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: "#666",
                            "&.Mui-focused": {
                                color: "#1e3a8a",
                            },
                        },
                    }}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                    sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "& fieldset": {
                                borderColor: "#3b82f6",
                            },
                            "&:hover fieldset": {
                                borderColor: "#1e3a8a",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#1e3a8a",
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: "#666",
                            "&.Mui-focused": {
                                color: "#1e3a8a",
                            },
                        },
                    }}
                />
                <Box textAlign="right" mb={2}>
                    <Link
                        href="#forgot"
                        underline="none"
                        sx={{
                            color: "#3b82f6",
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 500,
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: "#1e3a8a",
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Forgot password?
                    </Link>
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
                        borderRadius: "8px",
                        padding: "12px 0",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        textTransform: "none",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.02)",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                            background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
                        },
                    }}
                >
                    Login
                </Button>
            </form>

            {/* Register Link */}
            <Box textAlign="center" mt={2}>
                <Typography variant="body2" sx={{ color: "#666", fontFamily: "'Roboto', sans-serif" }}>
                    Don’t have an account?{" "}
                    <Link
                        href="#register"
                        sx={{
                            color: "#3b82f6",
                            fontWeight: 500,
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: "#1e3a8a",
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Register
                    </Link>
                </Typography>
            </Box>
        </Paper>
    );
};

export default LoginForm;