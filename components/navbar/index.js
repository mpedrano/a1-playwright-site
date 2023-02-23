import React from "react";
import styles from './Navbar.module.css'
import Menu from "../menu";

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div><Menu /></div>
                <div><img class={styles.navbarImg} src={'icons/graduation-hat.png'} /></div>
            </div>
        </>
    )
}