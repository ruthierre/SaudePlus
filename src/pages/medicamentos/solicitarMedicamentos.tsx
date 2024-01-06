import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardMedicamentos from "../../components/Card/CardMedicamentos/CardMedicamentos";
import FormMedicamento from "../../components/FormSolicitacao/FormMedicamento/FormMedicamento";
import styles from './medicamentos.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MedicamentoProps from "../../interfaces/MedicamentosProps";
import { useState } from "react";
import medicamentos from '../../data/medicamentos.json'

function SolicitarMedicamentos() {
    const [medSelecionados, setMedSelecionados] = useState<MedicamentoProps[]>([])
    const [arrMedicamentos, setArrMedicamentos] = useState<MedicamentoProps[]>(medicamentos.remedios)
    const [medFiltrado, setMedFiltrado] = useState<string>()

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

    function pesquisarMed(e: string){
        setMedFiltrado(e)
    }

    function filtrarMedicamentos(){
        const filtrado: MedicamentoProps[] = arrMedicamentos.filter((medicamento) => medicamento.nome.toLowerCase() === medFiltrado)
        if(filtrado.length > 0){
            let index: number = arrMedicamentos.indexOf(filtrado[0])
            arrMedicamentos.splice(index, 1)
            arrMedicamentos.unshift(filtrado[0])
            const arrayFiltrado = [...arrMedicamentos]
            setArrMedicamentos(arrayFiltrado)
        }
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
                        <input type="text" placeholder="Ex: Dipirona" onChange={(e)=> pesquisarMed(e.target.value.toLowerCase())}/>
                        <FontAwesomeIcon className={styles.iconSearch} icon={faSearch} onClick={filtrarMedicamentos}/>
                    </div>
                    <div className={styles.container_card}>
                        <CardMedicamentos selecionarMedicamento={selecionarMedicamento} medicamentos={arrMedicamentos}/>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default SolicitarMedicamentos;
