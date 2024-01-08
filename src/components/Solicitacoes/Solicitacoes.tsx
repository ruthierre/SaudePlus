import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Solicitacoes.module.css';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Solicitacoes() {
    return (
        <>
            <div className={styles.container_solicitacoes}>
                <h1>Minhas Solicitações</h1>
                <div className={styles.card_solicitacao}>
                    <div>
                        <p><span>Solicitação:</span> Transporte (Ônibus)</p>
                        <p><span>Assento:</span> 20</p>
                        <p><span>Data:</span> 10/01/2024</p>
                        <p><span>Status:</span> <span className={styles.pendente}>Pendente</span></p>
                    </div>
                    <div className={styles.handleSolic}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </div>
                </div>

                <div className={styles.card_solicitacao}>
                    <div>
                        <p><span>Solicitação:</span> Exame</p>
                        <p><span>CID:</span> Z01</p>
                        <p><span>Data:</span> 10/01/2024</p>
                        <p><span>Status:</span> <span  className={styles.aprovado}>Aprovado</span></p>
                    </div>
                    <div className={styles.handleSolic}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </div>
                </div>
                <div className={styles.card_solicitacao}>
                    <div>
                        <p><span>Solicitação:</span> Ag. Saúde</p>
                        <p><span>Motivo:</span> Dúvidas</p>
                        <p><span>Data:</span> 10/01/2024</p>
                        <p><span>Status:</span> <span className={styles.aprovado}>Aprovado</span></p>
                    </div>
                    <div className={styles.handleSolic}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </div>
                </div>
                <div className={styles.card_solicitacao}>
                    <div>
                        <p><span>Solicitação:</span> Consulta</p>
                        <p><span>CID:</span> Z00</p>
                        <p><span>Data:</span> 10/01/2024</p>
                        <p><span>Status:</span> <span className={styles.negado}>Negado</span></p>
                    </div>
                    <div className={styles.handleSolic}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </div>
                </div>
                <div className={styles.card_solicitacao}>
                    <div>
                        <p><span>Solicitação:</span> Medicamentos</p>
                        <ol>
                            <li>Lozartana</li>
                            <li>Dipirona</li>
                        </ol>
                        <p><span>Data:</span> 10/01/2024</p>
                        <p><span>Status:</span> <span className={styles.aprovado}>Aprovado</span></p>
                    </div>
                    <div className={styles.handleSolic}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <FontAwesomeIcon icon={faPenToSquare}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solicitacoes;
