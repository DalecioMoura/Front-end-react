import PropTypes from 'prop-types'
import CadastrarUsuario from './operações/usuarios/OperCadastroUsuario';
import { ConsultaComFiltro } from './operações/usuarios/OperConsultaUsuarios';
import { ConsultaSemFiltro } from './operações/usuarios/OperConsultaUsuarios';
import EditarDadosUsuario from './operações/usuarios/OperEditarCadastroUsuarios';
import ExcluirDadosUsuario from './operações/usuarios/OperExcluirCadastroUsuario';
import { useState } from 'react';

function FormUsuario({titulo, txt_btn, rota, enviaDados}){

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [setor, setSetor] = useState('');
    const [email, setEmail] = useState('');
    const [editarDados, setEditarDados] = useState(false);
    const [excluirDados, setExcluirDados] = useState(false);
    const [id, setId] = useState('');

    const handleChange = (e)=>{
        if(e.target.name == 'nome')
            setNome(e.target.value);
        if(e.target.name == 'matricula')
            setMatricula(e.target.value);
        if(e.target.name == 'setor')
            setSetor(e.target.value);
        if(e.target.name == 'email')
            setEmail(e.target.value);
    };

    async function handleClick(){
        let dados = [];

        if(rota === 'cadastrar'){
            let dadosUsuario = {
                matricula:matricula,
                nome:nome,
                apelido:nome.substring(0, nome.indexOf(' ')), 
                setor:setor,
                email:email,
                usuario:email.substring(0, email.indexOf('@')),
            }
            dados = await CadastrarUsuario(dadosUsuario);
        }
        if(rota === 'consultar'){
            console.log('Consultar');
            if(nome !== '' || matricula !== '' || setor !== '' || email !== ''){
                dados = await ConsultaComFiltro({matricula:matricula,email:email,nome:nome,setor:setor});
            }else{
                dados = await ConsultaSemFiltro();
            }      
        }

        if(rota === 'editar'){
           
            console.log('Editar');

            if(!editarDados){
                if(matricula !== '' || email !== ''){
                    const dadosParaEdicao = await ConsultaComFiltro({matricula:matricula, email:email});
                    console.log(dadosParaEdicao);
                    atulaizaForm(dadosParaEdicao)
                    setEditarDados(true);
                    return console.log('Dados prontos para edição!');
                }else{
                    return console.log('Informe os dados de busca!');
                }
            }
            
            if(editarDados){
                const dadosModificados = pegaDados();
                dados = await EditarDadosUsuario(dadosModificados, id);
                setEditarDados(false);
                setId('');
            }
        }

        if(rota === 'excluir'){
            console.log('Excluir');
            if(!excluirDados){
                if(matricula !== '' || email !== ''){
                    const dadosParaExclusao = await ConsultaComFiltro({matricula:matricula, email:email});
                    atulaizaForm(dadosParaExclusao);
                    setExcluirDados(true);      
                    return console.log('Dados prontos para exclusão!');
                }else{
                    return console.log('Informe os dados de busca!');
                }
            }
            if(excluirDados){
                const dadosParaExclusao = pegaDados();
                console.log(dadosParaExclusao);
                dados = await ExcluirDadosUsuario(id);
                setExcluirDados(false);
                setId('');
            }
        }
        console.log(dados);
        enviaDados(dados);
        limpaDados();
    }

    const atulaizaForm = (dadosParaEdicao)=>{
        setNome(dadosParaEdicao[0].nome);
        setMatricula(dadosParaEdicao[0].matricula);
        setSetor(dadosParaEdicao[0].setor);
        setEmail(dadosParaEdicao[0].email);
        setId(dadosParaEdicao[0].id);   
    }

    const pegaDados = ()=>{
        let dadosUsuario = {
            matricula:matricula,
            nome:nome,
            apelido:nome.substring(0, nome.indexOf(' ')), 
            setor:setor,
            email:email,
            usuario:email.substring(0, email.indexOf('@')),
        }
        return dadosUsuario;
    }

    const limpaDados = ()=>{  
        setNome('');      
        setMatricula('');
        setSetor('');
        setEmail('');
    }

    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || editarDados || excluirDados)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_nome">Nome:</label>
                    <input id='id_nome' className='input_form_itens' type="text" name='nome' value={nome} placeholder='Informe o Nome Completo' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_matricula">Matrícula:</label>
                    <input id='id_matricula' className='input_form_itens' type="text" name='matricula' value={matricula} placeholder='Informe a Matrícula' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || editarDados || excluirDados)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_setor">Setor:</label>
                    <input id='id_setor' className='input_form_itens' type="text" name='setor' value={setor} placeholder='Informe o Setor' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_email">{rota==='cadastrar'?'Email:':'Usuário:'}</label>
                    <input id='id_email' className='input_form_itens' type="text" name='email' value={email} placeholder={rota==='cadastrar'?'Informe o E-mail':'Informe o usuário ou e-mail'} onChange={handleChange}/>
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={editarDados?'Editar':excluirDados?'Excluir':txt_btn} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}

FormUsuario.propTypes = {
    titulo:PropTypes.string,
    txt_btn:PropTypes.string,
    rota:PropTypes.string,
    enviaDados:PropTypes.func
}

export default FormUsuario;