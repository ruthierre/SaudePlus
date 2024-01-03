import medicamentos from '../../../data/medicamentos.json'
import styles from './CardMedicamentos.module.css'

function CardMedicamentos(){
    return(
        <>
            {medicamentos.remedios.map((medicamento)=>(
                <div key={medicamento.id} className={styles.card}>
                    <p>{medicamento.nome}</p>
                    <img src={`images/remedios/${medicamento.img}`} alt="" />
                </div>
            ))}
        </>
    )
}

export default CardMedicamentos;
