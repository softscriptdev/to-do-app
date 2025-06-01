import ToggleTheme from "./components/ToggleTheme";
import ToDoApp from "./components/ToDoApp";
import "./style/main.scss";
import "./style/fonts.scss";

function App() {
  return (
    <>
      <ToDoApp />
      <ToggleTheme />
    </>
  );
}

export default App;
