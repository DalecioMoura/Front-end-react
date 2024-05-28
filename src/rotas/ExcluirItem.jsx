import React from "react";
import Menu from "../componentes/Menu";
import FormItens from "../componentes/FormItens";

function ExcluirItem(){

    const recebeDados = (dados)=>{
        console.log(JSON.stringify(dados));
    };

    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo">
                <FormItens titulo={'Excluir Material'} txt_btn={'Buscar'} rota={'excluir'} enviaDados={recebeDados}/>
            </section>  
        </div>
    );
}
export default ExcluirItem;