import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Contact.module.css";
import Arrow from "@/components/arrow";
import Navbar from "@/components/navbar";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [errorFirst, setFirst] = useState('');
    const [errorLast, setLast] = useState('');
    const [errorEmail, setEmail] = useState('');

    const name = /^[A-Z]{1}[A-Za-z]*$/;
    const email = /^[a-zA-Z0-9]+(@)[a-zA-Z]+(\.)[a-zA-Z]{2,}$/

    useEffect(() => {
        if (form.firstName !== "" && name.test(form.firstName) == false){
            setFirst('First name error. First letter must be capital. Must use alphabets only.');
        }
        else{
            setFirst('');
        };

        if (form.lastName !== "" && name.test(form.lastName) == false) {
            setLast('Last name error. First letter must be capital. Must use alphabets only.');
        }
        else{
            setLast('');
        };

        if (form.email !== "" && email.test(form.email) == false) {
            setEmail('Email is invalid.');
        }
        else{
            setEmail('');
        };

        if (name.test(form.firstName) && name.test(form.lastName) && email.test(form.email)) {
            document.getElementById("btn").style.visibility = "visible";
        } else {
            document.getElementById("btn").style.visibility = "hidden";
        };
    })

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
            <div className={styles.header}>
                <div><hr className={styles.line}></hr></div>
                <div><h1 className={styles.heading}>Contact Us</h1></div>
                <div><hr className={styles.line}></hr></div>
            </div>
            <div>
                <p className={styles.subheading}>Want to discuss? Let's chat!</p>
            </div>
            <form className={styles.formContainer}>
                <fieldset className={styles.fieldContainer}>
                    <table className={styles.tableContainer}>
                        <thead className={styles.row}>
                            <tr className={styles.col}>
                                <td className={styles.dataContainer}>
                                    <label>First Name:</label>
                                    <input id="firstName" type="text" placeholder="First Name Here" pattern={name} required onChange={(event => setForm({ ...form, firstName: event.target.value }))}></input>
                                </td>
                                <td className={styles.dataContainer}>
                                    <label>Last Name:</label>
                                    <input id="lastName" type="text" placeholder="Last Name Here" pattern={name} required onChange={(event => setForm({ ...form, lastName: event.target.value }))}></input>
                                </td>
                            </tr>
                        </thead>
                        <thead className={styles.row}>
                            <tr className={styles.col}>
                                <td className={styles.dataContainer}>
                                    <label>Email:</label>
                                    <input id="email" type="email" placeholder="Email Here" pattern={email} required onChange={(event => setForm({ ...form, email: event.target.value }))}></input>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </fieldset>
                <div className={styles.btnContainer}>
                    <button id="btn" className={styles.button} type="button">Submit</button>
                </div>
                <div className={styles.errors}>
                    <div>{errorFirst}</div>
                    <div>{errorLast}</div>
                    <div>{errorEmail}</div>
                </div>
            </form>
        </div>
        <Arrow page="Contact" />
      </main>
    </>
  );
}