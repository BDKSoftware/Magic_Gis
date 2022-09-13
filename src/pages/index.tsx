import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.css";
import NavBar from "./components/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Magic Gi's</title>
        <meta name="description" content="Magic Gi's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
