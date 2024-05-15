import Image from "next/image";


export default function PersonaCard() {
    return(
        <>
        <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-10 text-green-700">Nossa Equipe</h1>
        <div className="grid grid-cols-5 mt-40 ml-6">
            <div className="w-80 h-96 bg-green-600 border-8 border-green-900 mt-10 
            flex flex-col items-center mx-8">
                <h1 className="text-xl font-mono mt-4">Gabriel Braga</h1>
                <Image src="/assets/gabriel.jpeg" alt="" width={90} height={90} 
                className=" mt-4 rounded-2xl border-2 border-blue-500" />
                <h2 className="mt-6">Cargo: CEO</h2>
                <h2>Formação: Engenharia de computação</h2>
                <h2>Universidade Federal do Cerara</h2>
            </div>

            <div className="w-80 h-96 bg-green-600 border-8 border-green-900 mt-10 flex 
            flex-col items-center mx-8">
                <h1 className="text-xl font-mono mt-4">Victor Gomes</h1>
                <Image src="/assets/victor.jpeg" alt="" width={90} height={100} 
                className=" mt-4 rounded-2xl border-2 border-blue-500 h-24" />
                <h2 className="mt-6">Cargo: Desenvolvedor Full Stack</h2>
                <h2>Formação: Engenharia de computação</h2>
                <h2>Universidade Federal do Cerara</h2>
            </div>

            <div className="w-80 h-96 bg-green-600 border-8 border-green-900 mt-10 flex 
            flex-col items-center mx-8">
                <h1 className="text-xl font-mono mt-4">Francisco Pedro</h1>
                <Image src="/assets/gabriel.jpeg" alt="" width={90} height={90} 
                className=" mt-4 rounded-2xl border-2 border-blue-500" />
                <h2 className="mt-6">Cargo: Desenvolcedor Full Stack</h2>
                <h2>Formação: Engenharia de computação</h2>
                <h2>Universidade Federal do Cerara</h2>
            </div>

            <div className="w-80 h-96 bg-green-600 border-8 border-green-900 mt-10 flex 
            flex-col items-center mx-8">
                <h1 className="text-xl font-mono mt-4">Matheus Moreira</h1>
                <Image src="/assets/gabriel.jpeg" alt="" width={90} height={90} 
                className=" mt-4 rounded-2xl border-2 border-blue-500" />
                <h2 className="mt-6">Cargo: Devops</h2>
                <h2>Formação: Engenharia de computação</h2>
                <h2>Universidade Federal do Cerara</h2>
            </div>

            <div className="w-80 h-96 bg-green-600 border-8 border-green-900 mt-10 flex 
            flex-col items-center mx-8">
                <h1 className="text-xl font-mono mt-4">Andre Torquato</h1>
                <Image src="/assets/gabriel.jpeg" alt="" width={90} height={90} 
                className=" mt-4 rounded-2xl border-2 border-blue-500" />
                <h2 className="mt-6">Cargo: Tech Lead</h2>
                <h2>Formação: Engenharia de computação</h2>
                <h2>Universidade Federal do Cerara</h2>
            </div>

        </div>

        
        </div>
        </>
    )
}