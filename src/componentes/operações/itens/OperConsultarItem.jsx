import React, {useState} from "react";

async function OperConsultarItens(dados){

    let isFiltro = false;
    console.log(dados);
    let filtro = {filtro:'', valor:''}
    for(let i in dados){
        if(dados[i] !== '' && dados[i] !== null){
            filtro.filtro = i;
            filtro.valor = dados[i];
            //setIsFiltro(true);
            isFiltro = true;
            console.log(filtro);
            break
        }
    }
    console.log(isFiltro);
    if(isFiltro){
        console.log('Com filtro!');
        const itens = await ConsultaItemComFiltro(filtro);
        return itens;
    }else{
        console.log('Sem filtro!');
        const itens = await ConsultaItemSemFiltro();
        console.log(itens);
        return itens;
    }
}

async function ConsultaItemComFiltro(filtro){
    console.log('Consulta com filtro!');
    const url = `https://apicontroledematerial.onrender.com/api/item/${JSON.stringify(filtro)}`;
    const req = await fetch(url);
    const res = await req.json();
    console.log(res.result);
    return res.result;
}

async function ConsultaItemSemFiltro(){
    console.log('Consulta sem filtro!');
    const url = 'https://apicontroledematerial.onrender.com/api/itens';
    const req = await fetch(url);
    const res = await req.json();
    console.log(res.result);
    return res.result;
}

export default OperConsultarItens;