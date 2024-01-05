import { Link } from 'react-router-dom'
import medicamentos from '../../../data/medicamentos.json'
import styles from './CardMedicamentos.module.css'
import MedicamentoProps from '../../../interfaces/MedicamentosProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface CardMedicamentosProps{
    selecionarMedicamento: (medicamento: MedicamentoProps) => void;
}

function CardMedicamentos({selecionarMedicamento}: CardMedicamentosProps) {
    return (
        <>
            {medicamentos.remedios.map((medicamento: MedicamentoProps) => (
                <div key={medicamento.id} className={styles.card}>
                    <Link className={styles.link} to={`/${medicamento.nome}`}>
                        <FontAwesomeIcon className={styles.iconeInfo} icon={faCircleExclamation}/>
                        <p>{medicamento.nome}</p>
                        <img src={`/images/remedios/${medicamento.img}`} alt={medicamento.descricao} />
                    </Link>
                    <button onClick={()=> selecionarMedicamento(medicamento)}>SELECIONAR</button>
                </div>
            ))}
        </>
    )
}

export default CardMedicamentos;
