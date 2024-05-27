import React from "react";
import Menu from "../componentes/Menu";
import FormItens from "../componentes/FormItens";

function ConsultarItem(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormItens titulo={'Consultar Material'} txt_btn={'Buscar'}/>
            </section>  
        </div>
    );
}
export default ConsultarItem;