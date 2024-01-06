import styles from './formAgente.module.css';

function FormAgente() {
    return (
        <>
            <form className={styles.form_agente}>
                <div>
                    <h3>Motivo da solicitação</h3>
                    <textarea></textarea>
                </div>
                <h3>Dia que posso receber o agente: </h3>
                <input type="date" />
                <div className={styles.turno}>
                    <label htmlFor="manha">Manhã <input type="radio" name="turno" id="manha" /></label>
                    <label htmlFor="tarde">Tarde <input type="radio" name="turno" id="tarde" /></label>
                    <label htmlFor="noite">Noite <input type="radio" name="turno" id="noite" /></label>
                </div>
                <div className={styles.aviso}>
                    <h4>Aviso <span>⚠</span></h4>
                    <p>Após a confirmação, o agente receberá uma notificação com orientações sobre a visita à residência, contribuindo para um atendimento eficaz e personalizado.</p>
                    <label><input type="checkbox" /> Li e concordo com os <span>termos e serviços</span></label>
                </div>
                <button type="button" className={styles.btnSolicitacaoAgenteSaude}>SOLICITAR</button>
            </form>
        </>
    )
}

export default FormAgente;
