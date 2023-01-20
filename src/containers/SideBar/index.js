import Logo from "@/components/Logo";
import SideBarMenus from "../SideBarMenus";
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <div className={styles.Sidebar}>
            <Logo />
            <SideBarMenus />
        </div>
    )
}

export default SideBar;