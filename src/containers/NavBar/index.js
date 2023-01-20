import { Suggestions } from "@/assets/icons";
import ActionIcon from "@/components/ActionIcon";
import AddButton from "@/components/AddButton";
import UserDropDown from "@/components/UserDropdown";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavContainer}>
      <UserDropDown />
      <ActionIcon>
        <Suggestions />
      </ActionIcon>
      <AddButton />
    </div>
  );
};

export default NavBar;
