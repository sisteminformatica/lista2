import { Header } from "./components/header/Header";
import { Tasks } from "./components/tasks/tasks";
import { TasksProvider } from "./context/TasksContext";

import "./styles/global.css";


function App() {
  return (
     <TasksProvider>
      <Header />
      <Tasks />       
    </TasksProvider>
  );
}

export default App;
