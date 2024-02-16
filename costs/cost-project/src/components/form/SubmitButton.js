import styles from "./SubmitButton.module.css"

function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>Criar Projeto</button>
    </div>
  );
}

export default SubmitButton;
