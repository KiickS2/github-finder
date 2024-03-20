import { useNavigate } from "react-router-dom";

import styles from "./BackBtn.module.css";

const BackBtn = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)} className={styles.backBtn}>Voltar</button>;
};

export default BackBtn;
