import Link from "next/link"

export default function Topo(){
    return (
        <div className="pai">
            <p className="text-4xl">Bem vindo ao meus exercicios</p>
            <div className="nav">
                <Link href = './sobre'>
                    <p>Sobre</p>
                </Link>
                <Link href= '/'>
                    <p>Home</p>
                </Link>
                <Link href= "./curiosidades">
                    <p>Curiosidades</p>
                </Link>
            </div>
        </div>
    )
}