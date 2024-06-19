import React, { Component } from "react";

type Props = {
    tema: string
}

export default class ListaServicos extends Component<Props> {
    render() {
        return (
            <div className="container-fluid">
                <h1>Lista de Serviços</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Serviço 1</td>
                            <td>R$ 150,00</td>
                            <td>
                                <button className="btn btn-warning">Editar</button>
                                <button className="btn btn-danger">Deletar</button>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        );
    }
}
