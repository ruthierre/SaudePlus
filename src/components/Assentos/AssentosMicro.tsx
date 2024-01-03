import assentosMicro from '../../images/assentosMicro.png';
import styles from './Assentos.module.css';

interface AssentosProps {
    selecionarAssento: (assento: number) => void;
}

function AssentosMicro({ selecionarAssento }: AssentosProps) {
    const assentosArray1: number[] = []

    for (let i = 1; i <= 20; i++) {
        assentosArray1.push(i)
    }

    return (
        <div className={styles.container_assentosMicro}>
            <img src={assentosMicro} alt="" />
            <div className={styles.container}>
                {assentosArray1.map(numero => (
                    <button onClick={()=> selecionarAssento(numero)} className={styles.seat} key={numero}>{numero}</button>
                ))}
            </div>
        </div>
    )
}

export default AssentosMicro;
