import styles from './solicitacoesMedicas.module.css';
import medicoFicha from '/images/apresentacao/medico-ficha.jpg';
import texto from '../../data/apresentacao.json'
import Apresentacao from '../../components/Apresentacao/Apresentacao';
import FormSolicitacaoMedica from '../../components/FormSolicitacao/FormSolicitacaoMedica/FormSolicitacaoMedica';

function SolicitarExames() {
    return (
        <main className={styles.mainSolicMedica}>
            <h1>Solicitar Exame</h1>
            <article className={styles.container_solicMedica}>
                <section>
                    <FormSolicitacaoMedica tipoAnexo='receita' localAtendimento={true}  tipo='do seu exame'/>
                </section>
                <section>
                    <Apresentacao img={medicoFicha} texto={texto.solicitacao_exames} />
                </section>
            </article>
        </main>
    )
}

export default SolicitarExames;
