import '../styles/FormItens.css'
import { useState } from 'react';

function FormItens({titulo, txt_btn, rota, enviaDados}){
    const [dados, setDados] = useState({codigo:'', tipo:'',  localizacao:'', n_serie:'', modelo:'', fabricante:'', descricao:'', destino:'', data:''});

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setDados({...dados,[name]:value});
    }

    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_codigo">Código:</label>
                    <input id='id_codigo' className='input_form_itens' type="text" name='codigo' placeholder='Informe o código do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_tipo">Tipo:</label>
                    <input id='id_tipo' className='input_form_itens' type="text" name='tipo' placeholder='Informe o tipo do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha'style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_localizacao">Localização:</label>
                    <input id='id_localizacao' className='input_form_itens' type="text" name='localizacao' placeholder='Informe a localização do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:rota==='cadastrar'?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_n_serie">Nº de Série:</label>
                    <input id='id_n_serie' className='input_form_itens' type="text" name='n_serie' placeholder='Informe o nº de série do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_modelo">Modelo:</label>
                    <input id='id_modelo' className='input_form_itens' type="text" name='modelo' placeholder='Informe o modelo do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar')?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_fabricante">Fabricante:</label>
                    <input id='id_fabricante' className='input_form_itens' type="text" name='fabricante' placeholder='Informe o fabricante do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha'style={{display:rota==='cadastrar'?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_descricao">Descrição:</label>
                    <textarea className='input_form_itens' name="descricao" id="id_descricao" placeholder='Faça uma breve descrição do objeto' onChange={handleChange}></textarea>
                </div>

                <div className='div_linha' style={{display:rota==='retirar'?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_destino">Destino:</label>
                    <input id='id_destino' className='input_form_itens' type="text" name='destino' placeholder='Informe o destino' onChange={handleChange}/>
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={txt_btn} onClick={()=>{enviaDados(dados)}}/>
                </div>
            </div>
        </div>
    );
}

export default FormItens;