import InfoRemedio from "../../components/Card/Remedio/InfoRemedio";
import MedicamentoProps from "../../interfaces/MedicamentosProps";
import styles from './paginaRemedio.module.css';

function PaginaRemedio({ remedio }: { remedio: MedicamentoProps }) {
    return (
        <main className={styles.container_mainRemedio}>
            <article className={styles.container_infoRemedio}>
                <h1>Informações do medicamento</h1>
                <section>
                    <InfoRemedio remedio={remedio}/>
                </section>
            </article>
        </main>
    )
}

export default PaginaRemedio;
