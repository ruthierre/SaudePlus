import { Link } from 'react-router-dom';
import logo from '/images/logoSaudePlusSemFundo.svg'
import styles from './pageNotFound.module.css'

function PageNotFound() {
    return (
        <div className={styles.page_not_found}>
            <div>
                <img src={logo} alt="Logo do projeto" />
            </div>
            <div>
                <h1>404 - Página não encontrada :(</h1>
                <p>Desculpe, a página que você procura não existe.</p>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}

export default PageNotFound;
