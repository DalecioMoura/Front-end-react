
function Menu({enviaMensagem}){
    return (
        <div id="div_menu">
            <button onClick={()=>enviaMensagem("Pagina Inicial")}>HOME</button>
            <button onClick={()=>enviaMensagem("consultar itens")}>Consultar Material</button>
            <button onClick={()=>enviaMensagem("cadastrar itens")}>Cadastrar Material</button>
            <button onClick={()=>enviaMensagem("editar itens")}>Editar Material</button>
            <button onClick={()=>enviaMensagem("excluir itens")}>Excluir Material</button>
            <button onClick={()=>enviaMensagem("retirar itens")}>Retirar Material</button>
            <button onClick={()=>enviaMensagem("devolver itens")}>Devolver Material</button>
            <button onClick={()=>enviaMensagem("cadastrar usuario")}>Cadastrar Usuário</button>
            <button onClick={()=>enviaMensagem("consultar usuario")}>Consultar Cadastro de Usuário</button>
            <button onClick={()=>enviaMensagem("editar usuario")}>Editar Cadastro de Usuário</button>
            <button onClick={()=>enviaMensagem("excluir usuario")}>Excluir Usuário</button>
        </div>
    );
}

export default Menu;