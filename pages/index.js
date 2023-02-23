import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Arrow from "@/components/arrow";
import Navbar from "@/components/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
      <Navbar />
        <div className={styles.content}>
          <div><h1 className={styles.heading}>An investment in knowledge pays the best interest.</h1></div>
          <div><hr className={styles.line}></hr></div>
          <div>
            <p>
              Different than a college or university, the British Columbia Institute
              of Technology offers practical, flexible, applied education with
              instructors who have direct, hands-on experience in their field.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link href="/about">
              <button className={styles.btn}>More About Us</button>
            </Link>
            <Link href="/contact">
              <button className={styles.btn}>Contact Us</button>
            </Link>
          </div>
        </div>
        <Arrow page="Home" />
      </main>
    </>
  );
}