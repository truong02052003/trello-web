import React from "react";
import './BoardContent.css';
import { v4 as uuidv4 } from 'uuid';
import Column from "../Column/Column";
import Button from 'react-bootstrap/Button';
import { Data } from "../../data/data";
import { useEffect, useState } from "react";
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from "../../utilities/dragDrop";
const BoardContent = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);
    const [showAddList, setShowAddList] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');

    useEffect(() => {
        const boardData = Data.boards.find(item => item.id === 'board-1');
        if (boardData) {
            setBoard(boardData);
            setColumns(boardData.columns);
        }
    }, []);
    const onColumnDrop = (dropResult) => {
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult)
        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(column => column.id);
        newBoard.columns = newColumns;
        setColumns(newColumns);
        setBoard(newBoard);
    }
    const onCardDrop = (dropResult, columnId) => {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            console.log('kq', dropResult, 'column', columnId);
            let newColumns = [...columns];
            let currentColumn = newColumns.find(column => column.id === columnId)
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(card => card.id);
            let newBoard = { ...board, columns: newColumns };
            setColumns(newColumns);
            setBoard(newBoard);
        }
    };
    const handleAddNewColumn = () => {
        if (newColumnTitle.length === 0) return;

        const newColumn = {
            id: uuidv4(),
            title: newColumnTitle,
            cards: [],
            cardOrder: []
        };

        const newColumns = [...columns, newColumn];
        setColumns(newColumns);

        let newBoard = { ...board };
        newBoard.columns = newColumns;
        newBoard.columnOrder = newColumns.map(column => column.id);
        setBoard(newBoard);

        setNewColumnTitle('');
        setShowAddList(false);
    }
    const handleRemoveColumn = (columnId) => {
        const newColumns = columns.filter(col => col.id !== columnId);
        setColumns(newColumns);
    };
    const handleUpdateColumn = (updatedColumn) => {
        let newColumns = columns.map(col =>
            col.id === updatedColumn.id ? updatedColumn : col
        );
        setColumns(newColumns);
    
        let newBoard = { ...board, columns: newColumns };
        setBoard(newBoard);
    };
    
    return (
        <>
            <div className="board-colums">
                <Container className="board-col"
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    getChildPayload={index => columns[index]}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: "cards-drop-preview"
                    }}
                >
                    {columns && columns.length > 0 && columns.map((column, index) => {
                        return (
                            <Draggable key={column.id} >
                                <Column
                                    column={column}
                                    onCardDrop={onCardDrop}
                                    onDeleteColumn={handleRemoveColumn}
                                    onColumnDrop={handleUpdateColumn}
                                />

                            </Draggable>
                        )
                    })}
                    {!showAddList ? (
                        <div className="add-new-column" onClick={() => setShowAddList(true)}>
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
                        </div>
                    ) : (
                        <div className="content-add-column">
                            <input
                                className="form-control"
                                type="text"
                                value={newColumnTitle}
                                onChange={(e) => setNewColumnTitle(e.target.value)}
                            />
                            <div className="group-btn">
                                <button className="btn btn-primary" onClick={handleAddNewColumn}>
                                    Add list
                                </button>
                                <svg
                                    style={{ marginLeft: "10px", cursor: "pointer" }}
                                    onClick={() => setShowAddList(false)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
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
                    )}
                </Container>
            </div>

        </>
    )
}
export default BoardContent;