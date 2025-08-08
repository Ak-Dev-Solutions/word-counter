import styles from '../styles/FileUploader.module.css';

export default function FileUploader({ onLoad }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('text')) {
      // try to accept .txt only; you can expand support later
      alert('Please upload a text (.txt) file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      onLoad(text);
    };
    reader.readAsText(file, 'utf-8');
  };

  return (
    <div className={styles.wrap}>
      <input
        id="fileUpload"
        type="file"
        accept=".txt,text/plain"
        onChange={handleFile}
        className={styles.input}
      />
      <label htmlFor="fileUpload" className={styles.label}>Upload .txt</label>
    </div>
  );
}
