import styles from './styles.module.css';

export default function Newsletter() {
    return (
        <section className={styles.news}>
            <div className={styles.img}></div>
            <div className={styles.info}>
                <form action="#" method="post" autocomplete="off">
                    <a href='https://advb.si.unifebe.edu.br/' className={styles.title}>Notícias Frequentes</a>
                    <label for="name">Nome Completo:</label>
                    <input type="text" className={styles.name} placeholder="Lorem ipsum dolar sit amet consectetur" />
                    <label for="email">Email:</label>
                    <input type="email" className={styles.email} placeholder="Lorem ipsum dolar sit amet consectetur" />
                    <input type="submit" value="Enviar" className={styles.btn} />
                </form>
            </div>
        </section>
    )
}