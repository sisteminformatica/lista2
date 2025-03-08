import { createContext, useState, useEffect } from "react";

export interface Task {
  title: string;
  done: boolean;
  id: number;
}

export interface TasksContextData {
  tasks: Task[]; //tipagem
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; //tipagem do setTasks c/mouse sobre o setTasks aparece a tipagem
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode; //PASSA TAGS HTML PRA DENTRO DE COMPONENTES
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage)); //pegado do localstorage e trasnformando em array
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{ //{ javascript { objeto
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
