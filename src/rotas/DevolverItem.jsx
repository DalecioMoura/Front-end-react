import React from "react";
import Menu from "../componentes/Menu";
import FormItens from "../componentes/FormItens";

function DevolverItem(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormItens titulo={'Devolver Material'} txt_btn={'Devolver'}/>
            </section>  
        </div>
    );
}
export default DevolverItem;