import React,{useState} from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";
import ListaUsuarios from "../componentes/ListaUsuarios";

function CadastrarUsuario(){

    const [exibirLista, setExibirLista] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState();

    const recebeDados = (dados)=>{
        setExibirLista(true);
        setDadosUsuario(dados);
    };

    const voltaForm = ()=>{
        setExibirLista(false);
    }
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo" style={{display:exibirLista?'none':''}}>
                <FormUsuario titulo={'Cadastrar Usuário'} txt_btn={'Cadastrar'} rota={'cadastrar'} enviaDados={recebeDados}/>
            </section>
            <section style={{display:exibirLista?'':'none'}}>
                <ListaUsuarios titulo={'Lista de Usuários'} txt_btn={'Novo Cadastro'} voltarForm={voltaForm} dados={dadosUsuario}/>
            </section>
        </div>
    );
}
export default CadastrarUsuario;