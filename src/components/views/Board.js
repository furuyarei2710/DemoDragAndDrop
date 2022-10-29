import React, { useEffect, useRef, useState, useContext } from "react";
import _ from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import ListItems from "../ListItems";
import Input from "./Input";
import { InputContext } from "./Input";

// return <ListItems provided={provided} items={column.items} inputRef = {inputRef}  />;
const LOCAL_STORAGE_KEY = "columns";
function Board() {
  const [columns, setColumns] = useState({
    notStarted: {
      id: v4(),
      title: "not started",
      items: [],
    },
    inProgress: {
      id: v4(),
      title: "in progress",
      items: [],
    },
    completed: {
      id: v4(),
      title: "completed",
      items: [],
    },
  });
  // const [input, setInput] = useState("");
  // const input = useContext(InputContext);
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns));
  // }, [columns]);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    let itemCopy = {
      ...columns[source.droppableId].items[source.index]
    };
    itemCopy ={...itemCopy, name: "1234"};
    
    console.log("Item Copy Dragged: ", JSON.stringify(itemCopy));
    setColumns((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
    return itemCopy;
  };

  const addItem = (columnID) => {
    const newItem = {
      id: v4(),
      name: "",
    };
    // const newItem = {
    //   id: v4(),
    //   name: input,
    // };
    setColumns((prev) => {
      prev = { ...prev };
      prev[columnID].items.push(newItem);
      return prev;
    });
    console.log("Item added: " + JSON.stringify(newItem));

    return newItem;
  };
  return (
    <div className="Board">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(columns, (column, key) => {
          {console.log(`Column ${key}`, column)}
          const columnID = column.id;
          return (
            <div
              key={key}
              className="column"
              column_key={`${key}`}
              column_id={columnID}
            >
              <h3>{column.title}</h3>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      className="itemContainer"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {column.items.map((element, index) => {
                        const itemID = element.id;
                        return (
                          <Draggable
                            key={element.id}
                            index={index}
                            draggableId={element.id}
                          >
                            {(provided, snapshot) => {
                              console.log(provided);
                              {/* console.log(snapshot); */}
                              return (
                                <div
                                  className="item"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  itemID={itemID}
                                >
                                  {/* Input component */}
                                  <Input
                                    className={"itemInput"}
                                    type={"text"}
                                    placeholder={"Enter your task"}
                                    name={"todo"}
                                  />
                                  {/* <input
                                    className="itemInput"
                                    name="todo"
                                    value={input}
                                    placeholder="Enter your task"
                                    onChange={(e) => setInput(e.target.value)}
                                  /> */}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
              <button
                className="addBtn"
                type="submit"
                onClick={(e) =>
                  addItem(e.target.parentElement.getAttribute("column_key"))
                }
              >
                +
              </button>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Board;
