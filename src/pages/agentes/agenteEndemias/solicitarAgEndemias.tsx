import Apresentacao from '../../../components/Apresentacao/Apresentacao';
import styles from '../paginaAgente.module.css';
import imgApresentacao from '/images/apresentacao/ag-endemias.jpg'
import texto from '../../../data/apresentacao.json';
import FormAgente from '../../../components/FormSolicitacao/FormAgente/formAgente';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard, faBriefcase, faGlasses, faMosquito, faPhone, faSpider, faSyringe } from '@fortawesome/free-solid-svg-icons';

function SolicitarAgEndemias() {
    return (
        <main className={styles.mainAgente}>
            <h1>Solicitar Agente de Endemias</h1>
            <article className={styles.container_agente}>
                <section>
                    <FormAgente />
                </section>
                <section>
                    <Apresentacao img={imgApresentacao} texto={texto.agente_combate_endemias}/>
                </section>
            </article>
            <h1>Motivos para solicitação</h1>
            <article className={styles.motivoAgente}>
                <section>
                    <ul>
                        <li><FontAwesomeIcon icon={faSpider}/> Controle de Roedores e Outros Vetores</li>
                        <li><FontAwesomeIcon icon={faMosquito}/> Prevenção e Controle do Mosquito Aedes aegypti</li>
                        <li><FontAwesomeIcon icon={faBiohazard}/> Controle de Epidemias e Doenças Transmitidas por Vetore</li>
                        <li><FontAwesomeIcon icon={faPhone}/> Ações em Situações de Emergência</li>
                        <li><FontAwesomeIcon icon={faSyringe}/> Campanhas de Vacinação e Imunização</li>
                        <li><FontAwesomeIcon icon={faGlasses}/> Vigilância Sanitária</li>
                        <li><FontAwesomeIcon icon={faBriefcase}/> Fortalecimento do Sistema de Saúde Local</li>
                    </ul>
                    <img src="https://c7fc8402.rocketcdn.me/wp-content/uploads/2023/04/checklist-lista-de-verificacao.jpg" alt="" />
                </section>
            </article>
        </main> 
    )
}

export default SolicitarAgEndemias;
