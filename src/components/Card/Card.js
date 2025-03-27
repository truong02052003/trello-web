import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
    const { card, onDeleteCard, onEditCard } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(card.title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setNewTitle(e.target.value); // Không dùng trim(), giữ nguyên khoảng trắng
    };

    const handleBlur = () => {
        onEditCard(card.id, newTitle);
        setIsEditing(false);
    };

    return (
        <div className="card-content">
            {isEditing ? (
                <input 
                    type="text"
                    value={newTitle}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    onKeyDown={(e) => e.key === "Enter" && handleBlur()} 
                    autoFocus
                    className="input-card"
                />
            ) : (
                <li className="card-item" onClick={handleEdit}>{card.title}</li>
            )}
            <button style={{ border: "none" }} onClick={() => onDeleteCard(card.id)}>x</button>
        </div>
    );
};

export default Card;
