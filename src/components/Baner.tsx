import Image from "next/image";


export default function Baner() {
    return(
        <div className="w-[100%]  bg-green-500 h-3/5">
            <Image src="/assets/coop2.jpeg" alt="" width={500} height={500} className="h-full w-full" />
        </div>
    )
}