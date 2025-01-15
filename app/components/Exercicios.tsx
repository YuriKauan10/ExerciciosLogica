import Link from "next/link"

export default function Exercicios(){
    return (
        <div>
            <Link href = './alfabeto'>
                <button className="alfabeto">Alfabeto</button>
            </Link>
        </div>
    )
}