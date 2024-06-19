import React, { Component } from "react";

type Props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<Props> {
    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="nomePet">Nome do Pet</label>
                        <input type="text" className="form-control" id="nomePet" placeholder="Nome do Pet" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="raca">Raça</label>
                        <input type="text" className="form-control" id="raca" placeholder="Raça" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo">Tipo</label>
                        <input type="text" className="form-control" id="tipo" placeholder="Tipo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpfDono">CPF do Dono</label>
                        <input type="text" className="form-control" id="cpfDono" placeholder="CPF do Dono" />
                    </div>
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar Pet</button>
                </form>
            </div>
        );
    }
}
