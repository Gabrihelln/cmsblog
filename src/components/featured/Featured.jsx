import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className= {styles.container}>
            <h1 className={styles.title}>
                <b>Instituto Inaldo Abreu</b> 
                <p>"Os Voluntários da Paz"</p>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ratione at impedit!</p>
                    <button className={styles.button}>Leia Mais</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;