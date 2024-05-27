import React from "react";
import Menu from "./Menu";

function PaginaInicial(){
    return(
    <div className="div_principal">
        <section className="section_menu">
            <Menu/>
        </section>
        <section className="section_conteudo">
            <h1>Bem Vindo!</h1>
            <p>
                Olá, você está no sistema de controle de material do labratório da OONFA.C. 
                Aqui você pode consultar, cadastrar, registar a retirada e a devolução dos materiais e 
                equipamentos do laboratório. Lembre-se, a sua colaboração é muito importante para que 
                possamos manter esse laboratório atualizado e organizado, por isso, sempre que precisar 
                retirar ou devolver um material ou equipamento registre aqui. OBRIGADO!

                
            </p>
            <p>
                O acesso a consulta é livre, porém para as demais opções é 
                necessário que o usuário tenha efetuado o login no sistema. 
                Caso ainda não tenha cadastro, basta clicar no botão "Cadastro de Usuário", 
                eftuar seu cadastro e fazer login logo em seguida.
            </p>
        </section>
        
        
    </div>
    );
}
export default PaginaInicial;