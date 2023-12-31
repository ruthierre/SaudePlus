import logo from '../../images/logoSaudePlusSemFundo.svg'
import { Link } from 'react-router-dom';
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header() {
    const [ativarClasse, setAtivarClasse] = useState<boolean>(false);
    const [ativarClasseAG, setAtivarClasseAG] = useState<boolean>(false);

    function ativarDesativarNav() {
        setAtivarClasse(!ativarClasse);
        if(ativarClasseAG){
            setAtivarClasseAG(!ativarClasseAG)
        }
    };

    function ativarDesativarAgente() {
        setAtivarClasseAG(!ativarClasseAG);
        if(ativarClasse){
            setAtivarClasse(!ativarClasse)
        }
    };

    return (
        <header>
            <div className={styles.header_container}>
                <Link to="/">
                    <img src={logo} alt="logo do projeto" />
                </Link>
                <ul className={styles.navigator}>
                    <li onClick={ativarDesativarNav} className={styles.optionsList}>
                        Solicitações
                        {ativarClasse ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                        <ul className={`${styles.solicitacoesList} ${ativarClasse ? styles.ativar : styles.desativado}`}>
                            <li>
                                <Link to="/solicitar-exames">
                                    Exames
                                </Link>
                            </li>
                            <li>
                                <Link to="/solicitar-consultas">
                                    Consultas
                                </Link>
                            </li>
                            <li>
                                <Link to="/solicitar-transporte">
                                    Transporte
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li onClick={ativarDesativarAgente} className={styles.optionsList}>
                        Agentes
                        {ativarClasseAG ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                        <ul className={`${styles.solicitacoesList} ${ativarClasseAG ? styles.ativar : styles.desativado}`}>
                            <li>
                                <Link to="/solicitar-agente-saude">
                                    Agente de Saúde
                                </Link>
                            </li>
                            <li>
                                <Link to="/solicitar-agente-endemias">
                                    Agente de Endemias
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/solicitar-medicamentos">
                            Medicamentos
                        </Link>
                    </li>
                    <li>
                        <Link to="/solicitar-melhor-em-casa">
                            Melhor em Casa
                        </Link>
                    </li>
                    <li>
                        Notificações
                        <FontAwesomeIcon icon={faEnvelope} />
                    </li>
                    <li>
                        <Link to="/usuario">
                            Usuário
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
