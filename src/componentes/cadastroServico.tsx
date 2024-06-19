import React, { Component } from "react";

type Props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="nomeServico">Nome do Serviço</label>
                        <input type="text" className="form-control" id="nomeServico" placeholder="Nome do Serviço" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" rows={3} placeholder="Descrição do Serviço"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="valor">Valor</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                            <input type="text" className="form-control" id="valor" placeholder="Valor" />
                        </div>
                    </div>
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar Serviço</button>
                </form>
            </div>
        )
    }
}
