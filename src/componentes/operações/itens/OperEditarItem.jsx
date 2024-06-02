import React from "react";

async function OperEditarItem(dados, id){
    console.log('Editar Item', id);
    
    if(id !== ''){
        const dadosJson = JSON.stringify(dados);
        const url = `https://apicontroledematerial.onrender.com/api/item/${id}`;
        const req = await fetch(url,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:dadosJson
        });
        const res = await req.json();
        console.log(res.result);
        return res.result;
    }else{
        console.log(dados);
        return console.log("Dados não editados, ID do item não identificado!");
    }
    

    
}

export default OperEditarItem;