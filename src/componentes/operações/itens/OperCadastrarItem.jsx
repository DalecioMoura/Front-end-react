import React from "react";

async function OperCadastrarItem(dados, st){

    dados.status = st;
    console.log(dados);
    let dadosJson = JSON.stringify(dados);
    console.log(dadosJson);
    const url = 'https://apicontroledematerial.onrender.com/api/item';

    const req = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: dadosJson
    });

    const res = await req.json();

    console.log(res.result);

    return res.result;

}

export default OperCadastrarItem