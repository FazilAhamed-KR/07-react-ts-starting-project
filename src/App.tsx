import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import "./App.css";
import TodosContextProvider from "./store/todo-contens";

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
