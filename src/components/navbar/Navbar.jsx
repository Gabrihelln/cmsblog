import React from "react";
import styles from "./navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
    return (
        <div className= {styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>
                <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
            </div>
            <div className={styles.logo}>
<<<<<<< HEAD
                <Image src="/iiabreu.png" alt="Logo" width={76} height={50}/>
=======
            <Image src="/p1.jpeg" alt="" fill />
            {/* <div className={styles.logo}>IIAbreu</div> */}
>>>>>>> 8981641002e590917273aff8933ef93ebb194966
            </div>
            <div className={styles.links}>
                <ThemeToggle/>
                <Link href="/" className={styles.link}>Início</Link>
                <Link href="/" className={styles.link}>Ações Sociais</Link>
                <Link href="/" className={styles.link}>Sobre Nós</Link>
                <Link href="/" className={styles.link}>Fale Conosco</Link>
                <AuthLinks/>
            </div>
        </div>
    );
};

export default Navbar;