"use client"

import React, { useState } from "react";
import styles from "./authLinks.module.css"
import Link from "next/link";
import { signOut } from "next-auth/react";

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const status = "authenticated";

    return (
       <>
       {status === "notauthenticated" ? (
            <Link href="/login" className={styles.link}>Login</Link>
       ) : (
        <>
        <Link href="/write" className={styles.link}>Write</Link>
        <span className={styles.link} onClick={signOut}>Logout</span>
        </>
       )}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        {open && (
            <div className={styles.responsiveMenu}>
                <Link href="/">Início</Link>
                <Link href="/">Ações Sociais</Link>
                <Link href="/">Sobre Nós</Link>
                <Link href="/">Fale Conosco</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                    <>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>Logout</span>
                    </>
                    )}
            </div>
        )}

       </>
    );
    
};

export default AuthLinks;