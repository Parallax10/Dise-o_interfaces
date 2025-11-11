"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
//Renderiza una lista de productos en un componente ProductList.
function productos(nombre,precio,descripcion){
  return{nombre,precio,descripcion}
}
function ProductList(nombre,precio,descripcion){
return(
    <div>
      {productos.map((index)=>(
        <div key={index}>
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <p>Precio: ${precio}</p>
        </div>
      ))}
    </div>
  );
}

function Contador() {
  const [count, setCount] =useState(0);

  const increment = () => setCount(count + 1);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

function Greeting({name}) {
  return <h1>Hola, {name}</h1>;
}
function Card({titulo,descripcion,imagen}){
  return(
    <div>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <img src={imagen}/>
    </div>
  );
}
function App(){
  return(
    <div>
      <Card titulo="1" descripcion="Descripcion" imagen='https://i.imgur.com/Mx7dA2Y.jpg'></Card>
      <Card titulo="Tit2ulo" descripcion="Descripcion" imagen='https://i.imgur.com/Mx7dA2Y.jpg'></Card>
    </div>
  );
}

export default function Home() {
  return (
  <div>
    <Greeting name="Paco"></Greeting>
    <App></App>
    <Contador></Contador>
    <ProductList nombre="Producto1" precio="100" descripcion="Descripcion del producto 1"></ProductList>
  </div>
  );
}
