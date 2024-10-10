import styles from './styles.module.css';

export default function Descriptions() {
    return (
        <section className={styles.desc}>
            <div className={styles.supportContainer}>
                <a href='https://advb.si.unifebe.edu.br/' target='_blank' className={styles.descTitle}>Relatos</a>
            </div>
            <div className={styles.flexboxContainer}>
                <div className={styles.relatosContainer}>
                    <p className={styles.relatosContent}>
                        Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis
                        interdum a.
                        Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu
                        maecenas.
                        Risus lectus nisl.
                    </p>
                    <div className={styles.relatosUser}>
                        <div className={styles.userPicture}></div>
                        <span className={styles.userName}>Usuário 1</span>
                    </div>
                </div>
                <div className={styles.relatosContainer}>
                    <p className={styles.relatosContent}>
                        Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna
                        sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor
                        egestas pellentesque eu maecenas. Risus lectus nisl.
                    </p>
                    <div className={styles.relatosUser}>
                        <div className={styles.userPicture}></div>
                        <span className={styles.userName}>Usuário 2</span>
                    </div>
                </div>
                <div className={styles.relatosContainer}>
                    <p className={styles.relatosContent}>
                        Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna
                        sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor
                        egestas pellentesque eu maecenas. Risus lectus nisl.
                    </p>
                    <div className={styles.relatosUser}>
                        <div className={styles.userPicture}></div>
                        <span className={styles.userName}>Usuário 3</span>
                    </div>
                </div>
            </div>
        </section>
    )
}