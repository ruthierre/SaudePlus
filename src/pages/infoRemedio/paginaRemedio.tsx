import { Link } from "react-router-dom";
import InfoRemedio from "../../components/Card/Remedio/InfoRemedio";
import MedicamentoProps from "../../interfaces/MedicamentosProps";
import styles from './paginaRemedio.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

function PaginaRemedio({ remedio }: { remedio: MedicamentoProps }) {
    return (
        <main className={styles.container_mainRemedio}>
            <article className={styles.container_infoRemedio}>
                <Link className={styles.voltar} to="/solicitar-medicamentos">
                    <FontAwesomeIcon icon={faCircleArrowLeft}/> Voltar
                </Link>
                <h1>Informações do medicamento</h1>
                <section>
                    <InfoRemedio remedio={remedio}/>
                </section>
            </article>
        </main>
    )
}

export default PaginaRemedio;
