import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <a href="#" className={styles.navLink}>História</a>
                <a href="#" className={styles.navLink}>Fundação</a>
                <a href="#" className={styles.navLink}>Contato</a>
                <a href="#" className={styles.navLink}>Relatos</a>
            </nav>
        </header>
    )
}