import '../styles/FormUsuarios.css'
import '../styles/FormItens.css'

import { useState } from 'react';

function FormUsuario({titulo, txt_btn, rota, enviaDados}){

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [setor, setSetor] = useState('');
    const [email, setEmail] = useState('');

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

    const handleClick = ()=>{
        let dados = {
            nome:nome,
            apelido:nome.substring(0, nome.indexOf(' ')),
            matricula:matricula,
            setor:setor,
            email:email,
            usuario:email.substring(0, email.indexOf('@')),
        }
        enviaDados(dados);
        limpaDados();
    };

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
                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_nome">Nome:</label>
                    <input id='id_nome' className='input_form_itens' type="text" name='nome' value={nome} placeholder='Informe o Nome Completo' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_matricula">Matrícula:</label>
                    <input id='id_matricula' className='input_form_itens' type="text" name='matricula' value={matricula} placeholder='Informe a Matrícula' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_setor">Setor:</label>
                    <input id='id_setor' className='input_form_itens' type="text" name='setor' value={setor} placeholder='Informe o Setor' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_email">{rota==='cadastrar'?'Email:':'Usuário:'}</label>
                    <input id='id_email' className='input_form_itens' type="text" name='email' value={email} placeholder={rota==='cadastrar'?'Informe o E-mail':'Informe o usuário ou e-mail'} onChange={handleChange}/>
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={txt_btn} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );

}

export default FormUsuario;