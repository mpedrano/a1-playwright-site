import styles from './Arrow.module.css'

export default function Arrow({
    page="none",
})
{
    return (
        page === "Home" ? 
        <div className={styles.arrows}>
            <a href="/about" >
                <span >
                    <img src={'icons/downwardArrow.png'} />
                </span>
            </a>
        </div> :

        page === "About" ?
        <div className={styles.arrows}>
            <a href="/" >
                <span >
                    <img src={'icons/upwardArrow.png'} />
                </span>
            </a>
            <a href="/contact" >
                <span >
                    <img src={'icons/downwardArrow.png'} />
                </span>
            </a>
        </div>:

        page === "Contact" ?
        <div className={styles.arrows}>
            <a href="/about" >
                <span >
                    <img src={'icons/upwardArrow.png'} />
                </span>
            </a>
            <a href="/" >
                <span >
                    <img src={'icons/downwardArrow.png'} />
                </span>
            </a>
        </div>:
        <></>
    )
}