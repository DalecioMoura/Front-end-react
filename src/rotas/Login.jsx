import React from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";

function Login(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormUsuario titulo={'Faça Login Aqui'} txt_btn={'Entrar'}/>
            </section>  
        </div>
    );
}

export default Login;