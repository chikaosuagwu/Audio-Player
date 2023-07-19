import Image from "next/image";
import styles from "./styles/page.module.css";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <main className={styles.main}>
      <AudioPlayer />
    </main>
  );
}
