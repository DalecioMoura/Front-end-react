import React, {useState} from "react";
import Menu from "../componentes/Menu";
import FormItens from "../componentes/FormItens";
import ListaItens from "../componentes/ListaItens";

function ConsultarItem(){

    const [exibirLista, setExibirLista] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState();
    
    const recebeDados = (dados)=>{
        console.log(dados);
        setExibirLista(true);
        setDadosUsuario(dados);
        console.log(dadosUsuario);
    };

    const voltaForm = ()=>{
        setExibirLista(false);
    };

    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo" style={{display:exibirLista?'none':''}}>
                <FormItens titulo={'Consultar Material'} txt_btn={'Buscar'} rota={'consultar'} enviaDados={recebeDados}/>
            </section>
            <section style={{display:exibirLista?'':'none'}}>
                <ListaItens titulo={'Lista de Material'} txt_btn={'Nova Consulta'} voltarForm={voltaForm} dados={dadosUsuario}/>
            </section>
        </div>
    );
}
export default ConsultarItem;