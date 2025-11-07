import Image from "next/image";
import styles from "./page.module.css";
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
      <Card titulo="Titulo" descripcion="Descripcion" imagen='https://i.imgur.com/Mx7dA2Y.jpg'></Card>
      <Card titulo="Titulo" descripcion="Descripcion" imagen='https://i.imgur.com/Mx7dA2Y.jpg'></Card>
    </div>
  );
}

export default function Home() {
  return (
  <div>
    <Greeting name="Paco"></Greeting>
    <App></App>
  </div>
  );
}
