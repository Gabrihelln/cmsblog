"use client"

import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css"
import { useRouter } from "next/navigation";

const LoginPage = () => {

    const {data,status} = useSession()

    const router = useRouter()

   if (status === "loading") {
    return 
        <div className={styles.loading}>Loading...</div>
   }

   if (status === "authenticated") {
    router.push("/")
       
   }
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div 
                    className={styles.socialButton} onClick={()=>signIn("google")}>Entre com o do Google
                </div>
                <div 
                    className={styles.socialButton}>Entre com o Facebook
                </div>
                <div 
                    className={styles.socialButton}>Entre com o GitHub
                </div>
            </div>
        </div>
    )
}

export default LoginPage;