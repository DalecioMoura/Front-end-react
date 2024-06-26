import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import '../styles/ListaUsuario.css';

function ListaUsuarios({titulo, txt_btn, voltarForm, dados}){

    const dadosUsuarios = [];
    if(dados){
        let vetAux = []
        for(let i in dados){
            vetAux.push(dados[i].id);
            vetAux.push(dados[i].matricula);
            vetAux.push(dados[i].nome);
            vetAux.push(dados[i].apelido);
            vetAux.push(dados[i].setor);
            vetAux.push(dados[i].email);
            vetAux.push(dados[i].usuario);
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
                <div className="col col_matricula">matrícula:</div>
                <div className="col col_nome">Nome:</div>
                <div className="col col_apelido">Apelido:</div>
                <div className="col col_setor">Setor:</div>
                <div className="col col_email">E-mail:</div>
                <div className="col col_usuario">Nome de Usuário:</div>
            </div>
            {dadosUsuarios.map((valor, index)=>(
                <div id="id_div_lista" key={index}>
                    <div className="col col_id">{valor[0]}</div>
                    <div className="col col_matricula">{valor[1]}</div>
                    <div className="col col_nome">{valor[2]}</div>
                    <div className="col col_apelido">{valor[3]}</div>                    
                    <div className="col col_setor">{valor[4]}</div>
                    <div className="col col_email">{valor[5]}</div>
                    <div className="col col_usuario">{valor[6]}</div>  
                </div>))}  
        </div>
    );   
}

ListaUsuarios.propTypes = {
    titulo:PropTypes.string,
    txt_btn:PropTypes.string,
    voltarForm:PropTypes.func,
    dados:PropTypes.array
}

export default ListaUsuarios;