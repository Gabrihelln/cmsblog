import React from "react";
import styles from "./menu.module.css"
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories"

const Menu = () => {
    return (
        <div className= {styles.container}>
            <h2 className={styles.subtitle}>{"Tendencias"}</h2>
            <h1 className={styles.title}>Mais Populares</h1>
            <MenuPosts withImage={false}/>
            <h2 className={styles.subtitle}>Navegue pelos Tópicos</h2>
            <h1 className={styles.title}>Categorias</h1>
            <MenuCategories/>
            <h2 className={styles.subtitle}>Escolha dos Editores</h2>
            <h1 className={styles.title}>Editores</h1>
           <MenuPosts withImage={true}/>
        </div>
    );
};

export default Menu;