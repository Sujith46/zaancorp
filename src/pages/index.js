import SideBar from "@/containers/SideBar";
import Workflow from "@/containers/Workflow";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`Main ${inter.className}`}>
      <SideBar />
      <Workflow />
    </div>
  );
}
