import React, { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="nomeProduto">Nome do Produto</label>
                        <input type="text" className="form-control" id="nomeProduto" placeholder="Nome do Produto" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="valor">Valor</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                            <input type="text" className="form-control" id="valor" placeholder="Valor" />
                        </div>
                    </div>
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar Produto</button>
                </form>
            </div>
        )
    }
}
