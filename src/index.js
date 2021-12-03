import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }
//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decrease}>-</button>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

// export default App;
