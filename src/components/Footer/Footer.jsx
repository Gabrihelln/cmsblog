import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className= {styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/iiabreu.png" alt="" width={76} height={50}/>
                    <h1 className={styles.logoText}>Instituto Inaldo Abreu</h1>
                </div>
                <p className={styles.desc}>"Aquele pois, que sabe fazer o bem e não faz, comete pecado"- Tiago 4:17</p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18}/>
                    <Image src="/instagram.png" alt="" width={18} height={18}/>
                    <Image src="/tiktok.png" alt="" width={18} height={18}/>
                    <Image src="/youtube.png" alt="" width={18} height={18}/>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Início</Link>
                    <Link href="/">Ações Sociais</Link>
                    <Link href="/">Sobre Nós</Link>
                    <Link href="/">Fale Conosco</Link>
                </div>
                {/* <div className={styles.list}>
                    <span className={styles.listTitle}>Categorias</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Food</Link>
                    <Link href="/">Travel</Link>
                </div> */}
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;