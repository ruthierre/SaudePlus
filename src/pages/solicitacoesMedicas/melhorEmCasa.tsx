import styles from './solicitacoesMedicas.module.css';
import logoMelhorEmCasa from '/images/apresentacao/melhor-em-casa.webp';
import texto from '../../data/apresentacao.json'
import Apresentacao from '../../components/Apresentacao/Apresentacao';
import FormSolicitacaoMedica from '../../components/FormSolicitacao/FormSolicitacaoMedica/FormSolicitacaoMedica';

function MelhorEmCasa() {
    return (
        <main className={styles.mainSolicMedica}>
            <h1>Solicitar Atendimento Domiciliar</h1>
            <article className={styles.container_solicMedica}>
                <section>
                    <FormSolicitacaoMedica tipoAnexo='relatório médico' localAtendimento={false} tipo='do seu relatório médico'/>
                </section>
                <section>
                    <Apresentacao img={logoMelhorEmCasa} texto={texto.servico_atendimento_domiciliar} />
                </section>
            </article>
        </main>
    )
} 

export default MelhorEmCasa;
