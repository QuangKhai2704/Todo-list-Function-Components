// import React from "react";
// import TodoItem from "../components/TodoItem";
// import { v4 as uuidv4 } from "uuid";

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { checked: true };
//     this.todosRef = [];
//     this.selects = this.selects.bind(this);
//     //this.handleUpdate = this.handleUpdate.bind(this);
//     this.handleDeleteAll = this.handleDeleteAll.bind(this);
//   }
//   selects() {
//     this.props.selects();
//   }

//   render() {
//     const uuid = uuidv4();
//     const { todos } = this.props;
//     return (
//       <div className="todoListContainer">
//         {todos.map((_todo, _index) => {
//           return (
//             <div key={_index}>
//               <TodoItem
//                 updateTodoFn={this.updateTodo}
//                 handleUpdate={this.handleUpdate}
//                 handleDelete={this.handleDelete}
//                 handleTick={this.handleTick}
//                 id={uuid}
//                 key={_index}
//                 todo={_todo}
//               ></TodoItem>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
//   updateTodo = (todo) => {
//     this.props.updateTodoFn(todo);
//   };
//   handleUpdate = (todo, tada) => {
//     this.props.handleUpdate(todo, tada);
//   };
//   handleDelete = (hahaha) => {
//     this.props.handleDelete(hahaha);
//   };
//   handleTick = (kaka) => {
//     this.props.handleTick(kaka);
//   };
//   handleDeleteAll = () => {
//     this.props.handleDeleteAll();
//   };
// }

// export default TodoList;

import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoList = (props) => {
  const [checked, setChecked] = useState(true);
  const selects = () => {
    props.selects();
  };
  const uuid = uuidv4();

  const updateTodo = (todo) => {
    props.updateTodoFn(todo);
  };
  const handleUpdate = (todo, tada) => {
    props.handleUpdate(todo, tada);
  };
  const handleDelete = (hahaha) => {
    props.handleDelete(hahaha);
  };
  const handleTick = (kaka) => {
    props.handleTick(kaka);
  };
  const handleDeleteAll = () => {
    props.handleDeleteAll();
  };
  return (
    <div className="todoListContainer">
      {props.todos.map((_todo, _index) => {
        return (
          <div key={_index}>
            <TodoItem
              updateTodoFn={updateTodo}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              handleTick={handleTick}
              id={uuid}
              key={_index}
              todo={_todo}
            ></TodoItem>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
