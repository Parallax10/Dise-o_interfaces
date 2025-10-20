import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
function MyButton(){
  return<button>Hola</button>
}

export default function Home() {
  return (
   <div>
    <Header></Header>   
    <p>Hola mundo</p>
    <MyButton></MyButton>
   </div>
  );
}
