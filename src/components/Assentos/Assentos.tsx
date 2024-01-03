import assentos from '/images/assentos.png';
import styles from './Assentos.module.css';

interface AssentosProps {
    selecionarAssento: (assento: number) => void;
}

function Assentos({ selecionarAssento }: AssentosProps) {
    const assentosArray1: number[] = []

    for (let i = 1; i <= 44; i++) {
        assentosArray1.push(i)
    }

    return (
        <div className={styles.container_assentos}>
            <img src={assentos} alt="" />
            <div className={styles.containerBus}>
                {assentosArray1.map(numero => (
                    <button onClick={() => selecionarAssento(numero)} className={styles.seat} key={numero}>{numero}</button>
                ))}
            </div>
        </div>
    )
}

export default Assentos;
