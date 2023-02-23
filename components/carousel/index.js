import styles from './carousel.module.css'
import { useState, useEffect } from 'react'
import { heading } from '@/data/heading';

export default function Carousel(){
    const [slide] = useState([...heading]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index > 5) {
            setIndex(0);
        } 
        else if (index < 0) {
            setIndex(5);
        }
        slide && slide.map((info) => {
            if (info.id == index) {
                document.getElementById("testOnImageHere").innerText = info.value;
                document.getElementById("default").src = "/carousel-images/" + info.id + ".jpg";
            }
        })
    })

    return (
        <>
            <div id="carouselImage" className={styles.carouselImage}>
                <img id="default" src="/carousel-images/0.jpg" />
                <div className={styles.carouselBtns}>
                    <img src="/icons/leftArrow.png" className={styles.btn} onClick={() => { setIndex(index - 1) }} />
                    <div id="testOnImageHere" className={styles.testOnImageHere}></div>
                    <img src="/icons/rightArrow.png" className={styles.btn} onClick={() => { setIndex(index + 1) }} />
                </div>
            </div>
        </>
    )
}