"use client"
import { useState } from "react"
import Topo from "../components/Topo"

export default function Alfabeto(){
    const [num, setNum] = useState<any>('')
    let letras = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return (
        <div>
            <div><Topo/></div>
            <div className="flex justify-center items-center flex-col">
            <div>Digite um número de 0 a 23</div>
            <input type="number"  id="numberIn" className="inputNum text-black" onChange = {(e) => setNum(e.target.value)}/>
            <div className="w-48">Abaixo apareçerá a letra respectiva no alfabeto a esse número</div>
            <div className="w-7 h-7 bg-white relative bottom-4 left-9 text-black text-center text-2xl">
                {num > 26 ? '!' : letras[num]}
            </div>
            </div>
        </div>
    )
}