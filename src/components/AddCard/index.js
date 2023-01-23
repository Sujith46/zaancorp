import { Inter } from "@next/font/google";

import { Close, Plus } from "@/assets/icons";
import styles from "./AddCard.module.css";

const inter = Inter({ subsets: ["latin"] });

const AddCard = ({ isOpen, setIsOpen, handleAddNewCard }) => {
  return (
    <>
      {isOpen ? (
        <div className={styles.AddNewCardContainer}>
          <div className={styles.AddCardHeader}>
            <div className={styles.TitleText}>Card title</div>
            <div className={styles.CloseContainer} onClick={() => setIsOpen(false)}>
              <Close />
            </div>
          </div>
          <textarea
            className={`${styles.Input} ${inter.className}`}
            type="text"
            placeholder="Enter card name"
          ></textarea>
        </div>
      ) : (
        <div className={styles.AddContainer} onClick={handleAddNewCard}>
          <Plus color="#0E8CFF" />
          <div className={styles.AddCardText}>Add Card</div>
        </div>
      )}
    </>
  );
};

export default AddCard;
