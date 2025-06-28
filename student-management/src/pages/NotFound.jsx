import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
            textAlign="center"
        >
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100, color: "#f44336" }} />

            <Typography variant="h2" fontWeight="bold" color="error">
                404
            </Typography>

            <Typography variant="h5" mt={1}>
                Oops! Page not found 😕
            </Typography>

            <Typography variant="body1" mt={1}>
                Are you lost? 🤔 Let’s get you back on track.
            </Typography>

            <Button
                variant="contained"
                color="warning"
                onClick={() => navigate("/")}
                sx={{ mt: 3 }}
            >
                🔙 Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
