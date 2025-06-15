import React, { useEffect, useState } from "react";
import { Box, Typography, Fade } from "@mui/material";

const carouselItems = [
    {
        img: "https://picsum.photos/300/300?random=1",
        quote: "Success is not just about making good grades but also about making a positive impact on the world.",
    },
    {
        img: "https://picsum.photos/300/300?random=2",
        quote: "Push yourself, because no one else is going to do it for you.",
    },
    {
        img: "https://picsum.photos/300/300?random=3",
        quote: "Hard work beats talent when talent doesn’t work hard.",
    },
    {
        img: "https://picsum.photos/300/300?random=4",
        quote: "Every expert was once a beginner. Keep pushing forward.",
    },
];

// Component for a single card with its own transition
const CarouselCard = ({ items, delay }) => {
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % items.length);
                setFadeIn(true);
            }, 300); // Smooth transition duration
        }, 4000 + delay); // 4 seconds per slide + staggered delay

        return () => clearInterval(interval);
    }, [items.length, delay]);

    // Fallback image if the primary image fails to load
    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
    };

    return (
        <Fade in={fadeIn} timeout={500}>
            <Box
                sx={{
                    color: "white",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Adjusted for better spacing
                    alignItems: "center",
                    background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", // Educational blue gradient
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Card-like shadow
                    p: 3,
                    height: "400px", // Fixed height for consistency
                    width: "100%",
                    maxWidth: "350px", // Limit card width
                }}
            >
                {/* Image Container - Increased Size */}
                <Box
                    sx={{
                        height: 260, // Increased from 200 to 260
                        width: 260, // Increased from 200 to 260
                        overflow: "hidden",
                        borderRadius: "16px",
                        mb: 1, // Reduced margin to fit within card
                        border: "2px solid #ffffff33", // Subtle border for image
                    }}
                >
                    <img
                        src={items[index].img}
                        alt={`Student ${index + 1}`}
                        onError={handleImageError}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "16px",
                        }}
                    />
                </Box>

                {/* Quote - Adjusted for Smaller Space */}
                <Typography
                    variant="body2" // Changed from body1 to body2 for smaller text
                    fontWeight={400}
                    sx={{
                        fontStyle: "italic",
                        fontFamily: "'Georgia', serif", // Academic font style
                        color: "#f0f4f8",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Subtle text shadow
                        px: 2,
                        lineHeight: 1.4, // Adjusted for readability
                    }}
                >
                    "{items[index].quote}"
                </Typography>
            </Box>
        </Fade>
    );
};

const StudentCarousel = () => {
    // We'll display three cards, each cycling through all items
    const cardCount = 3;

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr", // Stack vertically on small screens
                    sm: "repeat(2, 1fr)", // Two columns on small-medium screens
                    md: "repeat(3, 1fr)", // Three columns on medium and up
                },
                gap: 3, // Space between cards
                width: "100%",
                maxWidth: "1200px", // Limit the width for larger screens
                p: 4,
                justifyItems: "center",
                alignItems: "center",
            }}
        >
            {Array.from({ length: cardCount }).map((_, i) => (
                <CarouselCard
                    key={i}
                    items={carouselItems}
                    delay={i * 500} // Staggered delay: 0ms, 500ms, 1000ms
                />
            ))}
        </Box>
    );
};

export default StudentCarousel;