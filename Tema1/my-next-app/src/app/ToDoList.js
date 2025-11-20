"use client"

import { useState } from "react"

export default function ToDoList(){
    const tareas=[
        {id:0,titulo:"Tarea1",completada:false},
        {id:1,titulo:"Tarea2",completada:false}
            ];
    const[Ttareas, setTtareas]=useState(tareas)
    function CompletarTarea(){
        Ttareas.completada=true
    }
    return(
        <div>
            {Ttareas.map((tarea)=>(
                <div key={tarea.id}>
                    <h1>{tarea.titulo}</h1>
                    <p>{tarea.completada?"Tarea completada":"Tarea no completada"}</p>
                    <button onClick={()=>CompletarTarea()}>Completar</button>
                    <button>Eliminar</button>
                </div>
            ))}
        </div>
    );
}