// import TodoList from "./components/TodoList";
// import AddTodos from "./components/AddTodos";
// import React from "react";
// import { v4 as uuidv4 } from "uuid";

// const filterItem = (items = [], status = "") => {
//   switch (status) {
//     case "all":
//       return items;
//     case "active":
//       return items.filter((todo) => !todo.completed);
//     case "complete":
//       return items.filter((todo) => todo.completed);
//     default:
//       return items;
//   }
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       todoFilter: [],
//       trigger: false,
//       todoToShow: "all"
//     };
//     this.filterTodoCompleted = this.filterTodoCompleted.bind(this);
//     this.filterClear = this.filterClear.bind(this);
//     this.filterTodoNotCompleted = this.filterTodoNotCompleted.bind(this);
//     //this.handleUpdate = this.handleUpdate(this);
//   }
//   handleTick = async (kaka) => {
//     const uuid = uuidv4();
//     const newApp = this.state.todos.map((todo) => {
//       if (todo === kaka)
//         return {
//           text: todo.text,
//           completed: !todo.completed,
//           uuid: uuid,
//         };
//       else return todo;
//     });
//     await this.setState({ todos: newApp });
//     console.log(newApp);
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };
//   selects = async () => {
//     const uuid = uuidv4();
//     const newApp = this.state.todos.map((todo) => {
//       if (this.state.trigger === false)
//         return { text: todo.text, completed: true, uuid: uuid };
//       else if (this.state.trigger === true)
//         return { text: todo.text, completed: false, uuid: uuid };
//       else return todo;
//     });
//     this.setState({ trigger: !this.state.trigger });
//     await this.setState({ todos: newApp });
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };
//   handleUpdate = async (todo, tada) => {
//     const uuid = uuidv4();
//     const newFix = this.state.todos.map((_todo) => {
//       if (_todo.uuid === tada.uuid)
//         return { completed: _todo.completed, text: todo, uuid: uuid };
//       else return _todo;
//     });
//     await this.setState({ todos: newFix });
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };
//   handleDelete = async (hahaha) => {

//     const newFix = this.state.todos.filter((todo) => todo !== hahaha);

//     await this.setState({ todos: newFix });
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };

//   filterClear = () => {
//     this.setState({ todoFilter: [] });
//   };
//   filterTodoCompleted = async () => {
//     const todoCompleted = this.state.todos.map((todo) => {
//       if (todo.completed === true) return todo;
//       else return "";
//     });
//     await this.setState({ todoFilter: todoCompleted });
//     console.log(this.state.todoFilter);
//   };
//   filterTodoNotCompleted = async () => {
//     const todoNotCompleted = this.state.todos.map((todo) => {
//       if (todo.completed === false) return todo;
//       else return "";
//     });
//     await this.setState({ todoFilter: todoNotCompleted });
//     console.log(this.state.todoFilter);
//   };

//   updateTodoToShow = (s) => {
//     this.setState({
//       todoToShow: s,
//     });
//   };

//   render() {
//     let todos = filterItem(this.state.todos, this.state.todoToShow);

//     return (
//       <div>
//         <AddTodos addTodoFn={this.addTodo}></AddTodos>
//         <TodoList
//           updateTodoFn={this.updateTodo}
//           handleUpdate={this.handleUpdate}
//           handleDelete={this.handleDelete}
//           selects={this.selects}
//           handleTick={this.handleTick}
//           handleDeleteAll={this.handleDeleteAll}
//           trigger={this.state.trigger}
//           todos={todos}
//         />

//         <div className="wrap">
//           <div>
//             Todos left:{" "}
//             {this.state.todos.filter((todo) => !todo.completed).length}
//           </div>
//           <div>
//             <button onClick={() => this.updateTodoToShow("all")}>All</button>
//             <button onClick={() => this.updateTodoToShow("active")}>
//               Active
//             </button>
//             <button onClick={() => this.updateTodoToShow("complete")}>
//               Completed
//             </button>
//             {this.state.todos.some((todo) => todo.complete) ? (
//               <button onClick={this.removeAllTodosThatAreComplete}>
//                 {" "}
//                 Remove all
//               </button>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   componentDidMount = () => {
//     const todos = localStorage.getItem("todos");
//     if (todos) {
//       const savedTodos = JSON.parse(todos);
//       this.setState({ todos: savedTodos });
//     } else {
//       console.log("No todos");
//     }
//   };
//   addTodo = async (todo) => {
//     const uuid = uuidv4();
//     await this.setState({
//       todos: [
//         ...this.state.todos,
//         {
//           text: todo,
//           completed: false,
//           uuid: uuid,
//         },
//       ],
//     });
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };
//   updateTodo = async (todo) => {
//     const uuid = uuidv4();
//     const newTodos = this.state.todos.map((_todo) => {
//       if (todo === _todo)
//         return {
//           completed: true,
//           text: todo.text,
//           uuid: uuid,
//         };
//       else return _todo;
//     });
//     await this.setState({ todos: newTodos });
//     localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   };
// }
// export default App;

import TodoList from "./components/TodoList";
import AddTodos from "./components/AddTodos";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const filterItem = (items = [], status = "") => {
  switch (status) {
    case "all":
      return items;
    case "active":
      return items.filter((todo) => !todo.completed);
    case "complete":
      return items.filter((todo) => todo.completed);
    default:
      return items;
  }
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState([]);
  const [trigger, setTrigger] = useState([]);
  const [todoToShow, setTodoToshow] = useState([]);

  const handleTick = (kaka) => {
    const uuid = uuidv4();
    const newApp = todos.map((todo) => {
      if (todo === kaka)
        return {
          text: todo.text,
          completed: !todo.completed,
          uuid: uuid,
        };
      else return todo;
    });
    setTodos(newApp);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const selects = () => {
    const uuid = uuidv4();
    const newApp = todos.map((todo) => {
      if (trigger === false)
        return { text: todo.text, completed: true, uuid: uuid };
      else if (trigger === true)
        return { text: todo.text, completed: false, uuid: uuid };
      else return todo;
    });
    setTrigger(!trigger);
    setTodos(newApp);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleUpdate = async (todo, tada) => {
    const uuid = uuidv4();
    const newFix = todos.map((_todo) => {
      if (_todo.uuid === tada.uuid)
        return { completed: _todo.completed, text: todo, uuid: uuid };
      else return _todo;
    });
    setTodos(newFix);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleDelete = async (hahaha) => {
    const newFix = todos.filter((todo) => todo !== hahaha);
    setTodos(newFix);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const filterClear = () => {
    setTodoFilter([]);
  };
  const filterTodoCompleted = async () => {
    const todoCompleted = todos.map((todo) => {
      if (todo.completed === true) return todo;
      else return "";
    });
    setTodoFilter(todoCompleted);
  };
  const filterTodoNotCompleted = async () => {
    const todoNotCompleted = todos.map((todo) => {
      if (todo.completed === false) return todo;
      else return "";
    });
    setTodoFilter(todoNotCompleted);
  };

  const updateTodoToShow = (s) => {
    setTodoToshow(s);
  };

  const addTodo = (todo) => {
    const uuid = uuidv4();

    setTodos([
      ...todos,
      {
        text: todo,
        completed: false,
        uuid: uuid,
      },
    ]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const updateTodo = async (todo) => {
    const uuid = uuidv4();
    const newTodos = todos.map((_todo) => {
      if (todo === _todo)
        return {
          completed: true,
          text: todo.text,
          uuid: uuid,
        };
      else return _todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      setTodos(savedTodos);
    } else {
      console.log("No todos");
    }
  }, []);

  let _todos = filterItem(todos, todoToShow);
  return (
    <div>
      <AddTodos addTodoFn={addTodo}></AddTodos>
      <TodoList
        updateTodoFn={updateTodo}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        selects={selects}
        handleTick={handleTick}
        // handleDeleteAll={handleDeleteAll}
        trigger={trigger}
        todos={_todos}
      />

      <div className="wrap">
        <div>Todos left: {todos.filter((todo) => !todo.completed).length}</div>
        <div>
          <button onClick={() => updateTodoToShow("all")}>All</button>
          <button onClick={() => updateTodoToShow("active")}>Active</button>
          <button onClick={() => updateTodoToShow("complete")}>
            Completed
          </button>
          {todos.some((todo) => todo.complete) ? (
            // <button onClick={removeAllTodosThatAreComplete}> Remove all</button>
            <button> Remove all</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
