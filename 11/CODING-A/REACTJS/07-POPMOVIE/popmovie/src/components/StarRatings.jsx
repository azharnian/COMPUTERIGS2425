import { useState } from "react";
import Star from "./Star";

const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

const containerStarStyle = {
    display: "flex",
};

const textStyle = {
    lineHeight: "1",
    margin: "0",
};

export default function StarRatings({ max = 5, color, size = 20, onSetRating }) {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    function handleRating(rating) {
        setRating(rating);
        onSetRating(rating);
    }

    return (
        <div style={containerStyle}>
        <div style={containerStarStyle}>
            {Array.from({ length: max }, (_, i) => (
            <Star
                key={i}
                onRate={() => handleRating(i + 1)}
                full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                onHoverIn={() => setTempRating(i + 1)}
                onHoverOut={() => setTempRating(0)}
                color={color}
                size={size}
            />
            ))}
        </div>
        <p style={textStyle}>{tempRating || rating || ""}</p>
        </div>
    );
}