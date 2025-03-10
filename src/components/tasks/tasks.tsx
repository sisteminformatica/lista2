import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";

import styles from "./styles.module.scss";
import { FiTrash } from 'react-icons/fi';

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, setTasks } = useContext(TasksContext);

  function handleSubmitAddTask(event: React.FormEvent) {
    event.preventDefault(); //nao renderiza automatico

    if (taskTitle.length < 3) {
      alert("Pouco caracteres ...");
      return;
    }

    const newTasks = [
      ...tasks, //pega todas as tarefas que ja existiam e coloca no novo array
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks); //atualiza dados novo array no tasks

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle(""); //depois de add os dados no array task limpa variavel taskTitle  
           
  }

  function handleToggleTasksStatus(id: number) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === id;
    });

    const tempTasks = [...tasks];
  
    tempTasks[taskIndex].done = !tempTasks[taskIndex].done;

    setTasks(tempTasks);
  }

  function handleRemoveTask(id: number) {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === id;
    });

    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

 return (
    <section className={styles.container}>
       <form onSubmit={handleSubmitAddTask}>
         {" "}
         {/* faz o processo de criar a lista dinamicamente */}
         <div>
           <label htmlFor="task-title">Adicionar Tarefa</label>
           <input
            value={taskTitle} //joga valor do input na array setTask
            onChange={(event) => setTaskTitle(event.target.value)} //joga get na variavel taskTitle
            type="text"
            id="task-title"
            placeholder="Titulo da tarefa"
           />
         </div>
         <button type="submit">Adicionar Tarefa</button>
       </form>
        <ul>
         {tasks.map((task) => {
           return (
             <li key={task.id}>
               <input 
               type="checkbox" 
               id={"task-$(task.id)"} 
               onChange={() => handleToggleTasksStatus(task.id)}              
               />
               <label 
               className={task.done ? styles.done : ''}
               htmlFor={"task-$(task.id)"}>{task.title}
               </label>
            <button onClick={() => handleRemoveTask(task.id)}>Remover</button>

             </li>
           );
         })}
       </ul>
     </section>
   );
};

  // const [taskTitle, setTaskTitle] = useState("");

  // const { tasks, setTasks } = useContext(TasksContext);

  // // tipagem typescript
  // function handleSubmitAddTask(event: React.FormEvent) {
  //   event.preventDefault(); //nao renderiza automatico

  //   if (taskTitle.length < 3) {
  //     alert("Pouco caracteres ...");
  //     return;
  //   }

  //   // cria novo array e adiciona tarefas
  //   const newTasks = [
  //     ...tasks, //pega todas as tarefas que ja existiam e coloca no novo array
  //     { id: new Date().getTime(), title: taskTitle, done: false },
  //   ];
  //   setTasks(newTasks); //atualiza dados novo array no tasks

  //   mudando status done no check-box
  //   function handleToggleTasksStatus(taskId: number) {
  //     const newTasks = tasks.map((task) => {
  //       if (taskId === task.id) {
  //         return (
  //           ...task,
  //           done: !task.done
  //         )
  //         return task
  //       }
  //     };
  //     setTasks(newTasks);  
  //   }    

  //   function handleRemoveTasks(taskId: number) {}

  //   salvando dados no localStorage. transformando array em string
  //   localStorage.setItem("tasks", JSON.stringify(newTasks));
  //   setTaskTitle(""); //depois de add os dados no array task limpa variavel taskTitle
  // }
  // // quando mudar o status

  // return (
  //   <section className={styles.container}>
  //     <form onSubmit={handleSubmitAddTask}>
  //       {" "}
  //       {/* faz o processo de criar a lista dibamicamente */}
  //       <div>
  //         <label htmlFor="task-title">Adicionar Tarefa</label>
  //         <input
  //           value={taskTitle} //joga valor do input na array setTask
  //           onChange={(event) => setTaskTitle(event.target.value)} //joga get na variavel taskTitle
  //           type="text"
  //           id="task-title"
  //           placeholder="Titulo da tarefa"
  //         />
  //       </div>
  //       <button type="submit">Adicionar Tarefa</button>
  //     </form>
  //     <ul>
  //       {tasks.map((task) => {
  //         return (
  //           <li key={task.id}>
  //             <input type="checkbox" 
  //             id={"task-$(task.id)"} 
  //             onChange={() => handleToggleTasksStatus(task.id)}              
  //             />
  //             <label 
  //             className={task.done ? styles.done : ''}
  //             htmlFor={"task-$(task.id)"}>{task.title}</label>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </section>
  // );

