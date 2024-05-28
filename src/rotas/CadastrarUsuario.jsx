import React from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";

function CadastrarUsuario(){

    const recebeDados = (dados)=>{
        console.log(JSON.stringify(dados));
    }
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormUsuario titulo={'Cadastrar Usuário'} txt_btn={'Cadastrar'} rota={'cadastrar'} enviaDados={recebeDados}/>
            </section>  
        </div>
    );
}
export default CadastrarUsuario;