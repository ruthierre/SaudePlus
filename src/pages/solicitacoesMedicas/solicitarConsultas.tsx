import styles from './solicitacoesMedicas.module.css';
import medicoConsulta from '/images/apresentacao/medico-consulta.webp';
import texto from '../../data/apresentacao.json'
import Apresentacao from '../../components/Apresentacao/Apresentacao';
import FormSolicitacaoMedica from '../../components/FormSolicitacao/FormSolicitacaoMedica/FormSolicitacaoMedica';

function SolicitarConsultas() {
    return (
        <main className={styles.mainSolicMedica}>
            <h1>Solicitar Consulta</h1>
            <article className={styles.container_solicMedica}>
                <section>
                    <FormSolicitacaoMedica tipo='da sua consulta'/>
                </section>
                <section>
                    <Apresentacao img={medicoConsulta} texto={texto.solicitacao_consultas} />
                </section>
            </article>
        </main>
    )
}

export default SolicitarConsultas;
