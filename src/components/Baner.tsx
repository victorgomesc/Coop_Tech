import Image from "next/image";


export default function Baner() {
    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl text-green-700 font-bold mt-10 mb-6">Conheça a Coop Tech</h1>
            <div className="w-[100%]  bg-white h-3/5 flex items-center justify-center">
                <Image src="/assets/coop2.jpeg" alt="" width={1600} height={500} 
                className="h-full max-w-[80%] mt-10" />
            </div>
        </div>
        </>
    )
}