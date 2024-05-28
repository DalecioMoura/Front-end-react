import React from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";

function ExcluirUsuario(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormUsuario titulo={'Excluir Usuário'} txt_btn={'Buscar'} rota={'excluir'}/>
            </section>  
        </div>
    );
}
export default ExcluirUsuario;