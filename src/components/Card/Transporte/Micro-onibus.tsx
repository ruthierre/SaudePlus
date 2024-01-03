import styles from './CardTransporte.module.css';
import fotoOnibus from '/images/onibus-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

function MicroOnibus({ handleAssentos, assentoSelecionado }: OnibusProps & { assentoSelecionado: number }) {
    return (
        <div className={styles.card_transporte}>
            <div>
                <h3>Micro-Ônibus</h3>
                <div className={styles.file_receita}>
                    <label className="receita" htmlFor="arquivo">ANEXAR ENCAMINHAMENTO <FontAwesomeIcon icon={faFileInvoice}/></label>
                    <button onClick={handleAssentos}>SELECIONAR ASSENTO <span>{assentoSelecionado}</span></button>
                    <input type="file" name="arquivo" id="arquivo" />
                </div>
                <label>Selecionar data: <input type="date" /></label>
                <p>Necessita acompanhante? <input type="checkbox" /></p>
                <p>VAGAS: 20</p>
            </div>
            <div>
                <img src={fotoOnibus} alt="Ônibus" />
                <p><FontAwesomeIcon icon={faClock}/> Horário: 04:00AM</p>
                <button className={styles.btnSolicitacaoTrans}>SOLICITAR</button>
            </div>
        </div>
    )
}

export default MicroOnibus;
