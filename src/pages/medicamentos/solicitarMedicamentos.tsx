import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardMedicamentos from "../../components/Card/CardMedicamentos/CardMedicamentos";
import FormMedicamento from "../../components/FormSolicitacao/FormMedicamento/FormMedicamento";
import styles from './medicamentos.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MedicamentoProps from "../../interfaces/MedicamentosProps";
import { useState } from "react";

function SolicitarMedicamentos() {
    const [medSelecionados, setMedSelecionados] = useState<MedicamentoProps[]>([])

    function selecionarMedicamento(medicamento: MedicamentoProps) {
        if (!medSelecionados.includes(medicamento)) {
            const selecionados: MedicamentoProps[] = [...medSelecionados, medicamento]
            setMedSelecionados(selecionados)
        }
    }

    function excluirMedicamento(medicamento: MedicamentoProps) {
            const encontrado: number = (medSelecionados.indexOf(medicamento))
            medSelecionados.splice(encontrado, 1)
            const novoArray: MedicamentoProps[] = [...medSelecionados]
            setMedSelecionados(novoArray)
    } 

    return (
        <main className={styles.mainMedicamentos}>
            <article className={styles.container_medicamentos}>
                <section className={styles.sectionForm}>
                    <FormMedicamento excluirMedicamento={excluirMedicamento} medicamentosSelec={medSelecionados} />
                </section>
                <section className={styles.sectionMed}>
                    <div className={styles.container_filtroMed}>
                        <h2>Pesquisar Medicamentos:</h2>
                        <input type="text" />
                        <FontAwesomeIcon className={styles.iconSearch} icon={faSearch} />
                    </div>
                    <div className={styles.container_card}>
                        <CardMedicamentos selecionarMedicamento={selecionarMedicamento} />
                    </div>
                </section>
            </article>
        </main>
    )
}

export default SolicitarMedicamentos;
