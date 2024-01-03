import styles from './CardTransporte.module.css'
import fotoOnibus from '../../../images/bigbus.png'
import { faClock, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Onibus({ handleAssentos, assentoSelecionado }: OnibusProps & { assentoSelecionado: number }) {

    return (
        <div className={styles.card_transporte}>
            <div>
                <h3>Ônibus</h3>
                <div className={styles.file_receita}>
                    <label className={styles.receita} htmlFor="arquivo">ANEXAR ENCAMINHAMENTO <FontAwesomeIcon icon={faFileInvoice}/></label>
                    <button onClick={handleAssentos}>SELECIONAR ASSENTO <span>{assentoSelecionado}</span></button>
                    <input type="file" name="arquivo" id="arquivo" />
                </div>
                <label>Selecionar data: <input type="date" /></label>
                <p>Necessita acompanhante? <input type="checkbox" /></p>
                <p>VAGAS: 46</p>
            </div>
            <div>
                <img src={fotoOnibus} alt="Ônibus" />
                <p><FontAwesomeIcon icon={faClock}/> Horário: 08:00AM</p>
                <button className={styles.btnSolicitacaoTrans}>SOLICITAR</button>
            </div>
        </div>
    )
}

export default Onibus;
