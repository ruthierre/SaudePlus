import style from './ouvidoria.module.css'
import ouvidoriaIcon from '/images/ouvidoriaIcon.svg'
import denuncia from '/images/bullHornIcon.svg'
import negativo from '/images/thumbsDownIcon.svg'
import positivo from '/images/thumbsUpIcon.svg'
import message from '/images/messageIcon.svg'

function Ouvidoria() {
    return (
        <div className={style.ouvidoriaContainer}>
            <div className={style.explicativoOuvidoria}>
                <div className={style.texto}>
                    <h3>
                        O canal de Ouvidoria tem como objetivo receber o registro de manifestações relacionadas a
                        conflitos interpessoais e denúncias (assédios, discriminação e ETC...),
                        bem como à tratativa de reclamações administrativas.
                    </h3>
                </div>
                <div className={style.iconeOuvidoria}>
                    <img src={ouvidoriaIcon} alt="Icone de ouvidoria" />
                </div>

            </div>
            <div className={style.tiposOuvidoria}>
                <div>
                    <h2>Ouvidorias</h2>
                </div>
                <div className={style.ouvidorias}>
                    <div className={style.ouvidoria1}>
                        <img src={denuncia} alt="bull horn" />
                        <h1>fazer uma denúncia</h1>
                        <p>Informe um ato ilícito praticado contra a administração pública.</p>
                    </div>
                    <div className={style.ouvidoria2}>
                        <img src={negativo} alt="thumb down" />
                        <h1>Fazer uma Reclamação</h1>
                        <p>Manifeste sua insatisfação com um serviço público.</p>
                    </div>
                    <div className={style.ouvidoria3}>
                        <img src={positivo} alt="thumb up" />
                        <h1>Fazer um Elogio</h1>
                        <p>Expresse se você está satisfeito com um atendimento público.</p>
                    </div>
                    <div className={style.ouvidoria4}>
                        <img src={message} alt="mensagem de sujestão" />
                        <h1>Fazer uma Sugestão</h1>
                        <p>Envie uma ideia ou proposta de melhoria dos serviços públicos.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ouvidoria;
