import ApresentacaoProps from '../../interfaces/ApresentacaoProps';
import styles from './Apresentacao.module.css';

function Apresentacao({img, texto}: ApresentacaoProps){
    return(
        <div className={styles.container_apresentacao}>
            <img src={img} alt="" />
            <p>{texto}</p>
        </div>
    )
}

export default Apresentacao;
