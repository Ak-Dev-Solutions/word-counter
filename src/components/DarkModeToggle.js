import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from '../styles/DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const [stored, setStored] = useLocalStorage('wc:dark', 'auto'); // 'on' | 'off' | 'auto'
  const [mode, setMode] = useState(stored);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'on') {
      root.classList.add('dark');
    } else if (mode === 'off') {
      root.classList.remove('dark');
    } else {
      // 'auto' => follow prefers-color-scheme
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    }
    setStored(mode);
  }, [mode, setStored]);

  return (
    <div className={styles.toggleWrap}>
      <label className={styles.label}>Theme</label>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className={styles.select}
        aria-label="Theme select"
      >
        <option value="auto">Auto</option>
        <option value="on">Dark</option>
        <option value="off">Light</option>
      </select>
    </div>
  );
}
