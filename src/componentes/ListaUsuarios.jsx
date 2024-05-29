import React from "react"
import '../styles/ListaUsuario.css'

function ListaUsuarios({titulo, txt_btn, nome, apelido, matricula, setor, email, usuario, voltar}){

    const handleClick = ()=>{
        console.log(nome);
        voltar(false);
    };

    return(
        <div id="id_div_principal">
            <button onClick={handleClick}>{txt_btn}</button>
            <h1>{titulo}</h1>
            <div id="id_div_cabecalho">
                <div className="col col_id">ID:</div>
                <div className="col col_nome">Nome:</div>
                <div className="col col_apelido">Apelido:</div>
                <div className="col col_matricula">matrícula:</div>
                <div className="col col_setor">Setor:</div>
                <div className="col col_email">E-mail:</div>
                <div className="col col_usuario">Nome de Usuário:</div>
            </div>
            <div id="id_div_lista">
                <div className="col col_id">1</div>
                <div className="col col_nome">{nome}</div>
                <div className="col col_apelido">{apelido}</div>
                <div className="col col_matricula">{matricula}</div>
                <div className="col col_setor">{setor}</div>
                <div className="col col_email">{email}</div>
                <div className="col col_usuario">{usuario}</div>
            </div>
            
        </div>
    );
}

export default ListaUsuarios;