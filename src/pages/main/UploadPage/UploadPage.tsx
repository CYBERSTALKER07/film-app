import React, { useState } from 'react';
import styles from './UploadPage.module.css';

interface UploadPageProps {
  onAddItem: (item: any) => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ onAddItem }) => {
  const [cats, setCats] = useState('');
  const [about, setAbout] = useState('');
  const [year, setYear] = useState('');
  const [video, setVideo] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      cats,
      about,
      year,
      video,
      coverImage,
    };
    onAddItem(newItem);

    setCats('');
    setAbout('');
    setYear('');
    setVideo(null);
    setCoverImage(null);
  };

  return (
    <div className={styles.sliderContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.card}>
          <label>
            Cats:
            <input type="text" value={cats} onChange={(e) => setCats(e.target.value)} />
          </label>
        </div>
        <div className={styles.card}>
          <label>
            About:
            <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} />
          </label>
        </div>
        <div className={styles.card}>
          <label>
            Year:
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
          </label>
        </div>
        <div className={styles.card}>
          <label>
            Video:
            <input type="file" accept="video/*" onChange={(e) => handleFileChange(e, setVideo)} />
          </label>
        </div>
        <div className={styles.card}>
          <label>
            Cover Image:
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setCoverImage)} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadPage;