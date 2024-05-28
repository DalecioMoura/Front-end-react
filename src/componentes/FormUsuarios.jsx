import '../styles/FormUsuarios.css'
import '../styles/FormItens.css'

import { useState, useEffect } from 'react';

function FormUsuario({titulo, txt_btn, rota, enviaDados}){

    const [dados, setDados] = useState({nome:'', apelido:'', matricula:'', setor:'', email:'', usuario:''});

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setDados({...dados,[name]:value});
    };

    const handleClick = ()=>{
        setDados(dados.apelido = dados.nome.substring(0, dados.nome.indexOf(' ')));
        setDados(dados.usuario = dados.email.substring(0, dados.email.indexOf('@')));
        console.log(dados.apelido);
        console.log(dados.usuario);
        enviaDados(dados);
    }

    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_nome">Nome:</label>
                    <input id='id_nome' className='input_form_itens' type="text" name='nome' value={dados.nome} placeholder='Informe o Nome Completo' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_matricula">Matrícula:</label>
                    <input id='id_matricula' className='input_form_itens' type="text" name='matricula' placeholder='Informe a Matrícula' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_setor">Setor:</label>
                    <input id='id_setor' className='input_form_itens' type="text" name='setor' placeholder='Informe o Setor' onChange={handleChange}/>
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_email">{rota==='cadastrar'?'Email:':'Usuário:'}</label>
                    <input id='id_email' className='input_form_itens' type="text" name='email' placeholder={rota==='cadastrar'?'Informe o E-mail':'Informe o usuário ou e-mail'} onChange={handleChange}/>
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={txt_btn} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );

}

export default FormUsuario;