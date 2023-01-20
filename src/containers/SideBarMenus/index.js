import { useState } from "react";
import styles from "./SideBarMenus.module.css";

const {
  Dashboard,
  Workflow,
  Calender,
  SocialMedia,
  Analytics,
  UserLead,
  UserStar,
  Notifications,
  Documents,
  Segments,
} = require("@/assets/icons");

const SideBarMenus = () => {
  const menuList = [
    {
      icon: <Dashboard />,
      title: "Dashboard",
    },
    {
      icon: <Workflow />,
      title: "Workflow",
    },
    {
      icon: <Calender />,
      title: "Calendar",
    },
    {
      icon: <SocialMedia />,
      title: "SocialRM",
    },
    {
      icon: <Analytics />,
      title: "Metrics",
    },
    {
      icon: <UserLead />,
      title: "Leads",
    },
    {
      icon: <UserStar />,
      title: "Users",
    },
    {
      icon: <Notifications />,
      title: "Notifications",
    },
    {
      icon: <Documents />,
      title: "Documents",
    },
    {
      icon: <Segments />,
      title: "Segments",
    },
  ];

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className={styles.Container}>
      {menuList.map((item, index) => (
        <div
          className={`${styles.MenuWrapper} ${
            item.title === activeMenu ? styles.Active : ""
          }`}
          key={index}
        >
          {item.icon}
          <div className={styles.Title}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBarMenus;
