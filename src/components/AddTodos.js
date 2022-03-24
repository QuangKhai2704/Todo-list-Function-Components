// import React from "react";

// class AddTodos extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todo: "",
//     };
//   }
//   render() {
//     return (
//       <div className="addTodosContainer">
//         <h1 style={{ width: "100%", textAlign: "center" }}>Todos </h1>
//         <div style={{ display: "flex" }}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {
//               <div className="checkbox-wrapper">
//                 <input type="checkbox" id="xyz" onChange={this.selects} />
//                 <label htmlFor="xyz"></label>
//               </div>
//             }
//           </div>
//           <div style={{ flex: 1 }}>
//             <form onSubmit={(e) => this.submitTodo(e)}>
//               <input
//                 id="addTodoInput"
//                 onChange={(e) => this.updateInput(e)}
//                 type="text"
//               ></input>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   updateInput = (e) => {
//     this.setState({ todo: e.target.value });
//   };
//   submitTodo = (e) => {
//     e.preventDefault();
//     this.props.addTodoFn(this.state.todo);
//     document.getElementById("addTodoInput").value = "";
//   };
// }

// export default AddTodos;

import React, { useState } from "react";

const AddTodos = (props) => {
  const [todo, setTodo] = useState("");

  const updateInput = (e) => {
    setTodo(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    props.addTodoFn(todo);
    document.getElementById("addTodoInput").value = "";
  };
  return (
    <div className="addTodosContainer">
      <h1 style={{ width: "100%", textAlign: "center" }}>Todos </h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <div className="checkbox-wrapper">
              <input type="checkbox" id="xyz" />
              <label htmlFor="xyz"></label>
            </div>
          }
        </div>
        <div style={{ flex: 1 }}>
          <form onSubmit={(e) => submitTodo(e)}>
            <input
              id="addTodoInput"
              onChange={(e) => updateInput(e)}
              type="text"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodos;
