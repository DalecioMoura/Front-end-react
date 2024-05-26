import '../styles/FormUsuarios.css'
import '../styles/FormItens.css'

function FormUsuario({titulo, txt_btn}){
    return (
        <div id='div_form_itens'>
            <div id='div_form_itens2'>
                <div id='div_form_itens_titulo' className='div_linha'><h2>{titulo}</h2></div>
                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="codigo">Nome:</label>
                    <input className='input_form_itens' type="text" name='codigo' placeholder='Informe o Nome Completo' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="tipo">Matrícula:</label>
                    <input className='input_form_itens' type="text" name='tipo' placeholder='Informe a Matrícula' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="localizacao">Setor:</label>
                    <input className='input_form_itens' type="text" name='localizacao' placeholder='Informe o Setor' />
                </div>

                <div className='div_linha'>
                    <label className='label_form_itens' htmlFor="n_serie">E-mail:</label>
                    <input className='input_form_itens' type="text" name='n_serie' placeholder='Informe o E-mail' />
                </div>

                <div id='div_but_itens' className='div_linha'>
                    <input id='but_form_itens' type="button" name='tipo' value={txt_btn} />
                </div>
            </div>
        </div>
    );

}

export default FormUsuario;