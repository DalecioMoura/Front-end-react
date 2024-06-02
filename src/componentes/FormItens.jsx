import '../styles/FormItens.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import OperCadastrarItem from './operações/itens/OperCadastrarItem';
import OperConsultarItens from './operações/itens/OperConsultarItem';
import OperEditarItem from './operações/itens/OperEditarItem';
import OperRetirarItem from './operações/itens/OperRetirarItem';
import OperDevolverItem from './operações/itens/OperDevolverItem';

function FormItens({titulo, txt_btn, rota, enviaDados}){
    const [dados, setDados] = useState({
                                            codigo:'',
                                            tipo:'',
                                            localizacao:'',
                                            n_serie:'',
                                            modelo:'',
                                            fabricante:'',
                                            descricao:'',
                                            status:''
                                        });
    const [inputDestino, setInputDestino] = useState('');
    let st = {st:'Disponível', nome:'', matricula:'', destino:'', data:''}
    
    const [isEditar, setIsEditar] = useState(false);
    const [isExcluir, setIsExcluir] = useState(false);
    const [id,setId] = useState('');

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setDados({...dados,[name]:value});
    }

    const handleChangeDestino = (e)=>{
        setInputDestino(e.target.value);
    }

    async function handleClick(){
        let itens = [];
        if(rota === 'cadastrar'){
            console.log('Cadastrar Item.');
            itens = await OperCadastrarItem(dados, st);
        }

        if(rota === 'consultar'){
            console.log('Consultar Item.');
            itens = await OperConsultarItens(dados);
            console.log(itens);
        }

        if(rota === 'editar'){
            console.log('Editar Item.');
            if(isEditar){
                itens = await OperEditarItem(dados, id);
                setIsEditar(false);
                setId('');
                console.log(itens);
            }else{
                if(dados.codigo !== ''){
                    itens = await OperConsultarItens(dados);
                    setId(itens[0].id);
                    setIsEditar(true);
                    console.log(itens);
                    atualizaForm(itens);
                    return console.log('Dados prontos para edição!');
                }else{
                    return console.log('Informe o código do item.');
                }
                
            }
        }
        if(rota === 'excluir'){
            console.log('Excluir Item.');
            itens = await OperConsultarItens(dados);
            console.log(itens);
        }
        if(rota === 'retirar'){
            console.log('Retirar Item.');
            atualizaStatus('retirar');
            if(dados.codigo !== ''){
                itens = await OperRetirarItem(dados.codigo, st);
                console.log(st);
            }else{
                return console.log('Item não encontardo!');
            }
            
        }


        if(rota === 'devolver'){
            console.log('Devolver Item.');
            atualizaStatus('devolver');
            if(dados.codigo !== ''){
                itens = await OperDevolverItem(dados.codigo, st);
                console.log(st);
            }else{
                return console.log('Item não encontardo!');
            }
        }

        console.log(dados);
        
        enviaDados(itens);
        limpaDados();
    }

    const atualizaForm = (item)=>{
        console.log(item[0]);
        setDados({
                    codigo:item[0].codigo,
                    tipo:item[0].tipo,
                    localizacao:item[0].localizacao,
                    n_serie:item[0].n_serie,
                    modelo:item[0].modelo,
                    fabricante:item[0].fabricante,
                    descricao:item[0].descricao
                });
    }

    const atualizaStatus = (op)=>{
        let aux = new Date().toLocaleDateString();
        console.log(aux);
        if(op === 'retirar'){
            console.log('Retirar');
            st = {
                st:'Indisponível',
                nome:'Dalecio',
                matricula:'268643',
                destino:inputDestino,
                data:aux
            }
                    
        }
        if(op === 'devolver'){
            console.log('Devolver');
            st = {
                    st:'Disponível',
                    nome:'',
                    matricula:'',
                    destino:'',
                    data:''
                };
        }
    }


    const limpaDados = ()=>{
        setDados({codigo:'',
        tipo:'',
        localizacao:'',
        n_serie:'',
        modelo:'',
        fabricante:'',
        descricao:'',
        status:''});
        setInputDestino('');
    }

    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="id_codigo">Código:</label>
                    <input id='id_codigo' className='input_form_itens' type="text" name='codigo' value={dados.codigo} placeholder='Informe o código do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || isEditar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_tipo">Tipo:</label>
                    <input id='id_tipo' className='input_form_itens' type="text" name='tipo' value={dados.tipo} placeholder='Informe o tipo do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha'style={{display:(rota==='cadastrar'||rota==='consultar' || isEditar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_localizacao">Localização:</label>
                    <input id='id_localizacao' className='input_form_itens' type="text" name='localizacao' value={dados.localizacao} placeholder='Informe a localização do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar' || isEditar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_n_serie">Nº de Série:</label>
                    <input id='id_n_serie' className='input_form_itens' type="text" name='n_serie' value={dados.n_serie} placeholder='Informe o nº de série do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || isEditar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_modelo">Modelo:</label>
                    <input id='id_modelo' className='input_form_itens' type="text" name='modelo' value={dados.modelo} placeholder='Informe o modelo do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha' style={{display:(rota==='cadastrar'||rota==='consultar' || isEditar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_fabricante">Fabricante:</label>
                    <input id='id_fabricante' className='input_form_itens' type="text" name='fabricante' value={dados.fabricante} placeholder='Informe o fabricante do objeto' onChange={handleChange}/>
                </div>

                <div className='div_linha'style={{display:(rota==='cadastrar' || isEditar)?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_descricao">Descrição:</label>
                    <textarea className='input_form_itens' name="descricao" id="id_descricao" value={dados.descricao} placeholder='Faça uma breve descrição do objeto' onChange={handleChange}></textarea>
                </div>

                <div className='div_linha' style={{display:rota==='retirar'?'':'none'}}>
                    <label className='label_form_itens' htmlFor="id_destino">Destino:</label>
                    <input id='id_destino' className='input_form_itens' type="text" name='destino' value={inputDestino} placeholder='Informe o destino' onChange={handleChangeDestino}/>
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={isEditar?'Editar':isExcluir?'Excluir':txt_btn} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}

FormItens.propTypes = {
    titulo:PropTypes.string,
    txt_btn:PropTypes.string,
    rota:PropTypes.string,
    enviaDados:PropTypes.func
}

export default FormItens;