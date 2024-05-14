import Baner from "@/components/Baner";
import CompanyCard from "@/components/CompanyCard";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Baner />
      <div className="flex items-center justify-center">
      <CompanyCard />
      </div>
      
    </div>
  );
}
