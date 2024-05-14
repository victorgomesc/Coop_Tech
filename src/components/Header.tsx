import Link from "next/link"

export default function Header() {
    return(
        <div className="h-32 w-screen bg-green-700 flex items-center p-6">
            <div className="w-2/4">
                <h1 className="text-5xl font-extrabold text-white">Coop Tech</h1>
            </div>
            <div className="w-2/4 flex justify-end gap-8 p-6 text-white font-bold text-xl">
                <Link href="/">
                <div className="border-solid border-2 border-green-700 hover:border-white 
                rounded-full w-24 flex items-center justify-center">
                    <h1>
                        Home
                    </h1>
                </div>
                </Link>

            <Link href="/equipe" >
            <div className="border-solid border-2 border-green-700 hover:border-white 
                rounded-full w-24 flex items-center justify-center">
                    <h1>
                        Equipe
                    </h1>
            </div>
            </Link>

            <Link href="produto" >
            <div className="border-solid border-2 border-green-700 hover:border-white 
                rounded-full w-24 flex items-center justify-center">
                    <h1>
                        Produto
                    </h1>
            </div>
            </Link>
            </div>
        </div>
    )
}