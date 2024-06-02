import React from "react";

async function EditarDadosUsuario(dados, id){
   
    if(id){
        const dadosJson = JSON.stringify(dados)
        if(id){
            const req = await fetch(`https://apicontroledematerial.onrender.com/api/usuario/${id}`,{
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: dadosJson
            });
            const res = await req.json();
            console.log('Dados Editados com sucesso!');
            return res.result;
            
        }else{
            console.log('Dados não editados, ID não identificado!');
            return [];
        }    
    }
}

export default EditarDadosUsuario;