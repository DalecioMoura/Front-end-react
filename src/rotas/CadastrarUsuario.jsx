import React from "react";
import FormUsuario from "../componentes/FormUsuarios";
import FormItens from "../componentes/FormItens";

function CadastrarUsuario(){
    return(
        <div>
            <FormUsuario titulo={'Cadastar Usúario'} txt_btn={'Cadastrar'}/>
        </div>
    );
}
export default CadastrarUsuario;