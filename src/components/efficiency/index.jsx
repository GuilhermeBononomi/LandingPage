import styles from './styles.module.css';

export default function Eficiencia() {
    return (
        <section className={styles.eficiencia}>
            <div className={styles.imgEficiencia}></div>
            <div className={styles.containerEficiencia}>
                <a href='https://advb.si.unifebe.edu.br/' target='_blank' className={styles.eficienciaTitle}>Eficiência</a>
                <div className={styles.supportContainer}>
                    <ul className={styles.eficienciaList}>
                        <li>
                            <p className={styles.eficienciaContent}>
                                Ferramentas e tecnologias que permitem que cegos realizem atividades diárias de forma
                                independente.
                            </p>
                        </li>
                        <li>
                            <p className={styles.eficienciaContent}>
                                Facilitação da navegação em ambientes públicos e privados sem depender de terceiros.
                            </p>
                        </li>
                        <li>
                            <p className={styles.eficienciaContent}>
                                Programas de orientação para ensinar técnicas de locomoção seguras e eficientes.
                            </p>
                        </li>
                        <li>
                            <p className={styles.eficienciaContent}>
                                A empresa demonstra seu compromisso com a responsabilidade social ao oferecer serviços que melhoram a qualidade de vida de pessoas cegas.
                            </p>
                        </li>
                        <li>
                            <p className={styles.eficienciaContent}>
                                Utilização de softwares e dispositivos que convertem texto em fala, ampliando o acesso a
                                livros, notícias e outros recursos educacionais.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}