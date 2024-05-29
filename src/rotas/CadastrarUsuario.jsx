import React,{useState} from "react";
import Menu from "../componentes/Menu";
import FormUsuario from "../componentes/FormUsuarios";
import ListaUsuarios from "../componentes/ListaUsuarios";

function CadastrarUsuario(){

    const [st, setSt] = useState(false);
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [matricula, setMatricula] = useState('');
    const [setor, setSetor] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');

    const recebeDados = (dados)=>{
        console.log(JSON.stringify(dados));
        setNome(dados.nome);
        setApelido(dados.apelido);
        setMatricula(dados.matricula);
        setSetor(dados.setor);
        setEmail(dados.email);
        setUsuario(dados.usuario);
        setSt(true);
    };

    const volta = ()=>{
        setSt(false);
    }
    return(
        <div className="div_principal">
            <section className="section_menu">
                <Menu/>
            </section>
            <section className="section_conteudo" style={{display:st?'none':''}}>
                <FormUsuario titulo={'Cadastrar Usuário'} txt_btn={'Cadastrar'} rota={'cadastrar'} enviaDados={recebeDados}/>
            </section>
            <section style={{display:st?'':'none'}}>
                <ListaUsuarios titulo={'Lista de Usuários'} txt_btn={'Novo Cadastro'} nome={nome} apelido={apelido} matricula={matricula} setor={setor} email={email} usuario={usuario} voltar={volta}/>
            </section>
        </div>
    );
}
export default CadastrarUsuario;