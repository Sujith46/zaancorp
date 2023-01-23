import { FileCheck } from "@/assets/icons";
import Logo from "@/components/Logo";
import SideBarMenus from "../SideBarMenus";
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <div className={styles.Container}>
            <Logo />
            <SideBarMenus />
            <div className={styles.Company}>
                <FileCheck />
                <div className={styles.MenuText}>Company</div>
            </div>
        </div>
    )
}

export default SideBar;