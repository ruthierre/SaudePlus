import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './styles.css';

function Footer() { 
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className="footer-content">
                        <h2>SaúdePlus</h2>
                        <p>O app saúde plus tem como objetivo facilitar a logística diária do paciente e profissional,
                            facilitando o acesso aos serviços disponíveis na saúde pública
                        </p>
                    </div>
                    <div className="servicos">
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
                    <div className="links-uteis">
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
                    <div className="contatos">
                        <h2>CONTATOS</h2>
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
            <div className="footerCopyright">
                <div className='copy-container'>
                    <label>
                        &copy; 2024 - Evilazio, João Vitor, Rodrigo e Walber
                    </label>
                    <div className='redes'>
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

