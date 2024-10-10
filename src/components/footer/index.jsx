import styles from './styles.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href='https://advb.si.unifebe.edu.br/' target='_blank' className={styles.contact}>Contato</a>
            <div className={styles.data}>
                <span className={styles.telephone}>Telefone</span>
                <span className={styles.address}>Endereço</span>
            </div>
            <div className={styles.dateContainer}>
                <div className={styles.numContainer}>
                    <span className={styles.num}>(47) 9 9921 - 8292</span>
                    <span className={styles.num}>(47) 3251 - 1833</span>
                </div>
                <span className={styles.spot}>Rua Germano Schaefer, nº 10, Apto. 203 - Centro 1 - Brusque - SC - 88350-330</span>
            </div>
        </footer>
    )
}