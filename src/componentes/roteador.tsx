import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./cadastroProduto";
import FormularioCadastroServico from "./cadastroServico"; 
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServico";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./cadastroPets";
import ExemploFiltros from "./filtrosDeListagem";

type State = {
    tela: 'Clientes' | 'CadastroProdutos' | 'CadastroServicos' | 'CadastroCliente' | 'ListaProdutos' | 'ListaServicos' | 'ListaPets' | 'CadastroPet' | 'Filtros'
}

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: State['tela'], evento: Event) {
        evento.preventDefault()
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="#e3f2fd"
                botoes={[
                    'Clientes', 
                    'CadastroProdutos', 
                    'CadastroServicos', 
                    'CadastroCliente', 
                    'ListaProdutos', 
                    'ListaServicos', 
                    'ListaPets', 
                    'CadastroPet', 
                    'Filtros'
                ]}
            />
        );

        switch (this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente tema="#e3f2fd" />
                    </>
                )
            case 'CadastroProdutos':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProduto tema="#e3f2fd" />
                    </>
                )
            case 'CadastroServicos':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico tema="#e3f2fd" />
                    </>
                )
            case 'CadastroCliente':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="#e3f2fd" />
                    </>
                )
            case 'ListaProdutos':
                return (
                    <>
                        {barraNavegacao}
                        <ListaProdutos tema="#e3f2fd" />
                    </>
                )
            case 'ListaServicos':
                return (
                    <>
                        {barraNavegacao}
                        <ListaServicos tema="#e3f2fd" />
                    </>
                )
            case 'ListaPets':
                return (
                    <>
                        {barraNavegacao}
                        <ListaPets tema="#e3f2fd" />
                    </>
                )
            case 'CadastroPet':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroPet tema="#e3f2fd" />
                    </>
                )
            case 'Filtros':
                return (
                    <>
                        {barraNavegacao}
                        <ExemploFiltros tema="#e3f2fd" />
                    </>
                )
            default:
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente tema="#e3f2fd" />
                    </>
                )
        }
    }
}
