import React from "react";

async function OperRetirarItem(codigo, st){
    console.log('Editar Item', codigo);
    console.log('Editar Item', st);
    const filtro = {"filtro":"codigo", "valor":codigo}
    if(codigo !== ''){
        const dadosJson = JSON.stringify(st);
        const url = `https://apicontroledematerial.onrender.com/api/item/${JSON.stringify(filtro)}`;
        /*const req = await fetch(url,{
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body:dadosJson
        });*/
        //const res = await req.json();
        //console.log(res.result);
        //return res.result;
        console.log('Editar Item', st);
    }else{
        console.log(codigo);
        return console.log("Dados não editados, ID do item não identificado!");
    }
    

    
}

export default OperRetirarItem;