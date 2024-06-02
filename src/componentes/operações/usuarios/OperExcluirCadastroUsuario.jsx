async function ExcluirDadosUsuario(id){
    if(id){
        const req = await fetch(`https://apicontroledematerial.onrender.com/api/usuario/${id}`,{
        method: 'DELETE',
        headers: {"Content-Type":"application/json"}
        });
        const res = await req.json();
        console.log('Dados excluídos com sucesso!');
        return res.result;      
    }else{
        console.log('Dados não excluídos, ID não identificado!');
    return [];
    }
}

export default ExcluirDadosUsuario;