import React from "react";

async function OperDevolverItem(codigo, st){
    console.log('Código Item', codigo);
    console.log('Status Item', st);
    const filtro = {"filtro":"codigo", "valor":codigo}
    console.log('Filtro Item', filtro);
    if(codigo !== ''){
        const dadosJson = JSON.stringify({"status":st});
        const url = `https://apicontroledematerial.onrender.com/api/item/${JSON.stringify(filtro)}`;
        const req = await fetch(url,{
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body:dadosJson
        });
        const res = await req.json();
        console.log(res.result);
        return res.result;
    }else{
        console.log(codigo);
        return console.log("Dados não editados, ID do item não identificado!");
    }
    

    
}

export default OperDevolverItem;