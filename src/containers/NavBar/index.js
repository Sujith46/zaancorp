import Image from "next/image";

import { Announcement, Calender, ChatAlert, Suggestions } from "@/assets/icons";

import ActionIcon from "@/components/ActionIcon";
import AddButton from "@/components/AddButton";
import SearchInput from "@/components/SearchInput";
import UserDropDown from "@/components/UserDropdown";
import UserAvatar from "../../assets/images/avatars/user-avatar.png";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavContainer}>
      <UserDropDown />
      <ActionIcon>
        <Suggestions />
      </ActionIcon>
      <AddButton />
      <SearchInput />
      <ActionIcon>
        <Announcement />
      </ActionIcon>
      <ActionIcon>
        <Calender />
      </ActionIcon>
      <ActionIcon>
        <ChatAlert />
      </ActionIcon>
      <Image src={UserAvatar} alt="user-avatar" width="38" height="38"/>
    </div>
  );
};

export default NavBar;
