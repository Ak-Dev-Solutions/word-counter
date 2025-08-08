import styles from '../styles/CounterDisplay.module.css';

export default function CounterDisplay({
  words,
  charsWithSpaces,
  charsNoSpaces,
  readingTime
}) {
  return (
    <div className={styles.counterBox}>
      <div className={styles.row}>
        <div className={styles.item}>
          <span className={styles.num}>{words}</span>
          <span className={styles.label}>Words</span>
        </div>

        <div className={styles.item}>
          <span className={styles.num}>{charsWithSpaces}</span>
          <span className={styles.label}>Characters (with spaces)</span>
        </div>

        <div className={styles.item}>
          <span className={styles.num}>{charsNoSpaces}</span>
          <span className={styles.label}>Characters (no spaces)</span>
        </div>

        <div className={styles.item}>
          <span className={styles.num}>{readingTime}</span>
          <span className={styles.label}>Reading time (min)</span>
        </div>
      </div>
    </div>
  );
}
