import { useContext, useRef } from "react";
import { StatsCard } from "../statcard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

//import logoimg from "../../assets/image/LogoSistem.jpeg";

export const Header: React.FC = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const totalTasks = tasks.length;

    const totalPending = tasks.reduce((total, task) => {
      if (!task.done) return total + 1;
      return total;
    }, 0);

   const totalDone = totalTasks - totalPending;

   // Função para exportar dados do localStorage para arquivo
   const exportData = () => {
     const data = localStorage.getItem("tasks");
     if (!data) {
       alert("Nenhum dado para exportar!");
       return;
     }

     const element = document.createElement("a");
     element.setAttribute(
       "href",
       "data:application/json;charset=utf-8," + encodeURIComponent(data)
     );
     element.setAttribute("download", "tasks_backup.json");
     element.style.display = "none";
     document.body.appendChild(element);
     element.click();
     document.body.removeChild(element);
   };

   // Função para importar dados de arquivo para localStorage
   const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (!file) return;

     const reader = new FileReader();
     reader.onload = (e) => {
       try {
         const content = e.target?.result as string;
         const parsedData = JSON.parse(content);
         
         // Valida se é um array de tarefas
         if (Array.isArray(parsedData)) {
           localStorage.setItem("tasks", JSON.stringify(parsedData));
           setTasks(parsedData);
           alert("Dados importados com sucesso!");
         } else {
           alert("Formato de arquivo inválido!");
         }
       } catch (error) {
         alert("Erro ao importar arquivo!");
         console.error(error);
       }
     };
     reader.readAsText(file);
     
     // Limpa o input
     if (fileInputRef.current) {
       fileInputRef.current.value = "";
     }
   };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>Minha Lista</h1>
          <p><a href="https://sisteminformaticacom.br"></a>Sistem Informática (85)99995-7239</p>          
        </div>

<<<<<<< HEAD
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button 
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button 
            onClick={exportData}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📥 Exportar Dados
          </button>
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            style={{
              padding: "8px 16px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📤 Importar Dados
          </button>
          
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            onChange={importData}
            style={{ display: "none" }}
          />
        </div>
ue={totalPending} />
         <StatsCard title="Titulo Concluidas" value={totalDone} /> 
        </div>
      </div>
    </header>
  );
};
