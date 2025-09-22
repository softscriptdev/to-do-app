import ToDoApp from "./components/ToDoApp";
import "./style/main.scss";
import "./style/fonts.scss";
import { ToDoHandler } from "./hooks/ToDoHandler";

function App() {
  return (
    <ToDoHandler>
      <ToDoApp />
    </ToDoHandler>
  );
}

export default App;
