import React, { Component } from "react";

type Props = {
    tema: string
}

export default class ExemploFiltros extends Component<Props> {
    render() {
        return (
            <div className="container-fluid">
                <h1>Exemplo de Filtros</h1>
                <div className="form-group">
                    <label htmlFor="filtro">Filtro</label>
                    <select className="form-control" id="filtro">
                        <option>10 Clientes que mais consumiram</option>
                        <option>Produtos mais consumidos</option>
                        <option>Serviços mais consumidos</option>
                        <option>Clientes que mais consumiram em valor</option>
                    </select>
                </div>
                <button className="btn btn-outline-secondary" type="button" style={{ background: this.props.tema }}>Filtrar</button>
            </div>
        );
    }
}
