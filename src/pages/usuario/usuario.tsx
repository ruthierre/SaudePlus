import style from './usuario.module.css';
import { Link } from 'react-router-dom';
import rodrigo from '/images/rodrigoUser.jpeg';

function Usuario(){
    return (
        <div className={style.container}>
            <div className={style.cadastroContainer}>
                <div className={style.setTypeUser}>
                    <div >
                        <div className={style.userContainer}>
                            <img src={rodrigo} alt="usuario" />
                        </div>
                    </div>
                </div>
                <div className={style.dataUser}>
                    <div className={style.userInfo}>
                        <h3>Dados do Usuário</h3>
                        <div className={style.areaDadosUsuario}>
                            <div className={style.nomeUser}>
                                <p>Nome completo:</p>
                                <input type="text" placeholder={"Ex: Rodrigo França"} />
                            </div>
                            <div>
                                <p>CPF:</p>
                                <input type="text" placeholder={"000.000.000-00"} />
                            </div>
                            <div>
                                <p>RG:</p>
                                <input type="text" placeholder={"00.000.000-00"} />
                            </div>
                        </div>
                        <div className={style.areaDadosUsuario}>
                            <div className={style.nomeUser}>
                                <p>CNS:</p>
                                <input type="text" placeholder={"0000 0000 0000 0000"} />
                            </div>
                            <div>
                                <p>SENHA:</p>
                                <input type="password" placeholder={"************"}/>
                            </div>
                            <div>
                                <p>DATA NASCIMENTO:</p>
                                <input type="text" placeholder={" 01/01/0001"}/>
                            </div>
                        </div>
                        <h3>CONTATO</h3>
                        <div className={style.areaDadosUsuario}>
                            <div className={style.nomeUser}>
                                <p>EMAIL:</p>
                                <input type="email" placeholder={"rodrigo@rf.com"} />
                            </div>
                            <div>
                                <p>TELEFONE:</p>
                                <input type="text" placeholder={"(00) 0 0000-0000"} />
                            </div>
                            <div >
                                <p>CEP:</p>
                                <input type="text" placeholder={"49300-000"} />
                            </div>
                        </div>
                        <div className={style.areaDadosUsuario}>
                            <div>
                                <p>ENDEREÇO:</p>
                                <input type="text" placeholder={"Rua A , n 000"} />
                            </div>
                            <div>
                                <p>BAIRRO:</p>
                                <input type="text" placeholder={"CENTRO"} />
                            </div>
                            <div>
                                <p>COMPLEMENTO:</p>
                                <input type="text" placeholder={" casa"} />
                            </div>
                        </div>
                        <div className={style.areaDadosUsuario}>
                            <div>
                                <p>CIDADE:</p>
                                <input type="text" placeholder={"Tobias Barreto"} />
                            </div>
                            <div>
                                <p>ESTADO:</p>
                                <input type="text" placeholder={"SE"} />
                            </div>
                            <div>
                                <Link to="/login">
                                    <button className={style.botao}>
                                        SALVAR
                                    </button>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usuario;
