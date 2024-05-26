import '../styles/FormItens.css'

function FormItens({titulo, txt_btn}){
    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="codigo">Código:</label>
                    <input className='input_form_itens' type="text" name='codigo' placeholder='Informe o código do objeto' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="tipo">Tipo:</label>
                    <input className='input_form_itens' type="text" name='tipo' placeholder='Informe o tipo do objeto' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="localizacao">Localização:</label>
                    <input className='input_form_itens' type="text" name='localizacao' placeholder='Informe a localização do objeto' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="n_serie">Nº de Série:</label>
                    <input className='input_form_itens' type="text" name='n_serie' placeholder='Informe o nº de série do objeto' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="modelo">Modelo:</label>
                    <input className='input_form_itens' type="text" name='modelo' placeholder='Informe o modelo do objeto' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="fabreicante">Fabricante:</label>
                    <input className='input_form_itens' type="text" name='fabricante' placeholder='Informe o fabricante do objeto' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="descricao">Descrição:</label>
                    <textarea className='input_form_itens' name="descricao" id="" placeholder='Faça uma breve descrição do objeto'></textarea>
                </div>
                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={txt_btn} />
                </div>
            </div>
        </div>
    );

}

export default FormItens;