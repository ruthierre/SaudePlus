import Apresentacao from '../../../components/Apresentacao/Apresentacao';
import imgApresentacao from '/images/apresentacao/ag-saude.jpg';
import texto from '../../../data/apresentacao.json';
import styles from '../paginaAgente.module.css';
import FormAgente from '../../../components/FormSolicitacao/FormAgente/formAgente';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEye, faFileInvoice, faHeartPulse, faHouseMedical, faSyringe } from '@fortawesome/free-solid-svg-icons';

function SolicitarAgSaude() {
    return (
        <main className={styles.mainAgente}>
            <h1>Solicitar Agente de Saúde</h1>
            <article className={styles.container_agente}>
                <section>
                    <FormAgente />
                </section>
                <section>
                    <Apresentacao img={imgApresentacao} texto={texto.agente_comunitario_saude} />
                </section>
            </article>
            <h1>Motivos para solicitação</h1>
            <article className={styles.motivoAgente}>
                <section>
                    <ul>
                        <li><FontAwesomeIcon icon={faHouseMedical}/>  Visitas Domiciliares</li>
                        <li><FontAwesomeIcon icon={faBook}/> Educação em Saúde</li>
                        <li><FontAwesomeIcon icon={faEye}/>  Monitoramento de Grupos Vulneráveis</li>
                        <li><FontAwesomeIcon icon={faSyringe}/> Promoção de Vacinação</li>
                        <li><FontAwesomeIcon icon={faHeartPulse}/>  Acompanhamento de Tratamentos</li>
                        <li><FontAwesomeIcon icon={faFileInvoice}/>  Registro de Dados de Saúde</li>
                    </ul>
                    <img src="https://c7fc8402.rocketcdn.me/wp-content/uploads/2023/04/checklist-lista-de-verificacao.jpg" alt="" />
                </section>
            </article>
        </main>
    )
}

export default SolicitarAgSaude;
