import Menu from "@/components/menu/Menu";
import styles from "./page.module.css"
import Image from "next/image";

const SinglePage = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, labore.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/> 
                        </div>
                        <div className={styles.userTextContainer}>
                          <span className={styles.username}>Gabriel Araújo</span>  
                          <span className={styles.date}>26.03.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}></div>
                <Menu/>
            </div>
        </div>        
    );
}
 
export default SinglePage;