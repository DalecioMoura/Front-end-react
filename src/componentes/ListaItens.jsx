import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import '../styles/ListaItens.css'

function ListaItens({titulo, txt_btn, voltarForm, dados}){

    const dadosUsuarios = [];
    console.log(dados);
    if(dados){
        let vetAux = []
        for(let i in dados){
            vetAux.push(dados[i].id);
            vetAux.push(dados[i].codigo);
            vetAux.push(dados[i].tipo);
            vetAux.push(dados[i].localizacao);
            vetAux.push(dados[i].n_serie);
            vetAux.push(dados[i].modelo);
            vetAux.push(dados[i].fabricante);
            vetAux.push(dados[i].descricao);
            vetAux.push(dados[i].st.st);
            vetAux.push(dados[i].st.nome);
            vetAux.push(dados[i].st.matricula);
            vetAux.push(dados[i].st.destino);
            vetAux.push(dados[i].st.data);
            dadosUsuarios.push(vetAux);
            vetAux = [];
        }
    }
    const handleClick = ()=>{
        voltarForm(false);
    };
 
    return(
        <div id="id_div_principal">
            <button onClick={handleClick}>{txt_btn}</button>
            <h1 className={dados == 0?'excluir':''}>{titulo}</h1>
            <div id="id_div_cabecalho" style={{display:dados==0?'none':''} }>
                <div className="col col_id">ID:</div>
                <div className="col col_codigo">Código:</div>
                <div className="col col_tipo">Tipo:</div>
                <div className="col col_local">Localização:</div>
                <div className="col col_serie">N_série:</div>
                <div className="col col_modelo">Modelo:</div>
                <div className="col col_fabricante">Fabricante:</div>
                <div className="col col_descricao">Descrição:</div>
                <div className="col col_st">Status:</div>
            </div>
            {dadosUsuarios.map((valor, index)=>(
                <div id="id_div_lista" key={index}>
                    <div className="col col_id">{valor[0]}</div>
                    <div className="col col_codigo">{valor[1]}</div>
                    <div className="col col_tipo">{valor[2]}</div>
                    <div className="col col_local">{valor[3]}</div>                    
                    <div className="col col_serie">{valor[4]}</div>
                    <div className="col col_modelo">{valor[5]}</div>
                    <div className="col col_fabricante">{valor[6]}</div>
                    <div className="col col_descricao">{valor[7]}</div>
                    <div className="col col_st">
                        <div className=""> {valor[8]}</div>
                        <div className=""> {valor[9]}</div>
                        <div className=""> {valor[10]}</div>
                        <div className=""> {valor[11]}</div>
                        <div className=""> {valor[12]}</div>
                    </div>
                </div>))}  
        </div>
    );   
}

ListaItens.propTypes = {
    titulo:PropTypes.string,
    txt_btn:PropTypes.string,
    voltarForm:PropTypes.func,
    dados:PropTypes.array
}

export default ListaItens;