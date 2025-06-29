import React, { useState } from "react";
import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
    Link
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { BaseUrl, Apis } from "../constants/Apis";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authSlice";
import { setUser } from "../store/userSlice";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
    const [email, setEmail] = useState("admin@gmail.com");
    const [password, setPassword] = useState("password123");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await axios.post(BaseUrl + Apis.LOGIN_USER, {
                email,
                password,
            });

            const { accessToken, refreshToken } = response.data;

            if (response.status === 200 && accessToken) {
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                const decoded = jwtDecode(accessToken);
                const user = {
                    username: decoded.username,
                    email: decoded.sub,
                    roles: decoded.roles,
                };

                dispatch(setAuthenticated(true));
                dispatch(setUser(user));

                toast.success("Login successful!");
                navigate("/dashboard");
            }
        } catch (err) {
            const errorMessage = err?.response?.data?.message || "Login failed. Please try again.";
            setError(errorMessage);
            toast.error(`${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper
            elevation={6}
            sx={{
                padding: 4,
                borderRadius: 3,
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 244, 248, 0.95))",
                backdropFilter: "blur(8px)",
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
                    background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
                },
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 32, color: "#1e3a8a" }} />
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#1e3a8a", fontFamily: "'Poppins', sans-serif" }}
                >
                    Student Login
                </Typography>
            </Box>

            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={textFieldStyle}
                />

                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={textFieldStyle}
                />

                {error && (
                    <Typography color="error" mb={2} textAlign="center">
                        {error}
                    </Typography>
                )}

                <Box textAlign="right" mb={2}>
                    <Link href="#forgot" underline="none" sx={{ color: "#3b82f6", fontWeight: 500 }}>
                        Forgot password?
                    </Link>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={buttonStyle}
                >
                    {loading ? <Loader size={24} color="inherit" /> : "Login"}
                </Button>
            </form>

            <Box textAlign="center" mt={2}>
                <Typography variant="body2" sx={{ color: "#666" }}>
                    Don’t have an account?{" "}
                    <Link href="#register" sx={{ color: "#3b82f6", fontWeight: 500 }}>
                        Register
                    </Link>
                </Typography>
            </Box>
        </Paper>
    );
};

// 🔁 Extracted styles
const textFieldStyle = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        "& fieldset": { borderColor: "#3b82f6" },
        "&:hover fieldset": { borderColor: "#1e3a8a" },
        "&.Mui-focused fieldset": { borderColor: "#1e3a8a" },
    },
    "& .MuiInputLabel-root": {
        color: "#666",
        "&.Mui-focused": { color: "#1e3a8a" },
    },
};

const buttonStyle = {
    background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
    borderRadius: "8px",
    padding: "12px 0",
    fontWeight: 600,
    fontSize: "1.1rem",
    textTransform: "none",
    "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        background: "linear-gradient(90deg, #1e3a8a, #3b82f6)",
    },
};

export default LoginForm;
