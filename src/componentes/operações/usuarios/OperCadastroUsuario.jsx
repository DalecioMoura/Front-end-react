import React from "react";

async function CadastrarUsuario(dados){
    const dadosJson = JSON.stringify(dados)
    const req = await fetch('https://apicontroledematerial.onrender.com/api/usuario',{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: dadosJson
    });
    const res = await req.json();
    return res.result;
}

export default CadastrarUsuario;