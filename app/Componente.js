'use client'

import {useEffect, useState} from "react";

export default function Componente() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const  xxx = async ()=>{

            const respuesta = await fetch("http://localhost:5213/api/todoitem/");
            console.log(respuesta.json());
            setPersonajes(respuesta.json());
        }
        xxx()

    }, []);


    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {personajes.title?personajes.map(()=>{
                return ("hola")
            }):<>cargando</>}
        </div>
    );

}