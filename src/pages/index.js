import NavBar from "@/containers/NavBar";
import SideBar from "@/containers/SideBar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`Main ${inter.className}`}>
      <SideBar />
      <NavBar />
    </div>
  );
}
