import Image from "next/image";
import TextApresentation from "./TextApresentetion";


export default function CompanyCard() {
    return(
        <div className="max-w-[80%] h-screen w-4/5 justify-between items-stretch mt-10 flex flex-row p-2">
        <div className="w-auto h-96 border-4 border-green-500 p-1 flex-col flex">
            <div className="w-80">
                <Image src="/assets/ufc.jpeg" alt="" width={310} height={310} className="w-full" />
            </div>
            <h2 className="mt-5">Universidade Federal do Ceará</h2>
            <p className="mt-5">Campus Quixadá</p>
            <p className="mt-5">15/05/2024</p>
        </div>
        <TextApresentation />
        </div>
    )
}