import SideBar from "@/containers/SideBar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`main ${inter.className}`}>
      <SideBar />
    </div>
  );
}
