import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.createBankSlip = this.createBankSlip.bind(this);
        this.state = {
            clicked: false,
            indexClicked: null
        };
    }

    createBankSlip(index) {
        this.setState({
            clicked: true,
            indexClicked: index
        })
    }

    render() {
        const items = []
        const amount = 1800
        const parcels = 3

        for (let i = 1; i <= parcels; i++) {
            items.push(
                    <div key={i}>
                        <button onClick={() => { this.createBankSlip(i) } }>
                            Boleto em {i}x de R$ {(amount/i).toFixed(2).replace('.', ',')}
                        </button>
                    </div>)
        }

        let content = <div>
            <div className="content-message">
                Bom dia caro(a) Geroudo
                <br/>
                Conforme negociado com nossa central, seguem condições para a liquidação de sua dívida no valor de R$ {amount.toFixed(2).replace('.', ',')}
            </div>
            <div className="container-button">
                {items}
            </div>
        </div>

        if (this.state.clicked) {
            content = <div>
                        O Valor da sua Parcela é R$ {(amount/this.state.indexClicked).toFixed(2).replace('.', ',')}
                        <br/>
                        <br/>
                        Seu código é:
                        <br/>
                        <br/>
                        34191528956540000000000000
                        <br/>
                        <br/>
                        <button onClick={() => { alert('código 34191528956540000000000000 copiado') }}>
                            Copiar código
                        </button>
                    </div>;
        }

        return (
            <div className="app">
                <div className="header">
                    <div align="center" className="banner">
                        <img src="http://talkip.com.br/images/logo.png" alt="talk ip" />
                    </div>
                </div>
                <div className="content">
                    {this.state.clicked}
                    {content}
                </div>
                <div className="footer">
                    <div className="col">
                        <a href="tel:+5511975685680">
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                            <br/>
                            Telefone
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://api.whatsapp.com/send?phone=5511975685680&text=vou pagar os 14 meses de aluguel que estão atrasados">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            <br/>
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
