import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './home.module.css';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';
import Solicitacoes from '../../components/Solicitacoes/Solicitacoes';
import Apresentacao from '../../components/Apresentacao/Apresentacao';
import logoHome from '/images/apresentacao/home.jpg'

function Home() {
    return (
        <main className={styles.mainHome}>
            <h1 className={styles.titleHome}>Home <FontAwesomeIcon icon={faHome} /></h1>
            <article className={styles.container_home}>
                <section className={styles.sectionSolicitacoes}>
                    <Solicitacoes />
                </section>
                <section>
                    <Apresentacao img={logoHome} texto='O aplicativo Saúde Plus tem como missão simplificar a rotina diária de pacientes e profissionais de saúde,
                                                        proporcionando acesso fácil aos serviços públicos de saúde. Com uma interface intuitiva, o app visa melhorar a gestão de informações médicas,
                                                        agendamentos e acompanhamento de tratamentos. Além disso, facilita a comunicação entre usuários e profissionais, promovendo interação eficaz.
                                                        O Saúde Plus também oferece informações atualizadas sobre campanhas de saúde e dicas de prevenção, contribuindo para uma comunidade mais informada.
                                                        Sua abordagem integrada visa não apenas a conveniência, mas também a promoção ativa da saúde,
                                                        impactando positivamente a qualidade de vida dos usuários e contribuindo para uma sociedade mais saudável.'
                    />
                </section>
            </article>
            <h1 className={styles.titleObjetivos}><FontAwesomeIcon icon={faList}/> Objetivos do Saúde Plus</h1>
            <article className={styles.container_objetivos}> 
                <div>
                    <ul>
                        <li>Promover a comunicação entre usuários e profissionais</li>
                        <li>Simplificação da Rotina Diária</li>
                        <li>Melhoria na Gestão de Informações Médicas</li>
                        <li>Facilitação da Comunicação</li>
                        <li>Informações Atualizadas e Educação em Saúde</li>
                        <li>Abordagem Integrada para a Saúde</li>
                        <li>Impactar positivamente a qualidade de vida dos usuários</li>
                        <li>Contribuir para uma comunidade mais informada</li>
                    </ul>
                </div>
                <div>
                    <img src="https://www.medplus.com.br/wp-content/uploads/2020/12/importancia-de-um-software-para-novos-consultorios.jpg" alt="" />
                </div>
            </article>
        </main>
    ) 
}

export default Home;
