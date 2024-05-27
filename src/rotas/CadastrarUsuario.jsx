import React from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";

function CadastrarUsuario(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormUsuario titulo={'Cadastrar Usuário'} txt_btn={'Cadastrar'}/>
            </section>  
        </div>
    );
}
export default CadastrarUsuario;