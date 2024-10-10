import styles from './styles.module.css';
import img from '../../assets/sidnei.png'

export default function Founder() {
    return (
        <section className={styles.founder}>
            <div className={styles.author}>
                <span className={styles.authorName}>Sidnei Pavesi</span>
                <img src={img} className={styles.img}/>
            </div>
            <div className={styles.supportContainer}>
                <p className={styles.authorTestimony}>
                    É um equívoco pensar que pessoas com deficiência visual têm automaticamente sentidos mais apurados. Na verdade, elas usam mais esses sentidos para compreender o ambiente, o que resulta em maior atenção e habilidade. Devido à ausência de visão, elas dependem dos outros sentidos, como tato, olfato, paladar, sensações térmicas, orientação espacial e audição, e precisam prestar mais atenção neles do que pessoas que enxergam. A crença de que os outros sentidos se desenvolvem automaticamente é um mito.
                </p>
            </div>
        </section>
    )
}