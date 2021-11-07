import styles from "../../styles/Intro.module.css";
import Image from "next/image";

export const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>OUXUID</span> DIGITAL PORTFOLIO
        </h1>
        <p className={styles.desc}>
          This is a small library of my portfolio. I created this site to mainly
          organise and display my works and skills I have learned over the
          years.
        </p>
        <button className={styles.button}>Button</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/crest_trans_black.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt=" logo"
        />
      </div>
    </div>
  );
};
