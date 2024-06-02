import React from "react";

async function ConsultaSemFiltro(){
    const req = await fetch('https://apicontroledematerial.onrender.com/api/usuarios');
    const res = await req.json();
    return res.result;
}
async function ConsultaComFiltro(dados){
    const filtro = {filtro:'', valor:''};
    for(let i in dados){
        if(dados[i] !== '' && dados[i] !== null){
            filtro.filtro = i;
            filtro.valor = dados[i];
            break
        }
    }
    const req = await fetch(`https://apicontroledematerial.onrender.com/api/usuario/${JSON.stringify(filtro)}`);
    const res = await req.json();
    return res.result;
}

export {ConsultaComFiltro, ConsultaSemFiltro};