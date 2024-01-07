import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Form.module.css';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import FormMedicamentoProps from '../../../interfaces/FormMedicamentoProps';

function FormMedicamento({ medicamentosSelec, excluirMedicamento }: FormMedicamentoProps) {

    return (
        <form className={styles.formMed} method="post">
            <div className={styles.div_ubs}>
                <h3>Selecione sua UBS:</h3>
                <select>
                    <option value="">UBS - JOSÉ RAMOS</option>
                    <option value="">UBS - JOÃO DE SOUZA</option>
                    <option value="">UBS - AGRIPINO</option>
                    <option value="">UBS - ZILDA ARNS</option>
                </select>
            </div>
            <div className={styles.file_receita}>
                <p>Anexar Receita: </p>
                <label className={styles.receita} htmlFor="arquivo">Enviar arquivo <FontAwesomeIcon icon={faFileInvoice} /></label>
                <input type="file" name="arquivo" id="arquivo" required />
            </div>
            <div className={styles.lista_remedios}>
                <h4>Medicamentos Selecionados: </h4> 
                <ol className={styles.ol_medicamentos}>
                    {medicamentosSelec.length > 0 ? (
                        <>
                            {medicamentosSelec.map((medicamento) => (
                                <li onClick={()=> excluirMedicamento(medicamento)} key={medicamento.id}>{medicamento.nome} <span>X</span></li>
                            ))}
                        </>
                    ) : (
                        <p className={styles.emptyList}>Nenhum medicamento selecionado</p>
                    )}
                </ol>
            </div>
            <div className={styles.aviso}>
                <h4>Aviso <span>⚠</span></h4>
                <p>Antes de finalizar o processo, é imprescindível anexar uma receita válida para dar continuidade à solicitação do medicamento. Ao confirmar, seu pedido será marcado como "pendente". Posteriormente, após a confirmação, você receberá uma notificação com instruções sobre como retirar o medicamento ou a necessidade de anexar a receita novamente.</p>
                <label><input type="checkbox" /> Li e concordo com os <span>termos e serviços</span></label>
            </div>
            <button className={styles.btnConfirmarMed} type="button">CONFIRMAR</button>
        </form>
    )
}

export default FormMedicamento;
