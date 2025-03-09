import { useContext } from "react";
import { StatsCard } from "../statcard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

import logoimg from "../../assets/image/LogoSistem.jpeg";

export const Header: React.FC = () => {
    const { tasks } = useContext(TasksContext);
    const totalTasks = tasks.length;

    const totalPending = tasks.reduce((total, task) => {
      if (!task.done) return total + 1;
      return total;
    }, 0);

   const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>Minha Lista</h1>
          <p><img src={logoimg} alt="" /></p>
          <p><a href="https://sisteminformaticacom.br"></a>Sistem Informática (85)99995-7239</p>          
        </div>

        <div>
         <StatsCard title="Total de Tarefas" value={totalTasks} />
         <StatsCard title="Titulo Pendentes" value={totalPending} />
         <StatsCard title="Titulo Concluidas" value={totalDone} /> 
        </div>
      </div>
    </header>
  );
};
