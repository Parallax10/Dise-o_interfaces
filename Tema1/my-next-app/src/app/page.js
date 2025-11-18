"use client";
import Card from "./Card";
import Greeting from "./Greeting";
import Contador from "./Contador";
import UserCard from "./UserCard";
import ProductList from "./ProductList";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";


function App(){
  return(
    <div>
      <Card titulo="1" descripcion="Descripcion" imagen='https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTlyNWR6eDh1MXB1eWJicnVtZDR1bm4xZmw4NzV5c3RhaXFwbTU4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lopx9eUi34rbq/200w.gif'></Card>
      <Card titulo="Tit2ulo" descripcion="Descripcion" imagen='https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTlyNWR6eDh1MXB1eWJicnVtZDR1bm4xZmw4NzV5c3RhaXFwbTU4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lopx9eUi34rbq/200w.gif'></Card>
      <h1>ej5</h1>
      <UserCard></UserCard>
    </div>
  );
}

export default function Home() {
  return (
  <div>
    <h1>ej1</h1>
    <Greeting name="Paco"></Greeting>
    <h1>ej2</h1>
    <App></App>
    <h1>ej3</h1>
    <Contador></Contador>
    <h1>ej4</h1>
    <ProductList></ProductList>
  </div>
  );
}
