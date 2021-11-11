import Head from "next/head";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data } from "../data";
import { Intro } from "../public/img/Intro";
import styles from "../styles/Home.module.css";

export default function Home({ services }) {
  console.log(services);
  return (
    <div className={styles.container}>
      <Head>
        <title>Ompa Dev</title>
        <meta name="description" content="Omphalus Kua" />
      </Head>

      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: {
      services,
    },
  };
};
