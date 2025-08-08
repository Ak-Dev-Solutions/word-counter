import styles from '../styles/TextArea.module.css';

export default function TextArea({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="mainTextarea" className={styles.label}>Enter text</label>
      <textarea
        id="mainTextarea"
        className={styles.textarea}
        placeholder="Start typing or paste text here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
