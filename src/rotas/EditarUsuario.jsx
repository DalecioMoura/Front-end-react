import React from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";

function EditarUsuario(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormUsuario titulo={'Editar Cadastro de Usuário'} txt_btn={'Buscar'}/>
            </section>  
        </div>
    );
}
export default EditarUsuario;