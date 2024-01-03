import MicroOnibus from "../../components/Card/Transporte/Micro-onibus";
import Onibus from "../../components/Card/Transporte/Onibus";
import { useState } from 'react';
import styles from './transporte.module.css'
import Assentos from "../../components/Assentos/Assentos";
import AssentosMicro from "../../components/Assentos/AssentosMicro";

function SolicitarTransporte() {
    const [ativarAssentos, setAtivarAssentos] = useState<boolean>(false);
    const [ativarAssentosMicro, setAtivarAssentosMicro] = useState<boolean>(false);

    const [assentoSelecionado, setAssentoSelecionado] = useState<number>(0)
    const [assentoSelecionadoMicro, setAssentoSelecionadoMicro] = useState<number>(0)

    function selecionarAssento(seat: number) {
        setAssentoSelecionado(seat)
    }
    function selecionarAssentoMicro(seat: number) {
        setAssentoSelecionadoMicro(seat)
    }

    function handleAssentos(){
        setAtivarAssentos(!ativarAssentos)
    }

    function handleAssentosMicro(){
        setAtivarAssentosMicro(!ativarAssentosMicro)
    }
 
    return (
        <main className={styles.mainTransporte}>
            <article className={styles.container_transporte}>
                <h1>Solicitar transporte</h1>
                <section>
                    <Onibus handleAssentos={handleAssentos} assentoSelecionado={assentoSelecionado}/>
                    {ativarAssentos && <Assentos selecionarAssento={selecionarAssento}/>}
                </section>
                <section>
                    <MicroOnibus handleAssentos={handleAssentosMicro} assentoSelecionado={assentoSelecionadoMicro}/>
                    {ativarAssentosMicro && <AssentosMicro selecionarAssento={selecionarAssentoMicro}/>}
                </section>
            </article>
        </main>
    )
}

export default SolicitarTransporte;
