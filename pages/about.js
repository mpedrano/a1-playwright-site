import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from '@/styles/About.module.css'
import Arrow from "@/components/arrow";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
      <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <Navbar />
        <div className={styles.content}>
            <div className={styles.header}>
                <div><hr className={styles.line}></hr></div>
                <div><h1 className={styles.heading}>About Us</h1></div>
                <div><hr className={styles.line}></hr></div>
            </div>
            <div>
                <p className={styles.desc}>
                    We are proud to deliver an education that goes beyond textbooks and classrooms.
                </p>
            </div>
            <div>
                <p className={styles.desc}>
                    Our students gain the technical skills, real-world experience, and problem-solving 
                    ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
                </p>
            </div>
            <div>
                <p className={styles.desc}>
                    Through close collaboration with industry, our network of alumni and partners continue to achieve global success.
                </p>
            </div>

            <div><h2 className={styles.subheading}>Information Sessions</h2></div>
            <div>
                <p className={styles.desc}>
                    Information sessions are a simple way to figure out the next step along your career path.
                    Learn more about the programs that interest you.
                </p>
            </div>

            <div><h3 className={styles.subheading}>Big Info</h3></div>
            <div>
                <p className={styles.desc}>
                    Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our 
                    programs - from business, computing, and health to engineering, trades, and applied sciences.
                </p>
            </div>
            <div>
                <p className={styles.desc}>
                    If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.
                </p>
            </div>

            <div><h2 className={styles.subheading}>Campus Tours</h2></div>
            <div>
                <p className={styles.desc}>
                    Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.
                </p>
            </div>

            <Carousel />
            
            <div className={styles.header}>
                <div><hr className={styles.line}></hr></div>
                <div><h1 className={styles.heading}>Departments</h1></div>
                <div><hr className={styles.line}></hr></div>
            </div>
            <div className={styles.depts}>
                <ul>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineering</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>
            </div>
        </div>
        <Arrow page="About" />
      </main>
      
      </>
    );
  }