import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faPhoneFlip, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import styles from './footer.module.css'

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.footer_container}>
                    <div className={styles.footer_content}>
                        <h2>SaúdePlus</h2>
                        <p>O app saúde plus tem como objetivo facilitar a logística diária do paciente e profissional,
                            facilitando o acesso aos serviços disponíveis na saúde pública
                        </p>
                    </div>
                    <div className={styles.servicos}>
                        <h2>Serviços</h2>
                        <ul>
                            <li>
                                <Link to="/solicitar-medicamentos">Solicitar Medicamentos</Link>
                            </li>
                            <li>
                                <Link to="/solicitar-transporte">Solicitar Transporte</Link>
                            </li>
                            <li>
                                <Link to="/solicitar-exames">Solicitar Exames</Link>
                            </li>
                            <li>
                                <Link to="/solicitar-consultas">Solicitar Consultas</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.links_uteis}>
                        <h2>Links Úteis</h2>
                        <ul>
                            <li>
                                <Link to="/sua-conta">Sua conta</Link>
                            </li>
                            <li>
                                <Link to="/filiar-se">Torne-se um afiliado</Link>
                            </li>
                            <li>
                                <Link to="/ajuda">Ajuda</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contatos}>
                        <h2>CONTATOS</h2>
                        <label>
                            <Link to="/ouvidoria">
                                <FontAwesomeIcon icon={faHeadset} />
                                Ouvidoria
                            </Link>
                        </label>
                        <label>
                            <FontAwesomeIcon icon={faHouse} />
                            Tobias Barreto, SE
                        </label>
                        <label>
                            <FontAwesomeIcon icon={faEnvelope} />
                            saudeplus@gmail.com
                        </label>
                        <label>
                            <FontAwesomeIcon icon={faPhoneFlip} />
                            +55 79 99999-8888
                        </label>
                    </div>
                </div>
            </footer>
            <div className={styles.footerCopyright}>
                <div className={styles.copy_container}>
                    <label>
                        &copy; 2024 -
                        <a target='_blank' href="https://github.com/EvilazioNeto"> Evilazio</a>,
                        <a target='_blank' href="https://github.com/JoaoVitorHipolito"> João Vitor</a>,
                        <a target='_blank' href="https://github.com/Rrodrigo2525"> Rodrigo </a>e
                        <a target='_blank' href="https://github.com/ruthierre"> Walber </a>
                    </label>
                    <div className={styles.redes}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;

