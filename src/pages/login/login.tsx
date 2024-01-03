
import logo from '../../images/logoSaudePlusSemFundo.svg'
import { Link } from 'react-router-dom';
import style from './login.module.css'

function Login() {
    return (

        <div className={style.main}>
            <form className="form" method="post">
                <div className={style.login}>
                    <div className={style.logoClass}>
                        <img src={logo} alt="Logo Saude Plus" />
                    </div>

                    <div className={style.contentLogin}>
                        <div className={style.loginData}>
                            <h1>LOGIN</h1>
                            <p>Usuário:</p>
                            <input className={style.input} type="email" name="user" placeholder="CPF / CNS (CARTÃO SUS)" />
                            <p>SENHA</p>
                            <input className={style.input} type="password"/>
                        </div>

                        <div className={style.lembrarUsuario}>
                            <span className={style.checkPass}>
                                <input type="checkbox" />Lembre-me                     
                            </span>                        
                            <a href="#">Esqueceu a senha?</a>    
                        </div>

                        <div className={style.botoes}>                                                        
                                <Link to="/">
                                    <button className={style.botao}>
                                        LOGIN
                                    </button>
                                </Link>                                                                                   
                                <Link to="/cadastro">
                                    <button className={style.botao}>
                                        CADASTRE-SE
                                    </button>                                    
                                </Link>                                                      
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default Login;