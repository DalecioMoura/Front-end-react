import PropTypes from 'prop-types'
import '../styles/FormUsuarios.css'
import '../styles/FormItens.css'

import { useState } from 'react';

function FormUsuario({titulo, txt_btn, rota, enviaDados}){

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [setor, setSetor] = useState('');
    const [email, setEmail] = useState('');
    const [editar, setEditar] = useState(false);
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
        console.log(e.target.name, e.target.value);
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
            dados = await cadastrarUsuario(dadosUsuario);
        }
        if(rota === 'consultar'){
            console.log('Consultar');
            if(nome !== '' || matricula !== '' || setor !== '' || email !== ''){
                console.log('Com filtro!')
                dados = await consultaComFiltro({matricula:matricula,email:email,nome:nome,setor:setor});
            }else{
                dados = await consultaSemFiltro();
            }
                
               
        }
        if(rota === 'editar'){
           
            console.log('Editar');

            if(!editar){
                if(matricula !== '' || email !== ''){
                    const dadosParaEdicao = await editarDados({matricula:matricula, email:email}, editar, id);
                    setNome(dadosParaEdicao[0].nome);
                    setMatricula(dadosParaEdicao[0].matricula);
                    setSetor(dadosParaEdicao[0].setor);
                    setEmail(dadosParaEdicao[0].email);
                    setId(dadosParaEdicao[0].id);
                    setEditar(true);
                    console.log('id', id);       
                    return console.log('Dados prontos para edição!');
                }else{
                    return console.log('Informe os dados de busca!');
                }
            }
            
            if(editar){
                const dadosModificados = pegaDados();
                console.log(dadosModificados);
                dados = await editarDados(dadosModificados, editar, id);
                console.log(dados);
                setEditar(false);
                setId('');
            }
        }
        if(rota === 'excluir'){
            console.log('Excluir');
        }
        console.log(dados);
        enviaDados(dados);
        limpaDados();
    }

    function pegaDados(){
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

    function limpaDados(){  
        setNome('');      
        setMatricula('');
        setSetor('');
        setEmail('');
    }

    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || editar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_nome">Nome:</label>
                    <input id='id_nome' className='input_form_itens' type="text" name='nome' value={nome} placeholder='Informe o Nome Completo' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_matricula">Matrícula:</label>
                    <input id='id_matricula' className='input_form_itens' type="text" name='matricula' value={matricula} placeholder='Informe a Matrícula' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || editar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_setor">Setor:</label>
                    <input id='id_setor' className='input_form_itens' type="text" name='setor' value={setor} placeholder='Informe o Setor' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_email">{rota==='cadastrar'?'Email:':'Usuário:'}</label>
                    <input id='id_email' className='input_form_itens' type="text" name='email' value={email} placeholder={rota==='cadastrar'?'Informe o E-mail':'Informe o usuário ou e-mail'} onChange={handleChange}/>
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={editar?'Editar':txt_btn} onClick={handleClick}/>
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

async function consultaSemFiltro(){
    const req = await fetch('https://apicontroledematerial.onrender.com/api/usuarios');
    const res = await req.json();
    return res.result;
}
async function consultaComFiltro(dados){
    const filtro = {filtro:'', valor:''};
    for(let i in dados){
        if(dados[i] !== '' && dados[i] !== null){
            filtro.filtro = i;
            filtro.valor = dados[i];
            break
        }
    }
    console.log(filtro);
    const req = await fetch(`https://apicontroledematerial.onrender.com/api/usuario/${JSON.stringify(filtro)}`);
    const res = await req.json();
    return res.result;
}

async function cadastrarUsuario(dados){
    const dadosJson = JSON.stringify(dados)
    const req = await fetch('https://apicontroledematerial.onrender.com/api/usuario',{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: dadosJson
    });
    const res = await req.json();
    return res.result;
}

async function editarDados(dados, opcao, id){
    const filtro = {filtro:'', valor:''};

    if(!opcao){
        for(let i in dados){
            if(dados[i] !== '' && dados[i] !== null){
                filtro.filtro = i;
                filtro.valor = dados[i];
                break
            }
        }
        console.log(filtro);
        const req = await fetch(`https://apicontroledematerial.onrender.com/api/usuario/${JSON.stringify(filtro)}`);
        const res = await req.json();
        return res.result;
    }
    if(opcao){
        console.log(dados);
        console.log('id:',id);
        const dadosJson = JSON.stringify(dados)
        if(id){
            const req = await fetch(`https://apicontroledematerial.onrender.com/api/usuario/${id}`,{
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: dadosJson
            });
            const res = await req.json();
            console.log('Dados Editados com sucesso!');
            return res.result;
            
        }else{
            console.log('Dados não editados, ID não identificado!');
            return [];
        }    
    }
}

export default FormUsuario;