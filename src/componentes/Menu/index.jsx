import React from 'react'
import home from './../../assets/icones/home-ativo.png'
import maisCurtidas from './../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from './../../assets/icones/mais-vistas-inativo.png'
import novas from './../../assets/icones/novas-inativo.png'
import surpreendaMe from './../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__intem}>
                <img src={home} alt=""/>
                <a href="/">Inicio</a>
            </li>
            <li className={styles.menu__intem}>
                <img src={maisCurtidas} alt=""/>
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__intem}>
                <img src={maisVistas} alt=""/>
                <a href="/">mais vistas</a>
            </li>
            <li className={styles.menu__intem}>
                <img src={novas} alt=""/>
                <a href="/">Nova</a>
            </li>
            <li className={styles.menu__intem}>
                <img src={surpreendaMe} alt=""/>
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
