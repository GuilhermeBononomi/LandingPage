import styles from './styles.module.css';
import img from '../../assets/img-historia.png'

export default function History() {
    return (
        <section className={styles.history}>
            <div className= {styles.supportContainer}>
                <a href='https://advb.si.unifebe.edu.br/' target='_blank' className={styles.historyTitle}>História</a>
            </div>
            <div className={styles.historyContainer}>
                <p className={styles.historyContent}>
                    A associação dos Deficientes Visuais de Brusque (ADVB) foi fundada em 10 de junho de 2002 para
                    atender à necessidade de reabilitação e independência de um grupo de amigos com deficiência visual,
                    evitando deslocamentos para fora da cidade. Inicialmente, as atividades ocorreram em uma sala cedida
                    pela prefeitura, com ensino de Braille e mobilidade. Com o tempo, expandiu para cursos e palestras,
                    financiando-se através de eventos, doações e apoio institucional.
                </p>
            </div>
            <img src={img} className={styles.historyImg} />
        </section>
    )
}