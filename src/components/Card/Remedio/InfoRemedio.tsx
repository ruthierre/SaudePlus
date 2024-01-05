import MedicamentoProps from "../../../interfaces/MedicamentosProps";
import styles from "./InfoRemedio.module.css";

function InfoRemedio({ remedio }: { remedio: MedicamentoProps }) {
    return (
        <>
            {
                <div className={styles.cardRemedio}>
                    <img src={`/images/remedios/${remedio.img}`} alt={remedio.descricao} />
                    <div>
                        <h2>{remedio.nome}</h2>
                        <p><span>Descrição:</span> {remedio.descricao}</p>
                        <p><span>Contra Indicacoes:</span>  {remedio.contraindicacoes}</p>
                        <p><span>Possíveis efeitos colaterais:</span> {remedio.efeitos_colaterais}</p>
                        <p><span>Indicações:</span> {remedio.indicacoes}</p>
                        <p><span>Mecanismo de ação:</span> {remedio.mecanismo_acao}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoRemedio;
