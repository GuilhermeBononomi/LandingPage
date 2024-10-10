import styles from './styles.module.css';

export default function Banner() {
    return (
        <section className={styles.bannerSection}>
            <a href='https://advb.si.unifebe.edu.br/' target='_blank' className={styles.titleContainer}>
                <div className={styles.title}>
                    <h1 className={styles.text}>Associação dos deficientes visuais de Brusque e Região</h1>
                </div>
            </a>
            <div className={styles.imgBanner}/>
        </section>
    )
}