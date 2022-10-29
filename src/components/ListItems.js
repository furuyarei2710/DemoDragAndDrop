// import React, { useState, useEffect } from "react";
// import { Draggable } from "react-beautiful-dnd";
// import Item from "./Item";

// {/* <div className="itemInput" contentEditable={"true"} suppressContentEditableWarning={true}>{name}</div> */}
// {
//   /* <Item provided={provided} name={element.name} itemID={itemID} inputRef = {inputRef}  /> */
// }
// function ListItems({ provided, items, inputRef }) {
//   return (
//     <div
//       className="itemContainer"
//       ref={provided.innerRef}
//       {...provided.droppableProps}
//     >
//       {items.map((element, index) => {
//         const itemID = element.id;
//         return (
//           <Draggable key={element.id} index={index} draggableId={element.id}>
//             {(provided) => {
//               return (
//                 <div
//                   className="item"
//                   ref={provided.innerRef}
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   itemID={itemID}
//                 >
//                   <input
//                     className="itemInput"
//                     type="text"
//                     placeholder="Enter your task"
//                     value={input}
//                     onChange={(e) => {
//                       setInput(e.target.value);
//                     }}
//                     ref={inputRef}
//                   />
//                 </div>
//               );
//             }}
//           </Draggable>
//         );
//       })}
//       {provided.placeholder}
//     </div>
//   );
// }

// export default ListItems;
