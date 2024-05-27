import React from "react";
import Menu from "../componentes/Menu";
import FormItens from "../componentes/FormItens";

function RetirarItem(){
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormItens titulo={'Retirar Material'} txt_btn={'Retirar'}/>
            </section>  
        </div>
    )
}
export default RetirarItem;