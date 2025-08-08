import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About WordCounter</h1>
      <p>
        WordCounter is a simple, free tool that helps you count words and characters in your text in real time. 
        Whether you&#39;re a writer, student, or professional, it&#39;s perfect for keeping track of your text length 
        and estimating reading time.
      </p>
      <p>
        Built with <strong>Next.js</strong> and <strong>React</strong>, this tool is designed to be fast, 
        responsive, and easy to use on any device.
      </p>
      <p>
        Future updates will include more text statistics, grammar suggestions, and file format support.
      </p>
    </div>
  );
}
