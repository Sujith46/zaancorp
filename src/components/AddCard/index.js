import { Plus } from "@/assets/icons";
import styles from "./AddCard.module.css";

const AddCard = () => {
    return (
        <div className={styles.AddContainer}>
            <Plus color="#0E8CFF"/>
            <div className={styles.AddCardText}>Add Card</div>
        </div>
    )
}

export default AddCard;