import styles from "./loginPage.module.css"

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div 
                    className={styles.socialButton}>Entre com o do Google
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