import { Search } from "@/assets/icons";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div className={styles.Container}>
      <Search />
      <input className={styles.Input} type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
