import React, {useState} from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";
import ListaUsuarios from '../componentes/ListaUsuarios'

function ExcluirUsuario(){

    const [exibirLista, setExibirLista] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState();

    const recebeDados = (dados)=>{
        console.log(dados);
        setExibirLista(true);
        setDadosUsuario(dados);
    }

    const voltaForm = ()=>{
        setExibirLista(false);
    }

    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo" style={{display:exibirLista?'none':''}}>
                <FormUsuario titulo={'Excluir Usuário'} txt_btn={'Buscar'} rota={'excluir'} enviaDados={recebeDados}/>
            </section>
            <section style={{display:exibirLista?'':'none'}}>
                <ListaUsuarios titulo={'Cadastro de Usuário Excluído com Sucesso!'} txt_btn={'Excluir Outro Usuário'} voltarForm={voltaForm} dados={dadosUsuario}/>
            </section>
        </div>
    );
}
export default ExcluirUsuario;