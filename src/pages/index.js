import { useState } from 'react';
import TextArea from '../components/TextArea';
import CounterDisplay from '../components/CounterDisplay';
import FileUploader from '../components/FileUploader';
import { countWords, countChars, estimateReadingTime } from '../utils/metrics';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const words = countWords(text);
  const charsWithSpaces = countChars(text, { includeSpaces: true });
  const charsNoSpaces = countChars(text, { includeSpaces: false });
  const readingTime = estimateReadingTime(words);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Fast & Accurate Word Counter</h1>
        <p>Count words, characters, and reading time instantly — anywhere, on any device.</p>
      </section>

      {/* Tool Section */}
      <section className={styles.toolCard}>
        <div className={styles.toolHeader}>
          <FileUploader onLoad={(fileText) => setText(fileText)} />
          <button onClick={() => setText('')} className={styles.clearBtn}>Clear</button>
        </div>
        <TextArea value={text} onChange={setText} />
        <CounterDisplay
          words={words}
          charsWithSpaces={charsWithSpaces}
          charsNoSpaces={charsNoSpaces}
          readingTime={readingTime}
        />
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>📊 Real-Time Counts</h3>
          <p>See word and character counts update instantly as you type.</p>
        </div>
        <div className={styles.feature}>
          <h3>📱 Mobile Friendly</h3>
          <p>Fully responsive design works seamlessly on phones, tablets, and desktops.</p>
        </div>
        <div className={styles.feature}>
          <h3>🌙 Dark Mode</h3>
          <p>Switch to dark mode for comfortable writing at night.</p>
        </div>
      </section>

      
    </div>
  );
}
