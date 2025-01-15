export default function Alfabeto(){
    return (
        <div className="flex justify-center items-center flex-col">
            <div>Digite um número de 0 a 23</div>
            <input type="number" name="" id="" className="text-black"/>
            <div className="w-48">Abaixo apareçerá a letra respectiva no alfabeto a esse número</div>
            <div className="w-7 h-7 bg-white relative bottom-4 left-9 text-black text-center text-2xl">.</div>
        </div>
    )
}