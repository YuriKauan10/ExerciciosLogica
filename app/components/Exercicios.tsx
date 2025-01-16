import Link from "next/link"

export default function Exercicios(){
    return (
        <div className="ex">
            <div>
            <Link href = './alfabeto'>
                <button className="alfabeto">Alfabeto</button>
            </Link>
            </div>
            <Link href = './fatorial'>
                <button className="fatorial">Fatorial</button>
            </Link>
            
        </div>
    )
}