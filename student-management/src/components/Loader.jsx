import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = ({ size = 24, color = "inherit" }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <CircularProgress size={size} color={color} />
        </Box>
    );
};

export default Loader;
