import React, { useEffect, useState } from "react";
import './Column.css'
import Card from "../Card/Card";
import { Container, Draggable } from 'react-smooth-dnd';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import ConfirmModal from "../Common/ConfirmModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { type } from "@testing-library/user-event/dist/type";
const Column = (props) => {
    const { column, onCardDrop, onDeleteColumn, onColumnDrop } = props;
    const [showModal, setShowModal] = useState(false);
    const [titleColumn, setTitleColumn] = useState('');
    const [showAddCard, setShowAddCard] = useState(false);
    const [valueCard, setValueCard] = useState("");
    useEffect(() => {
        if (column && column.title)
            setTitleColumn(column.title);
    }, [column])
    const tonggleModal = () => {
        setShowModal(!showModal);
    }
    const cards = column.cards;

    const editColumn = (e) => {
        e.target.select();
    }
    const handleDeleteColum = () => {
        if (onDeleteColumn) {
            onDeleteColumn(column.id);
        }
        tonggleModal();
    };

    const handleAddCard = () => {
        if (valueCard === "") return;

        const newCard = {
            id: uuidv4(),
            boardId: column.boardId,
            columnId: column.id,
            title: valueCard,
        };

        let newColumn = { ...column }
        newColumn.cards = [...newColumn.cards, newCard];
        newColumn.cardOrder = newColumn.cards.map(card => card.id);
        if (onColumnDrop) {
            onColumnDrop(newColumn);
        }
        setValueCard("")
        setShowAddCard(false);
    };
    const handleDeleteCard = (cardId) => {
        let newColumn = { ...column };
        newColumn.cards = newColumn.cards.filter(card => card.id !== cardId);
        newColumn.cardOrder = newColumn.cards.map(card => card.id);

        if (onColumnDrop) {
            onColumnDrop(newColumn);
        }
    };

    const handleEditCard = (cardId, newTitle) => {
        let newColumn = { ...column };
        newColumn.cards = newColumn.cards.map(card =>
            card.id === cardId ? { ...card, title: newTitle } : card
        );

        if (onColumnDrop) {
            onColumnDrop(newColumn);
        }
    };

    return (
        <>
            <div className='colums'>
                <header className="column-drag-handle">
                    <div className="column-title">
                        <Form.Control
                            size={"sm"}
                            type="text"
                            value={titleColumn}
                            className="input-column"
                            onClick={editColumn}
                            onChange={(e) => setTitleColumn(e.target.value)}
                        />
                    </div>
                    <div className="column-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" size="sm">
                            ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={tonggleModal}>Remove this column...</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </header>
                <ul className="card-list">
                    <Container
                        {...column.props}
                        groupName="col"
                        onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
                        getChildPayload={index => cards[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >
                        {cards && cards.length > 0 && cards.map((card, index) => {
                            return (
                                <Draggable key={card.id} >
                                <Card card={card} onDeleteCard={handleDeleteCard} onEditCard={handleEditCard} />
                                </Draggable>
                            )
                        })}
                    </Container>
                </ul>
                {showAddCard === true &&
                    <div className="add-new-card">
                        <textarea style={{ fontSize: "20px", boxShadow: "0 1px 1px rgba(0, 0, 0, 0.4)" }}
                            className="form-control"
                            type="text"
                            value={valueCard}
                            onChange={(e) => setValueCard(e.target.value)}>
                        </textarea>

                        <div className="group-btn">
                            <button onClick={handleAddCard} className="btn btn-primary" >
                                Add card
                            </button>
                            <svg
                                style={{ marginLeft: "10px", cursor: "pointer" }}

                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24" onClick={() => setShowAddCard(false)}
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                }
                {showAddCard === false &&
                    <footer onClick={() => setShowAddCard(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M13 7a1 1 0 10-2 0v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span>Add new</span>
                    </footer>
                }
            </div>
            <ConfirmModal
                show={showModal}
                title={"Remove a column"}
                content={`Are you sure to remove this column:${column.title}`}
                onActive={handleDeleteColum}
                onClose={tonggleModal}
            />
        </>
    )
}
export default Column;