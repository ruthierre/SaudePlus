import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FormSolicitacaoMedica.module.css';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

interface FormSolicMedProps {
    tipo: string;
    localAtendimento: boolean;
    tipoAnexo: string;
}

function FormSolicitacaoMedica({ tipo, localAtendimento, tipoAnexo }: FormSolicMedProps) {
    return (
        <>
            <form className={styles.form_solicMed}>
                <div className={styles.file_receita}>
                    <h3>Anexar {tipoAnexo} </h3>
                    <label className={styles.receita} htmlFor="arquivo">Enviar arquivo <FontAwesomeIcon icon={faFileInvoice} /></label>
                    <input type="file" name="arquivo" id="arquivo" required />
                </div>

                {localAtendimento && (
                    <div className={styles.div_ubs}>
                        <h3>Local de atendimento:</h3>
                        <select name="" id="">
                            <option value="">UBS</option>
                            <option value="">SMS - SECRETARIA MUNICIPAL DE SAÚDE</option>
                            <option value="">CEME</option>
                        </select>
                    </div>
                )}

                <div className={styles.cid_container}>
                    <h3>Informe o CID {tipo}:</h3>
                    <input type="text" placeholder="Encontre o CID na sua receita. Ex: CID Z10" />
                </div>

                <div className={styles.aviso}>
                    <h4>Aviso <span>⚠</span></h4>
                    <p>Antes de confirmar é necessário anexar uma receita válida para prosseguirmos com a solicitação, ao confimar, sua solicitação ficará como "pendente", e após confirmação você recebera uma notificação informando sobre sua solicitação ou Anexar a receita novamente.</p>
                    <label><input type="checkbox" /> Li e concordo com os <span>termos e serviços</span></label>
                </div>
                <button className={styles.btnSolicitacaoExam} type="button">CONFIRMAR</button>
            </form>
        </>
    )
}

export default FormSolicitacaoMedica;
