import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className= {styles.container}>
            <h1 className={styles.title}>
<<<<<<< HEAD
                <b>Instituto Inaldo Abreu</b> 
                <p>"Os Voluntários da Paz"</p>
            </h1>
=======
                <b>Instituto Inaldo Abreu</b> <p>"Os Voluntários da Paz"</p></h1>
>>>>>>> 8981641002e590917273aff8933ef93ebb194966
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