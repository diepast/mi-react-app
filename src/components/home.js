import React from "react";
import "../styles/home.css"

export function Home(){
let tecnologia = "React"

    return (
    <div className="home_main_container">
    <h1>hola Mundo!!</h1>
    <h2>Welcome to {tecnologia}</h2>
    <p>Este es un bootcamp sobre el framework de {tecnologia}</p>
    </div>
    )
}
export function HomeDOS(props){
    console.log(props)
        return (
        <div className="home_main_container">
        <h1>{props.autor} Home 2</h1>
        </div>
        )
    }

