import styles from './Menu.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Menu(){
    const [menu, setMenu] = useState(false);
    return (
        <>
            <img className={styles.closedMenu} onClick={() => setMenu(true)} src={'icons/menu-icon.png'}></img>
            {
                menu === true ?
                    <div className={styles.openMenu}>
                        <img className={styles.menuBg} src="background-images/menuBackground.png"></img>
                        <h1 className={styles.menuExit} onClick={() => setMenu(false)}>X</h1>
                        <ul className={styles.menuLinks}>
                            <li className={styles.link}><Link href="/">Home</Link></li>
                            <li className={styles.link}><Link href="/about">About</Link></li>
                            <li className={styles.link}><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>:
                <></>
            }
        </>
    )
}